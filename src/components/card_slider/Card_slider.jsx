import React from 'react';
import './card_slider.css';

import { check_icon, double_arrow_right_icon } from '../../assets';

const Card_slider = ({ sampleImg }) => {
  return (
    <div className={'nois__card-slider'}>
      <div className={'nois__card'}>
        <div className={'nois__card-img'}>
          <img src={sampleImg} alt="" />
        </div>
        <div className='nois__card-content'>
          <div className='nois__card-content-title'>
            Dynamics 365
          </div>
          <div className={'nois__card-content-checklist'}>
            <div className='nois__card-content-checklist-item'>
              <img src={check_icon} alt="" />
              <div>Custom Data Platform</div>
            </div>
            <div className='nois__card-content-checklist-item'>
              <img src={check_icon} alt="" />
              <div>Sales & Marketing</div>
            </div>
            <div className='nois__card-content-checklist-item'>
              <img src={check_icon} alt="" />
              <div>Supply Chain</div>
            </div>
            <div className='nois__card-content-checklist-item'>
              <img src={check_icon} alt="" />
              <div>Human Resource</div>
            </div>
            <div className='nois__card-content-checklist-item'>
              <img src={check_icon} alt="" />
              <div>Small & Medium Business</div>
            </div>
            <div className='nois__card-content-checklist-item'>
              <img src={check_icon} alt="" />
              <div>Project Management</div>
            </div>
          </div>
          <div className='nois__card-content-action'>
            <a className='nois__card-content-action__img' href="http://" target="_blank">
              <img src={double_arrow_right_icon} alt="double-arrow-right-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_slider