import React from 'react';
import './card_gradient.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card_gradient = ({ showIcon, sampleIcon, posIcon, content }) => {
  return (
    <div className='nois__card-gradient'>
      <div className={'nois__card' + ' ' + (posIcon || '')}>
        <div className={'nois__card-icon' + ' ' + (showIcon || '')}>
          <i>
            <FontAwesomeIcon icon={sampleIcon} />
          </i>
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

export default Card_gradient