import React from 'react';

// Header 
const Header = () => {
    const handleHomeClick = ()=> {
        window.location.reload(true);
    }
  return (
    <header>
      <div className="logo-nav-container">
        <img src="/Vanguard.png" alt="logo" />
      </div>
      <nav>
        <ul>
          <li><a className='home' href="#" onClick={handleHomeClick}>Home</a></li>
          <li><a className='about' href="#footer">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
