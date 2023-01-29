import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src='logo.png' alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Bosh sahifa</a></li>
        <li className="p__opensans"><a href="#about">Biz haqimizda</a></li>
        <li className="p__opensans"><a href="#menu">Menyu</a></li>
        <li className="p__opensans"><a href="#awards">Atmosfera</a></li>
        <li className="p__opensans"><a href="#contact">Aloqa uchun</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Kirish / Ro'yxatdan o'tish</a>
        <div />
        <a href="/" className="p__opensans">Buyurtma uchun</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (<div className="app__navbar-smallscreen-overlay flex-center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen-links">
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#about">About Us</a></li>
            <li className="p__opensans"><a href="#menu">Menu</a></li>
            <li className="p__opensans"><a href="#awards">Awards</a></li>
            <li className="p__opensans"><a href="#contact">Contact Us</a></li>
          </ul>
        </div>)}
      </div>
    </nav>
  )
};

export default Navbar;
