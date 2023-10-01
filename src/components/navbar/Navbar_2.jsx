import React from 'react';
import './navbar.css';

import Card_2 from '../card_gradient/Card_gradient';
import Checkbox from '../checkbox/Checkbox';
import { faDatabase, faDesktop, faCloud, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft, faJsSquare } from '@fortawesome/free-brands-svg-icons';

const Navbar_2 = () => {

  let showIcon_list = ['nois__hide', ''];
  let sampleIcon_list = [faDatabase, faDesktop, faCloud, faMicrosoft, faJsSquare, faPhoneAlt];
  let posIcon_list = ['nois__card-icon__top', 'nois__card-icon__right', 'nois__card-icon__bottom', 'nois__card-icon__left'];
  let content_list = ['Data Analytics, Data Engineering & Machine Learning', 'IoT (Internet of Things)​', 'Azure Cloud Services Applications​', 'Microsoft Dynamics 365 for Sales & Marketing (CRM)', 'JavaScript Frameworks & Libraries', 'Mobile Apps​'];

  const [showIcon, setShowIcon] = React.useState(showIcon_list[1]);
  const [posIcon, setPosIcon] = React.useState(posIcon_list[3]);
  const [cardList, setAddRemoveCard] = React.useState([
    { showIcon: showIcon, sampleIcon: sampleIcon_list[0], posIcon: posIcon, content: content_list[0] },
    { showIcon: showIcon, sampleIcon: sampleIcon_list[1], posIcon: posIcon, content: content_list[1] },
    { showIcon: showIcon, sampleIcon: sampleIcon_list[2], posIcon: posIcon, content: content_list[2] },
    { showIcon: showIcon, sampleIcon: sampleIcon_list[3], posIcon: posIcon, content: content_list[3] },
    { showIcon: showIcon, sampleIcon: sampleIcon_list[4], posIcon: posIcon, content: content_list[4] },
    { showIcon: showIcon, sampleIcon: sampleIcon_list[5], posIcon: posIcon, content: content_list[5] },
  ]);

  const changeShowIcon = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    let newCardList = [...cardList]; // important

    newCardList.forEach((element) => {
      element.showIcon = showIcon_list[index];
    });

    setShowIcon(newCardList);
  };

  const changePosIcon = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    let newCardList = [...cardList]; // important

    newCardList.forEach((element) => {
      element.posIcon = posIcon_list[index];
    });

    setPosIcon(newCardList);
  };

  React.useEffect(() => {
    // console.log(`Checked cardList is now: ${cardList}`);
    // console.log(`Checked cardList length: ${cardList.length}`);
  }, [cardList]);

  const changeAddRemoveCard = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    let newCardList = [...cardList]; // important

    if (index == 0 && newCardList.length > 1) {
      newCardList.pop();
    }
    if (index == 1) {
      let sampleCard = { ...newCardList[Math.floor(Math.random() * newCardList.length)] };
      sampleCard.content = "Sample Card";
      newCardList.push(sampleCard);
    }

    setAddRemoveCard(newCardList);
  };

  return (
    <div>
      <div className='navbar'>
        {/* Check box */}
        <div className='title'>
          Show Image :
        </div>
        <div className="cont-main">
          <Checkbox name="showIcon" id="showIcon-0" info="Hide" onChange={changeShowIcon} />
          <Checkbox name="showIcon" id="showIcon-1" info="Show" onChange={changeShowIcon} />
        </div>
        <div className='title'>
          Position Image :
        </div>
        <div className="cont-main">
          <Checkbox name="posIcon" id="posIcon-0" info="Top" onChange={changePosIcon} />
          <Checkbox name="posIcon" id="posIcon-1" info="Right" onChange={changePosIcon} />
          <Checkbox name="posIcon" id="posIcon-2" info="Bottom" onChange={changePosIcon} />
          <Checkbox name="posIcon" id="posIcon-3" info="Left" onChange={changePosIcon} />
        </div>
        <div className='title'>
          Add / Remove Card :
        </div>
        <div className="cont-main">
          <Checkbox name="addRemoveCard" id="addRemoveCard-0" info="Remove" onClick={changeAddRemoveCard} />
          <Checkbox name="addRemoveCard" id="addRemoveCard-1" info="Add" onClick={changeAddRemoveCard} />
        </div>
      </div>

      <div className='cont-space'></div>
      {/* Card_2 */}
      <div className='nois__cont__card-gradient'>
        {/* <Card_2 showIcon={showIcon} sampleIcon={sampleIcon_list[0]} posIcon={posIcon} content={content_list[0]} /> */}
        {
          cardList.map(item => (
            <Card_2 showIcon={item.showIcon} sampleIcon={item.sampleIcon} posIcon={item.posIcon} content={item.content} />
          ))
        }
      </div>
      <div className='cont-space'></div>
    </div>
  )
}

export default Navbar_2