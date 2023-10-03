import React from 'react';
import './navbar.css';

import Card_quote from '../card_quote/Card_quote';
import Checkbox from '../checkbox/Checkbox';
import { smart_home_icon, analyzing_icon } from '../../assets';

const Navbar_6 = () => {

  let showImg_list = ['nois__hide', ''];
  let sampleImg_list = [smart_home_icon, analyzing_icon];
  let styleImg_list = ['nois__card-img__fit', 'nois__card-img__fill', 'nois__card-img__full', 'nois__card-img__over'];
  let showDesc_list = ['nois__hide', ''];
  let showSale_list = ['nois__hide', ''];
  let showSalePrice_list = ['nois__hide', ''];
  let showSalePercent_list = ['nois__hide', ''];
  let showPrice_list = ['nois__hide', ''];
  let showPriceUnit_list = ['nois__hide', ''];
  let showPriceValue_list = ['nois__hide', ''];
  let showPriceTime_list = ['nois__hide', ''];
  let showList_list = ['nois__hide', ''];
  let showBtn_list = ['nois__hide', 'nois__card-content-action__link', 'nois__card-content-action__btn', 'nois__card-content-action__icon'];

  const [showImg, setShowImg] = React.useState(showImg_list[1]);
  const [sampleImg, setSampleImg] = React.useState(sampleImg_list[0]);
  const [styleImg, setStyleImg] = React.useState(styleImg_list[0]);
  const [showDesc, setShowDesc] = React.useState(showDesc_list[0]);
  const [showSale, setShowSale] = React.useState(showSale_list[0]);
  const [showSalePrice, setShowSalePrice] = React.useState(showSalePrice_list[0]);
  const [showSalePercent, setShowSalePercent] = React.useState(showSalePercent_list[0]);
  const [showPrice, setShowPrice] = React.useState(showPrice_list[0]);
  const [showPriceUnit, setShowPriceUnit] = React.useState(showPriceUnit_list[0]);
  const [showPriceValue, setShowPriceValue] = React.useState(showPriceValue_list[0]);
  const [showPriceTime, setShowPriceTime] = React.useState(showPriceTime_list[0]);
  const [showList, setShowList] = React.useState(showList_list[0]);
  const [showBtn, setShowBtn] = React.useState(showBtn_list[0]);

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

  const changeShowSale = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setShowSale(showDesc_list[index]);
  };

  const changeShowSalePrice = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setShowSalePrice(showDesc_list[index]);
  };

  const changeShowSalePercent = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setShowSalePercent(showDesc_list[index]);
  };

  const changeShowPrice = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setShowPrice(showDesc_list[index]);
  };

  const changeShowPriceUnit = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setShowPriceUnit(showDesc_list[index]);
  };

  const changeShowPriceValue = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setShowPriceValue(showDesc_list[index]);
  };

  const changeShowPriceTime = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setShowPriceTime(showDesc_list[index]);
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
      <div className='navbar'>
        {/* Check box */}
        <div className='title'>
          Show Image :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_showImg" id="cardQuote_showImg-0" info="Hide" onChange={changeShowImg} />
          <Checkbox name="cardQuote_showImg" id="cardQuote_showImg-1" info="Show" onChange={changeShowImg} />
        </div>
        <div className='title'>
          Sample Image :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_sampleImg" id="cardQuote_sampleImg-0" info="Image 1" onChange={changeSampleImg} />
          <Checkbox name="cardQuote_sampleImg" id="cardQuote_sampleImg-1" info="Image 2" onChange={changeSampleImg} />
        </div>
        <div className='title'>
          Style Image :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_styleImg" id="cardQuote_styleImg-0" info="Fit" onChange={changeStyleImg} />
          <Checkbox name="cardQuote_styleImg" id="cardQuote_styleImg-1" info="Fill" onChange={changeStyleImg} />
          <Checkbox name="cardQuote_styleImg" id="cardQuote_styleImg-2" info="Full" onChange={changeStyleImg} />
          <Checkbox name="cardQuote_styleImg" id="cardQuote_styleImg-3" info="Over" onChange={changeStyleImg} />
        </div>
        <div className='title'>
          Show Description :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_showDesc" id="cardQuote_showDesc-0" info="Hide" onChange={changeShowDesc} />
          <Checkbox name="cardQuote_showDesc" id="cardQuote_showDesc-1" info="Show" onChange={changeShowDesc} />
        </div>
        <div className='title'>
          Show Sale :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_showSale" id="cardQuote_showSale-0" info="Hide" onChange={changeShowSale} />
          <Checkbox name="cardQuote_showSale" id="cardQuote_showSale-1" info="Show" onChange={changeShowSale} />
        </div>
        <div className='title'>
          Show Sale Price :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_showSalePrice" id="cardQuote_showSalePrice-0" info="Hide" onChange={changeShowSalePrice} />
          <Checkbox name="cardQuote_showSalePrice" id="cardQuote_showSalePrice-1" info="Show" onChange={changeShowSalePrice} />
        </div>
        <div className='title'>
          Show Sale Percent :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_showSalePercent" id="cardQuote_showSalePercent-0" info="Hide" onChange={changeShowSalePercent} />
          <Checkbox name="cardQuote_showSalePercent" id="cardQuote_showSalePercent-1" info="Show" onChange={changeShowSalePercent} />
        </div>
        <div className='title'>
          Show Price :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_showPrice" id="cardQuote_showPrice-0" info="Hide" onChange={changeShowPrice} />
          <Checkbox name="cardQuote_showPrice" id="cardQuote_showPrice-1" info="Show" onChange={changeShowPrice} />
        </div>
        <div className='title'>
          Show Price Unit :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_showPriceUnit" id="cardQuote_showPriceUnit-0" info="Hide" onChange={changeShowPriceUnit} />
          <Checkbox name="cardQuote_showPriceUnit" id="cardQuote_showPriceUnit-1" info="Show" onChange={changeShowPriceUnit} />
        </div>
        <div className='title'>
          Show Price Value :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_showPriceValue" id="cardQuote_showPriceValue-0" info="Hide" onChange={changeShowPriceValue} />
          <Checkbox name="cardQuote_showPriceValue" id="cardQuote_showPriceValue-1" info="Show" onChange={changeShowPriceValue} />
        </div>
        <div className='title'>
          Show Price Time :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_showPriceTime" id="cardQuote_showPriceTime-0" info="Hide" onChange={changeShowPriceTime} />
          <Checkbox name="cardQuote_showPriceTime" id="cardQuote_showPriceTime-1" info="Show" onChange={changeShowPriceTime} />
        </div>
        <div className='title'>
          Show Button Action :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_showBtn" id="cardQuote_showBtn-0" info="Hide" onChange={changeShowBtn} />
          <Checkbox name="cardQuote_showBtn" id="cardQuote_showBtn-1" info="Link" onChange={changeShowBtn} />
          <Checkbox name="cardQuote_showBtn" id="cardQuote_showBtn-2" info="Button" onChange={changeShowBtn} />
        </div>
        <div className='title'>
          Show List :
        </div>
        <div className="cont-main">
          <Checkbox name="cardQuote_showList" id="cardQuote_showList-0" info="Hide" onChange={changeShowList} />
          <Checkbox name="cardQuote_showList" id="cardQuote_showList-1" info="Show" onChange={changeShowList} />
        </div>
      </div>

      <div className='cont-space'></div>
      {/* Card_quote */}
      <Card_quote showImg={showImg} sampleImg={sampleImg} styleImg={styleImg} showDesc={showDesc} showSale={showSale} showSalePrice={showSalePrice} showSalePercent={showSalePercent} showPrice={showPrice} showPriceUnit={showPriceUnit} showPriceValue={showPriceValue} showPriceTime={showPriceTime} showList={showList} showBtn={showBtn} />
      <div className='cont-space'></div>
    </div>
  )
}

export default Navbar_6