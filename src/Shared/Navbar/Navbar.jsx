import React, { useState } from "react";
import './Navbar.css';
import logo from '../../assets/icons/care-logo.svg';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import DrawerMenu from "./DrawerMenu/DrawerMenu";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = <>
    <li><a>Who we are <span><MdOutlineKeyboardArrowDown size={20} /></span>
      <ul className="sub-menu">
        <li><a>About us</a></li>
        <li><a>Vison</a></li>
        <li><a>Our Team</a></li>
      </ul>
    </a></li>
    <li><a>Our work <span><MdOutlineKeyboardArrowDown size={20} /></span>
      <ul className="sub-menu">
        <li><a>About us</a></li>
        <li><a>Vison</a></li>
        <li><a>Our Team</a></li>
      </ul>
    </a></li>
    <li><a>Partners <span><MdOutlineKeyboardArrowDown size={20} /></span>
      <ul className="sub-menu">
        <li><a>About us</a></li>
        <li><a>Vison</a></li>
        <li><a>Our Team</a></li>
      </ul>
    </a></li>
    <li><a>Impact <span><MdOutlineKeyboardArrowDown size={20} /></span>
      <ul className="sub-menu">
        <li><a>About us</a></li>
        <li><a>Vison</a></li>
        <li><a>Our Team</a></li>
      </ul>
    </a></li>
  </>

  window.onscroll = () => scrollingBg();
  const scrollingBg = () => {
    if (document.documentElement.scrollTop > 50) {
      document.getElementById('main-nav').classList.add('nav-bg');
      document.getElementById('navContainer').classList.add('bb-none')
    }
    else {
      document.getElementById('main-nav').classList.remove('nav-bg');
      document.getElementById('navContainer').classList.remove('bb-none')
    }
  }

  return (
    <nav id="main-nav">
      <div id="navContainer" className="max-w-7xl mx-auto nav-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggole-menu">
          <button onClick={() => setOpenMenu(!openMenu)}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={`phone-menu ${openMenu? 'block right0': 'hidden'}`}>
          <DrawerMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </div>
        <div className="menu">
          <div className="donate">
            <div>
              <label>
                <input placeholder="Search..."></input>
                <FaSearch className="search" />
              </label>
              <button>Donate <FaHeart /></button>
            </div>
          </div>
          <ul className="main-menu">
            {menuItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
