import React from 'react';
import './card_basic.css';

import { check_icon } from '../../assets';

const Card_basic = ({ posCard, showImg, sampleImg, posImg, styleImg, showDesc, showList, showBtn }) => {
  return (
    <div className={'nois__card-basic' + ' ' + (posCard || '')}>
      <div className={'nois__card' + ' ' + (posImg || '')}>
        <div className={'nois__card-img' + ' ' + (showImg || '') + ' ' + (styleImg || '')}>
          <img src={sampleImg} alt="" />
        </div>
        <div className='nois__card-content'>
          <div className='nois__card-content-title'>
            Custom Software Development
          </div>
          <div className={'nois__card-content-desc' + ' ' + (showDesc || '')}>
            New Ocean IS is a one-stop provider on software system from software to hardware, from consulting service to full lifecycle software development. Our accumulated experiences spread out different industries and tech: Manufacturing, Telecoms, Insurance, Logistics, Pharmaceuticals, Materials, Cinema, Supply Chain, Banking, IoT, Smart Factories, etc.
          </div>
          <div className={'nois__card-content-checklist' + ' ' + (showList || '')}>
            <div className='nois__card-content-checklist-item'>
              <img src={check_icon} alt="" />
              <div>Quality Control</div>
            </div>
            <div className='nois__card-content-checklist-item'>
              <img src={check_icon} alt="" />
              <div>Regulatory Compliance</div>
            </div>
            <div className='nois__card-content-checklist-item'>
              <img src={check_icon} alt="" />
              <div>Improved Efficiency</div>
            </div>
          </div>
          <div className='nois__card-content-action'>
            <a className={(showBtn || '')} href="http://" target="_blank">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_basic