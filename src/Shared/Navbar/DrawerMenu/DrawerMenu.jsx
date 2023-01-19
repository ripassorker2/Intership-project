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
        <img src={logo} alt="logo" className="w-72" />
        <span onClick={() => setOpenMenu(!openMenu)}>
          <ImCross />
        </span>
      </div>
      <ul className="drawer-main-menu">
        <li className="according-menu">
          <Link>
            Who are we{" "}
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </Link>
          <div className="drawer-sub-menu">
            <ul>
              <li>
                <Link to="/aboutus">About us</Link>
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
              <MdOutlineKeyboardArrowDown />
            </span>
          </Link>
          <div className="drawer-sub-menu">
            <ul>
              <li>
                <Link to="/stewacd">Stewacd</Link>
              </li>
              <li>
                <Link to="/vnsdg">Vnsdg Imp</Link>
              </li>
              <li>
                <Link to="/telenthunt">TALENT HUNT</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="according-menu">
          <Link>
            Partner{" "}
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </Link>
          <div className="drawer-sub-menu">
            <ul>
              <li>
                <Link to="/ourpartners">Our Partners</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/partnerwithus">Partner With Us</Link>
              </li>
            </ul>
          </div>
        </li>
        {/* <li className="according-menu">
            <Link>
              Impact{" "}
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </Link>
            <div className="drawer-sub-menu">
                        <ul>
                            <li><Link to='/direct'>Direct</Link></li>
                            <li><Link to='/indirect'>Indirect</Link></li>
                        </ul>
                    </div>
          </li> */}
      </ul>
    </div>
  );
};

export default DrawerMenu;
