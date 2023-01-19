import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = (
    <>
      <li>
        <Link>
          Who are we{" "}
          <span>
            <MdOutlineKeyboardArrowDown size={20} />
          </span>
          <ul className="sub-menu">
            <li>
              <Link to="/aboutus">ABOUT US</Link>
            </li>
            <li>
              <Link to="/vision">VISION</Link>
            </li>
            <li>
              <Link to="/ourteam">OUR TEAM</Link>
            </li>
          </ul>
        </Link>
      </li>
      <li>
        <Link>
          Our work{" "}
          <span>
            <MdOutlineKeyboardArrowDown size={20} />
          </span>
          <ul className="sub-menu">
            <li>
              <Link to="/stewacd">STEWACD</Link>
            </li>
            <li>
              <Link to="/vnsdgimp">UNSDGs Imp</Link>
            </li>
            <li>
              <Link to="/telenthunt">TALENT HUNT</Link>
            </li>
          </ul>
        </Link>
      </li>
      <li>
        <Link>
          Partners{" "}
          <span>
            <MdOutlineKeyboardArrowDown size={20} />
          </span>
          <ul className="sub-menu">
            <li>
              <Link to="/ourpartners">OUR PARTNERS</Link>
            </li>
            <li>
              <Link to="/events">EVENTS</Link>
            </li>
            <li>
              <Link to="/partnerwithus">PARTNER WITH US</Link>
            </li>
          </ul>
        </Link>
      </li>
      <li className="bg-none">
        <Link to="impact">IMPACT</Link>
      </li>
    </>
  );

  window.onscroll = () => scrollingBg();
  const scrollingBg = () => {
    if (document.documentElement.scrollTop > 50) {
      document.getElementById("main-nav").classList.add("nav-bg");
      document.getElementById("navContainer").classList.add("bb-none");
    } else {
      document.getElementById("main-nav").classList.remove("nav-bg");
      document.getElementById("navContainer").classList.remove("bb-none");
    }
  };

  return (
    <nav id="main-nav">
      <div id="navContainer" className="max-w-7xl mx-auto nav-container">
        <Link to="/">
          <div className="flex">
            <img className=" md:w-80 w-60" src={logo} alt="logo" />
          </div>
        </Link>
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
