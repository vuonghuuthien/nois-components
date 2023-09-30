import React from 'react';
import './App.css';

import { Navbar_1, Navbar_2 } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='nois__cont'>
        <div className='nois__wrapper'>
          <Navbar_1 />
          <Navbar_2 />
        </div>
      </div>
    </div>
  )
}

export default App