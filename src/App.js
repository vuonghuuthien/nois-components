import React from 'react';
import './App.css';

import { Navbar_1, Navbar_2, Navbar_3, Navbar_4, Navbar_5 } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='nois__cont'>
        <div className='nois__wrapper'>
          <Navbar_1 />
          <Navbar_2 />
          <Navbar_3 />
          <Navbar_4 />
          <Navbar_5 />
        </div>
      </div>
    </div>
  )
}

export default App