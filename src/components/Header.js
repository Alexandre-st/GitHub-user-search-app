import React, { useEffect, useState } from 'react';

import moon from '../assets/images/icon-moon.svg';
import sun from '../assets/images/icon-sun.svg';

const Header = () => {

  const [mode, setMode] = useState('light');

  useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => onSelectMode(e.matches ? 'dark' : 'light'));

    // Setup dark/light mode for the first time
    onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    }
  }, []);

  const onSelectMode = (mode) => {
    setMode(mode);
    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  return ( 
    <header>
      <div className="header">
        <h1>devfinder</h1>
          {mode === 'dark' ? 
            <div className="header-toggle" onClick={() => onSelectMode('light')}>
              <p>LIGHT</p> 
              <img src={sun} alt="Soleil pour changer la couleur du thème" />
            </div>
            : 
            <div className="header-toggle" onClick={() => onSelectMode('dark')}>
              <p>DARK</p> 
              <img src={moon} alt="Lune pour changer la couleur du thème" />
            </div>
          }
      </div>
      
    </header>
   );
}
 
export default Header;