import React from 'react';
import './DrawerMenu.css';
import { ImCross } from "react-icons/im";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from '../../../assets/icons/care-logo.svg';

const DrawerMenu = ({ setOpenMenu, openMenu }) => {

    const according = document.getElementsByClassName('according-menu');

    const removeClass = () => {
        for (let i = 0; i < according.length; i++) {
            according[i].classList.remove('active');
            according[i].classList.remove('color');
        }
    }

    for (let i = 0; i < according.length; i++) {
        according[i].addEventListener('click', function () {
            removeClass();
            this.classList.add('active');
            this.classList.add('color');
        })
    }

    return (
        <div className='main-drawer'>
            <div className='drawer-header'>
                <img src={logo} alt="logo" />
                <span onClick={() => setOpenMenu(!openMenu)}><ImCross /></span>
            </div>
            <ul className='drawer-main-menu'>
                <li className='according-menu'><a>Who we are <span><MdOutlineKeyboardArrowDown /></span></a>
                    <div className="drawer-sub-menu">
                        <ul>
                            <li><a>About us</a></li>
                            <li><a>Vison</a></li>
                            <li><a>Our Team</a></li>
                        </ul>
                    </div>
                </li>
                <li className='according-menu'><a>Our Work <span><MdOutlineKeyboardArrowDown /></span></a>
                    <div className="drawer-sub-menu">
                        <ul>
                            <li><a>About us</a></li>
                            <li><a>Vison</a></li>
                            <li><a>Our Team</a></li>
                        </ul>
                    </div>
                </li>
                <li className='according-menu'><a>Partner <span><MdOutlineKeyboardArrowDown /></span></a>
                    <div className="drawer-sub-menu">
                        <ul>
                            <li><a>About us</a></li>
                            <li><a>Vison</a></li>
                            <li><a>Our Team</a></li>
                        </ul>
                    </div>
                </li>
                <li className='according-menu'><a>Impact <span><MdOutlineKeyboardArrowDown /></span></a>
                    <div className="drawer-sub-menu">
                        <ul>
                            <li><a>About us</a></li>
                            <li><a>Vison</a></li>
                            <li><a>Our Team</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default DrawerMenu;