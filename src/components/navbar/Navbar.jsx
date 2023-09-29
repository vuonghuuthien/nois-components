import React from 'react';
import './navbar.css';

import { useState } from 'react';
import Card_1 from '../card_1/Card_1';
import Checkbox from '../checkbox/Checkbox';
import { check_illustration_icon, store_illustration_icon, archive_illustration_icon, service_img } from '../../assets';

const Navbar = () => {

  let posCard_list = ['nois__card__left', 'nois__card__center', 'nois__card__right'];
  let showImg_list = ['nois__hide', ''];
  let sampleImg_list = [check_illustration_icon, store_illustration_icon, archive_illustration_icon, service_img];
  let posImg_list = ['nois__card-img__top', 'nois__card-img__right', 'nois__card-img__bottom', 'nois__card-img__left'];
  let styleImg_list = ['nois__card-img__fit', 'nois__card-img__fill', 'nois__card-img__full', 'nois__card-img__over'];
  let showDesc_list = ['nois__hide', ''];
  let showList_list = ['nois__hide', ''];
  let showBtn_list = ['nois__hide', 'nois__card-content-action__link', 'nois__card-content-action__btn', 'nois__card-content-action__icon'];

  const [posCard, setPosCard] = React.useState(posCard_list[1]);
  const [showImg, setShowImg] = React.useState(showImg_list[0]);
  const [sampleImg, setSampleImg] = React.useState(sampleImg_list[0]);
  const [posImg, setPosImg] = React.useState(posImg_list[0]);
  const [styleImg, setStyleImg] = React.useState(styleImg_list[0]);
  const [showDesc, setShowDesc] = React.useState(showDesc_list[0]);
  const [showList, setShowList] = React.useState(showList_list[0]);
  const [showBtn, setShowBtn] = React.useState(showBtn_list[0]);

  const changePosCard = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setPosCard(posCard_list[index]);
  };

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

  const changeStyleImg = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setStyleImg(styleImg_list[index]);
  };

  const changeShowDesc = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setShowDesc(showDesc_list[index]);
  };

  const changeShowList = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setShowList(showList_list[index]);
  };

  const changeShowBtn = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setShowBtn(showBtn_list[index]);
  };

  return (
    <div>
      {/* Check box */}
      <div className='title'>
        Position Card :
      </div>
      <div className="cont-main">
        <Checkbox name="posCard" id="posCard-0" info="Left" onChange={changePosCard} />
        <Checkbox name="posCard" id="posCard-1" info="Center" onChange={changePosCard} />
        <Checkbox name="posCard" id="posCard-2" info="Right" onChange={changePosCard} />
      </div>
      <div className='title'>
        Show Image :
      </div>
      <div className="cont-main">
        <Checkbox name="showImg" id="showImg-0" info="Hide" onChange={changeShowImg} />
        <Checkbox name="showImg" id="showImg-1" info="Show" onChange={changeShowImg} />
      </div>
      <div className='title'>
        Sample Image :
      </div>
      <div className="cont-main">
        <Checkbox name="sampleImg" id="sampleImg-0" info="Image 1" onChange={changeSampleImg} />
        <Checkbox name="sampleImg" id="sampleImg-1" info="Image 2" onChange={changeSampleImg} />
        <Checkbox name="sampleImg" id="sampleImg-2" info="Image 3" onChange={changeSampleImg} />
        <Checkbox name="sampleImg" id="sampleImg-3" info="Image 4" onChange={changeSampleImg} />
      </div>
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
        <Checkbox name="styleImg" id="styleImg-1" info="Fill" onChange={changeStyleImg} />
        <Checkbox name="styleImg" id="styleImg-2" info="Full" onChange={changeStyleImg} />
        <Checkbox name="styleImg" id="styleImg-3" info="Over" onChange={changeStyleImg} />
      </div>
      <div className='title'>
        Show Description :
      </div>
      <div className="cont-main">
        <Checkbox name="showDesc" id="showDesc-0" info="Hide" onChange={changeShowDesc} />
        <Checkbox name="showDesc" id="showDesc-1" info="Show" onChange={changeShowDesc} />
      </div>
      <div className='title'>
        Show List :
      </div>
      <div className="cont-main">
        <Checkbox name="showList" id="showList-0" info="Hide" onChange={changeShowList} />
        <Checkbox name="showList" id="showList-1" info="Show" onChange={changeShowList} />
      </div>
      <div className='title'>
        Show Button Action :
      </div>
      <div className="cont-main">
        <Checkbox name="showBtn" id="showBtn-0" info="Hide" onChange={changeShowBtn} />
        <Checkbox name="showBtn" id="showBtn-1" info="Link" onChange={changeShowBtn} />
        <Checkbox name="showBtn" id="showBtn-2" info="Button" onChange={changeShowBtn} />
        {/* <Checkbox name="showBtn" id="showBtn-3" info="Icon" onChange={changeShowBtn} /> */}
      </div>

      <div className='cont-space'></div>
      {/* Card_1 */}
      <Card_1 posCard={posCard} showImg={showImg} sampleImg={sampleImg} posImg={posImg} styleImg={styleImg} showDesc={showDesc} showList={showList} showBtn={showBtn} />
    </div>
  )
}

export default Navbar