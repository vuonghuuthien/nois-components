import React from 'react';
import './navbar.css';

import { useState } from 'react';
import Card_1 from '../card_1/Card_1';
import Checkbox from '../checkbox/Checkbox';

const Navbar = () => {

  let posImg_list = ['nois__card-img__top', 'nois__card-img__right', 'nois__card-img__bottom', 'nois__card-img__left'];
  let styleImg_list = ['nois__card-img', 'nois__card-imgfull', 'nois__card-imgover'];
  // let styleImg = styleImg_list[0];
  const [posImg, setPosImg] = React.useState(posImg_list[0]);
  const [styleImg, setStyleImg] = React.useState(styleImg_list[0]);

  const changePosImg = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setPosImg(posImg_list[index]);
  };

  const changeStyleImg = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    // styleImg = styleImg_list[index];
    setStyleImg(styleImg_list[index]);
  };

  return (
    <div>
      {/* Check box */}
      <div className='title'>
        Position Image :
      </div>
      <div className="cont-main">
        <Checkbox name="posImg" id="posImg-0" info="Top" onChange={changePosImg} />
        <Checkbox name="posImg" id="posImg-1" info="Right" onChange={changePosImg} />
        <Checkbox name="posImg" id="posImg-2" info="Bottom" onChange={changePosImg} />
        <Checkbox name="posImg" id="posImg-3" info="Left" onChange={changePosImg} />
      </div>
      <div className='title'>
        Style Image :
      </div>
      <div className="cont-main">
        <Checkbox name="styleImg" id="styleImg-0" info="Fit" onChange={changeStyleImg} />
        <Checkbox name="styleImg" id="styleImg-1" info="Full" onChange={changeStyleImg} />
        <Checkbox name="styleImg" id="styleImg-2" info="Over" onChange={changeStyleImg} />
      </div>

      {/* Card_1 */}
      <Card_1 posImg={posImg} styleImg={styleImg} />
    </div>
  )
}

export default Navbar