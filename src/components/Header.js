import React, { useEffect, useState } from 'react';

import moon from '../assets/images/icon-moon.svg';
import sun from '../assets/images/icon-sun.svg';
import loupe from '../assets/images/icon-search.svg';

const Header = () => {
  // const setDarkMode = () => {
  //   document.querySelector('body').classList = 'dark';
  //   localStorage.setItem('colorMode', 'dark');
  // };

  // const setLightMode = () => {
  //   document.querySelector('body').classList = 'light';
  //   localStorage.setItem('colorMode', 'light');
  // }

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
        {/* <div className="header-toggle" onClick={onSelectMode}> */}
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
        {/* </div> */}

      </div>
      <div className="search">
        <form className="search-bar" id="searchForm">
          <div className="search-bar-glass">
            <img src={loupe} alt="Loupe de recherche  " />
            <input type="text" id="username" placeholder="Search GitHub username…" />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
   );
}
 
export default Header;