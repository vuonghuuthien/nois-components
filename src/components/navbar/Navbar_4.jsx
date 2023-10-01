import React from 'react';
import './navbar.css';

import Card_feedback from '../card_feedback/Card_feedback';
import { five_stars_icon, insightus_logo_img } from '../../assets';

const Navbar_4 = () => {

  return (
    <div>
      <div className='navbar'>
        {/* Check box */}
      </div>

      <div className='cont-space'></div>
      {/* Card_feedback */}
      <Card_feedback ratingImg={five_stars_icon} userImg={insightus_logo_img} />
      <div className='cont-space'></div>
    </div>
  )
}

export default Navbar_4