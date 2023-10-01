import React from 'react';
import './navbar.css';

import Card_slider from '../card_slider/Card_slider';
import { dynamics_365_img } from '../../assets';

const Navbar_3 = () => {

  return (
    <div>
      <div className='navbar'>
        {/* Check box */}
      </div>

      <div className='cont-space'></div>
      {/* Card_slider */}
      <Card_slider sampleImg={dynamics_365_img} />
      <div className='cont-space'></div>
    </div>
  )
}

export default Navbar_3