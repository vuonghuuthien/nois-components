import React from 'react';
import './card_gradient.css';

const Card_gradient = ({ showIcon, sampleIcon, posIcon }) => {
  return (
    <div className='nois__card-gradient'>
      <div className={'nois__card' + ' ' + (posIcon || '')}>
        <div className={'nois__card-icon' + ' ' + (showIcon || '')}>
          <img src={sampleIcon} alt="" />
        </div>
        <div className='nois__card-content'>
          <div className='nois__card-content-title'>
            Custom Software Development
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_gradient