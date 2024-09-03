import  { useState } from 'react';
import './Hamburger.css';

export default function HamburgerMenuOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-container">
      <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`overlay ${isOpen ? 'overlay-open' : ''}`}>
        <div className="menu-items">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </div>
  );
}