import React from 'react';
import './navbar.css';

import { useState } from 'react';
import Card_1 from '../card_1/Card_1';

const Navbar = () => {

  let posImg_list = ['nois__card-img__top', 'nois__card-img__right', 'nois__card-img__bottom', 'nois__card-img__left'];
  let styleImg_list = ['nois__card-img', 'nois__card-imgfull', 'nois__card-imgover'];
  // let styleImg = styleImg_list[0];
  const [posImg, setPosImg] = React.useState(posImg_list[0]);
  const [styleImg, setStyleImg] = React.useState(styleImg_list[0]);

  const changeStyleImg = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    // styleImg = styleImg_list[index];
    setStyleImg(styleImg_list[index]);
  };

  const changePosImg = (event) => {
    const id = event.target.id;
    var index = id.substring(id.indexOf('-') + 1);

    setPosImg(styleImg_list[index]);
  };

  return (
    <div>
      {/* Check box */}
      <div className='title'>
        Position Image :
      </div>
      <div className="cont-main">
        <div className="cont-checkbox">
          <input type="radio" name="posImg" id="posImg-0" onChange={changePosImg} />
          <label htmlFor="posImg-0">
            <span className="cover-checkbox">
              <svg viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg>
            </span>
            <div className="info">Top</div>
          </label>
        </div>
        <div className="cont-checkbox">
          <input type="radio" name="posImg" id="posImg-1" onChange={changePosImg} />
          <label htmlFor="posImg-1">
            <span className="cover-checkbox">
              <svg viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg>
            </span>
            <div className="info">Right</div>
          </label>
        </div>
        <div className="cont-checkbox">
          <input type="radio" name="posImg" id="posImg-2" onChange={changePosImg} />
          <label htmlFor="posImg-2">
            <span className="cover-checkbox">
              <svg viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg>
            </span>
            <div className="info">Bottom</div>
          </label>
        </div>
        <div className="cont-checkbox">
          <input type="radio" name="posImg" id="posImg-3" onChange={changePosImg} />
          <label htmlFor="posImg-3">
            <span className="cover-checkbox">
              <svg viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg>
            </span>
            <div className="info">Left</div>
          </label>
        </div>
      </div>
      <div className='title'>
        Style Image :
      </div>
      <div className="cont-main">
        <div className="cont-checkbox">
          <input type="radio" name="styleImg" id="styleImg-0" onChange={changeStyleImg} />
          <label htmlFor="styleImg-0">
            <span className="cover-checkbox">
              <svg viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg>
            </span>
            <div className="info">Default</div>
          </label>
        </div>
        <div className="cont-checkbox">
          <input type="radio" name="styleImg" id="styleImg-1" onChange={changeStyleImg} />
          <label htmlFor="styleImg-1">
            <span className="cover-checkbox">
              <svg viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg>
            </span>
            <div className="info">Full</div>
          </label>
        </div>
        <div className="cont-checkbox">
          <input type="radio" name="styleImg" id="styleImg-2" onChange={changeStyleImg} />
          <label htmlFor="styleImg-2">
            <span className="cover-checkbox">
              <svg viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg>
            </span>
            <div className="info">Over</div>
          </label>
        </div>
      </div>

      {/* Card_1 */}
      <Card_1 posImg={posImg} styleImg={styleImg} />
    </div>
  )
}

export default Navbar