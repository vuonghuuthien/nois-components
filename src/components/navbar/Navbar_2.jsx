import React from 'react';
import './navbar.css';

import Card_2 from '../card_gradient/Card_gradient';
import Checkbox from '../checkbox/Checkbox';
import { cloud_solid_icon, database_solid_icon, desktop_solid_icon, js_square_icon, microsoft_icon, mobile_alt_solid_icon } from '../../assets';

const Navbar_2 = () => {

  let showIcon_list = ['nois__hide', ''];
  let sampleIcon_list = [cloud_solid_icon, database_solid_icon, desktop_solid_icon, js_square_icon, microsoft_icon, mobile_alt_solid_icon];
  let posIcon_list = ['nois__card-icon__top', 'nois__card-icon__right', 'nois__card-icon__bottom', 'nois__card-icon__left'];

  const [showIcon, setShowIcon] = React.useState(showIcon_list[0]);
  const [sampleIcon, setSampleIcon] = React.useState(sampleIcon_list[0]);
  const [posIcon, setPosIcon] = React.useState(posIcon_list[0]);

  const changeShowIcon = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setShowIcon(showIcon_list[index]);
  };

  const changeSampleIcon = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setSampleIcon(sampleIcon_list[index]);
  };

  const changePosIcon = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setPosIcon(posIcon_list[index]);
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
          Sample Image :
        </div>
        <div className="cont-main">
          <Checkbox name="sampleIcon" id="sampleIcon-0" info="Image 1" onChange={changeSampleIcon} />
          <Checkbox name="sampleIcon" id="sampleIcon-1" info="Image 2" onChange={changeSampleIcon} />
          <Checkbox name="sampleIcon" id="sampleIcon-2" info="Image 3" onChange={changeSampleIcon} />
          <Checkbox name="sampleIcon" id="sampleIcon-3" info="Image 4" onChange={changeSampleIcon} />
          <Checkbox name="sampleIcon" id="sampleIcon-4" info="Image 5" onChange={changeSampleIcon} />
          <Checkbox name="sampleIcon" id="sampleIcon-5" info="Image 6" onChange={changeSampleIcon} />
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
      </div>

      <div className='cont-space'></div>
      {/* Card_2 */}
      <Card_2 showIcon={showIcon} sampleIcon={sampleIcon} posIcon={posIcon} />
      <div className='cont-space'></div>
    </div>
  )
}

export default Navbar_2