import React from "react";
import "./DrawerMenu.css";
import { ImCross } from "react-icons/im";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const DrawerMenu = ({ setOpenMenu, openMenu }) => {
  const according = document.getElementsByClassName("according-menu");

  const removeClass = () => {
    for (let i = 0; i < according.length; i++) {
      according[i].classList.remove("active");
      according[i].classList.remove("color");
    }
  };

  for (let i = 0; i < according.length; i++) {
    according[i].addEventListener("click", function () {
      removeClass();
      this.classList.add("active");
      this.classList.add("color");
    });
  }

  return (
    <div className="main-drawer">
      <div className="drawer-header">
        <img src={logo} alt="logo" className="w-48" />
        <span onClick={() => setOpenMenu(!openMenu)}>
          <ImCross />
        </span>
      </div>
      <ul className="drawer-main-menu">
        <li className="according-menu">
          <Link>
            Who we are{" "}
            <span>
              <MdOutlineKeyboardArrowDown size={30} />
            </span>
          </Link>
          <div className="drawer-sub-menu">
            <ul>
              <li>
                <Link to="/aboutus">What we do</Link>
              </li>
              <li>
                <Link to="/vision">Vision</Link>
              </li>
              <li>
                <Link to="/ourteam">Our Team</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="according-menu">
          <Link>
            Our Work{" "}
            <span>
              <MdOutlineKeyboardArrowDown size={30} />
            </span>
          </Link>
          <div className="drawer-sub-menu">
            <ul>
              <li>
                <Link to="/stewacd">Stewacd</Link>
              </li>
              <li>
                <Link to="/vnsdgimp">UNSDGs</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/telenthunt">Talent hunt</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="according-menu">
          <Link>
            Partner{" "}
            <span>
              <MdOutlineKeyboardArrowDown size={30} />
            </span>
          </Link>
          <div className="drawer-sub-menu">
            <ul>
              <li>
                <Link to="/ourpartners">Our Partners</Link>
              </li>

              <li>
                <Link to="/partnerwithus">Partner With Us</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="according-menu">
          <Link to="/impact">Impact </Link>
        </li>
        <button className="btn btn-primary btn-sm">Donate</button>
      </ul>
    </div>
  );
};

export default DrawerMenu;
