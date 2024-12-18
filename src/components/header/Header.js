import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Header.css'; 
import image1 from '../images/logo.png'; 

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <div className="logo-container">
        <div className="logo">
          <img src={image1} alt="Logo" />
        </div>
        <div className="logo-text">
          <h1>LA CONSOLACION</h1>
          <p>COLLEGE BACOLOD</p>
        </div>
      </div>

      <nav className="navlinks">
        <ul>
          <li 
            className={activeLink === 'home' ? 'active' : ''} 
            onClick={() => handleClick('home')}
          >
            <Link to="/"></Link>
          </li>
          <li   
            className={activeLink === 'intro' ? 'active' : ''} 
            onClick={() => handleClick('intro')}
          >
            <Link to="#intro"></Link>
          </li>
          <li 
            className={activeLink === 'college' ? 'active' : ''} 
            onClick={() => handleClick('college')}
          >
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
