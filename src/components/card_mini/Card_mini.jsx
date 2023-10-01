import React from 'react';
import './card_mini.css';

const Card_mini = ({ showImg, sampleImg, posImg, content }) => {
  return (
    <div className='nois__card-mini'>
      <div className={'nois__card' + ' ' + (posImg || '')}>
        <div className={'nois__card-img' + ' ' + (showImg || '')}>
          <img src={sampleImg} alt="" />
        </div>
        <div className='nois__card-content'>
          <div className='nois__card-content-title'>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_mini