import React from 'react';
import './navbar.css';

import Card_mini from '../card_mini/Card_mini';
import Checkbox from '../checkbox/Checkbox';
import { smart_home_icon, analyzing_icon } from '../../assets';

const Navbar_5 = () => {

  let showImg_list = ['nois__hide', ''];
  let sampleImg_list = [smart_home_icon, analyzing_icon];
  let posImg_list = ['nois__card-img__top', 'nois__card-img__right', 'nois__card-img__bottom', 'nois__card-img__left'];

  const [showImg, setShowImg] = React.useState(showImg_list[1]);
  const [sampleImg, setSampleImg] = React.useState(sampleImg_list[0]);
  const [posImg, setPosImg] = React.useState(posImg_list[3]);

  const changeShowImg = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setShowImg(showImg_list[index]);
  };

  const changeSampleImg = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setSampleImg(sampleImg_list[index]);
  };

  const changePosImg = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setPosImg(posImg_list[index]);
  };

  return (
    <div>
      <div className='navbar'>
        {/* Check box */}
        <div className='title'>
          Show Image :
        </div>
        <div className="cont-main">
          <Checkbox name="cardMni_showImg" id="cardMni_showImg-0" info="Hide" onChange={changeShowImg} />
          <Checkbox name="cardMni_showImg" id="cardMni_showImg-1" info="Show" onChange={changeShowImg} />
        </div>
        <div className='title'>
          Sample Image :
        </div>
        <div className="cont-main">
          <Checkbox name="cardMni_sampleImg" id="cardMni_sampleImg-0" info="Image 1" onChange={changeSampleImg} />
          <Checkbox name="cardMni_sampleImg" id="cardMni_sampleImg-1" info="Image 2" onChange={changeSampleImg} />
        </div>
        <div className='title'>
          Position Image :
        </div>
        <div className="cont-main">
          <Checkbox name="cardMni_posImg" id="cardMni_posImg-0" info="Top" onChange={changePosImg} />
          <Checkbox name="cardMni_posImg" id="cardMni_posImg-1" info="Right" onChange={changePosImg} />
          <Checkbox name="cardMni_posImg" id="cardMni_posImg-2" info="Bottom" onChange={changePosImg} />
          <Checkbox name="cardMni_posImg" id="cardMni_posImg-3" info="Left" onChange={changePosImg} />
        </div>
      </div>

      <div className='cont-space'></div>
      {/* Card_mini */}
      <Card_mini showImg={showImg} sampleImg={sampleImg} posImg={posImg} content="IT & OT CONVERGENCE" />
      <div className='cont-space'></div>
    </div>
  )
}

export default Navbar_5