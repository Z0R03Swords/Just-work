import { useState } from 'react';
import './Hamburger1.css';

export default function FullScreenHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fullscreen-hamburger-container">
      <div className={`fullscreen-hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="fullscreen-bar"></div>
        <div className="fullscreen-bar"></div>
        <div className="fullscreen-bar"></div>
      </div>
      <div className={`fullscreen-overlay ${isOpen ? 'fullscreen-overlay-open' : ''}`}>
        <div className="fullscreen-menu-items">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </div>
  );
}