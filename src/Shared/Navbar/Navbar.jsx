import React, { useState } from "react";
import './Navbar.css';
import logo from '../../assets/banner-logo/logo.png';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = <>
    <li><Link>Who are we <span><MdOutlineKeyboardArrowDown size={20} /></span>
      <ul className="sub-menu">
        <li><Link to='/aboutus'>About us</Link></li>
        <li><Link to='/vision'>Vision</Link></li>
        <li><Link to='/ourteam'>Our Team</Link></li>
      </ul>
    </Link></li>
    <li><Link>Our work <span><MdOutlineKeyboardArrowDown size={20} /></span>
      <ul className="sub-menu">
        <li><Link to='/stewacd'>Stewacd</Link></li>
        <li><Link to='/vnsdgimp'>Vnsdg Imp</Link></li>
        <li><Link to='/telenthunt'>Telent Hunt</Link></li>
      </ul>
    </Link></li>
    <li><Link>Partners <span><MdOutlineKeyboardArrowDown size={20} /></span>
      <ul className="sub-menu">
        <li><Link to='/ourpartners'>Our Partners</Link></li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/partnerwithus'>Partner With Us</Link></li>
      </ul>
    </Link></li>
    <li><Link>Impact <span><MdOutlineKeyboardArrowDown size={20} /></span>
      <ul className="sub-menu">
        <li><Link to='/direct'>Direct</Link></li>
        <li><Link to='/indirect'>Indirect</Link></li>
      </ul>
    </Link></li>
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
        <div className="flex">
          <img className="logo" src={logo} alt="logo" />
          <div className="logo_detail">
            <h1 className="logo_title">THE CHANGE</h1>
            <h3 className="logo_he">He for She, She for He</h3>
          </div>
        </div>
        <div className="toggole-menu">
          <button onClick={() => setOpenMenu(!openMenu)}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={`phone-menu ${openMenu ? "block right0" : "hidden"}`}>
          <DrawerMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </div>
        <div className="menu">
          <ul className="main-menu">{menuItems}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
