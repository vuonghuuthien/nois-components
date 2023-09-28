import React from 'react';
import './card_1.css';

import { check_illustration_icon, check_icon, service_img } from '../../assets';

const Card_1 = ({ posImg, styleImg }) => {
  return (
    <div className={'nois__card' + ' ' + (posImg || '')}>
      <div className={styleImg}>
        <img src={service_img} alt="" />
      </div>
      <div className='nois__card-content'>
        <div className='nois__card-content-title'>
          Custom Software Development
        </div>
        <div className='nois__card-content-desc'>
          New Ocean IS is a one-stop provider on software system from software to hardware, from consulting service to full lifecycle software development. Our accumulated experiences spread out different industries and tech: Manufacturing, Telecoms, Insurance, Logistics, Pharmaceuticals, Materials, Cinema, Supply Chain, Banking, IoT, Smart Factories, etc.
        </div>
        <div className='nois__card-content-checklist'>
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
          <a className='nois__card-content-action-link' href="http://" target="_blank">
            Learn more
          </a>
          <a className='nois__card-content-action-linkbtn' href="http://" target="_blank">
            Learn more
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card_1