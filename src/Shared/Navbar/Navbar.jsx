import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import { Link } from "react-router-dom";
import {BsFillSuitHeartFill} from "react-icons/bs"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = (
    <>
      <li>
        <Link>
          WHO WE ARE{" "}
          <span>
            <MdOutlineKeyboardArrowDown size={20} />
          </span>
          <ul className="sub-menu">
            <li>
              <Link to="/aboutus">WHAT WE DO</Link>
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
              <Link to="/vnsdgimp">UNSDGs</Link>
            </li>
            <li>
              <Link to="/telenthunt">TALENT HUNT</Link>
            </li>
            <li>
              <Link to="/covid">COVID RELIEF</Link>
            </li>
          </ul>
        </Link>
      </li>
      <li className="event">
              <Link to="/events">EVENTS</Link>
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
              <Link to="/partnerwithus">PARTNER WITH US</Link>
            </li>
          </ul>
        </Link>
      </li>
      <li className="bg-none mr-2">
        <Link to="impact">IMPACT</Link>
      </li>

      <Link to="/donate"><button className="bg-[#71e432] font-semibold px-4 py-3 rounded  text-[16px] ml-2 donate flex items-center"><span>DONATE</span> <BsFillSuitHeartFill className="text-[#fff] ml-2 text-[22px]"/></button></Link>
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
            <img className="lg:w-80 md:w-60 w-48 logo_img" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="toggole-menu">
          <button onClick={() => setOpenMenu(!openMenu)}>
            <GiHamburgerMenu size={24} />
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
