import React from 'react';
import './card_feedback.css';

import { check_icon } from '../../assets';

const Card_feedback = ({ ratingImg, userImg }) => {
  return (
    <div className={'nois__card-feedback'}>
      <div className={'nois__card'}>
        <div className={'nois__card-rating'}>
          <img src={ratingImg} alt="" />
        </div>
        <div className='nois__card-content'>
          <div className={'nois__card-content-feedback'}>
            Your team's performance was truly impressive, exceeding all expectations. The dedication, expertise and professionalism demonstrated throughout the project made working with you an absolute pleasure. I look forward to future collaborations
          </div>
          <div className='nois__card-content-user'>
            <div className='nois__card-content-user__img'>
              <img src={userImg} alt="user-icon" />
            </div>
            <div className='nois__card-content-user__content'>
              <div className='nois__card-content-user__content-name'>
                Craig Hill
              </div>
              <div className='nois__card-content-user__content-position'>
                Co-Founder & CEO - Insightus
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card_feedback