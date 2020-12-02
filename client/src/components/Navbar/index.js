import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../images/logo-wide.png";
import { FaRegTimesCircle, FaUserAlt } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaListAlt } from 'react-icons/fa';
//import { FaUserFriends } from 'react-icons/fa';
//import { FaPlane } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';

function Navbar() {
  return (
    <div>
      <header style={{ height: "8rem", padding: "10px" }} className="fixed-top body-content border-bottom border-warning">
        <Link to="/">
          <img alt="logo" style={{ height: "5rem", width: "15rem" }} src={Logo} id="logo"></img>
        </Link>

        <Menu>
        <a className="menu-item" href="/">
            <FaHome />Home
          </a>
          <a className="menu-item" href="/collections">
            <FaBook />My Collections
          </a>
          <a className="menu-item" href="/addRecipe">
          < FaListAlt />Add a Recipe
          </a>
          {/* <a className="menu-item" href="/trips">
          <FaSuitcaseRolling />Trips
          </a> */}
          <a className="menu-item" href="/messages">
          <FaCommentDots />Invite Friends & Messages
          </a>
          {/* <a className="menu-item" href="/friends">
          <FaUserFriends />Friends
          </a> */}
          <a className="menu-item" href="/profile">
          <FaUserAlt />Profile
          </a>
          <a className="menu-item" href="/logout">
          <FaRegTimesCircle />Logout
          </a>
        </Menu>
      </header>
    </div>
  );
}

export default Navbar;
