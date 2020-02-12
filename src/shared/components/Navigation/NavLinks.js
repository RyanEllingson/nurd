import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

import { AuthContext } from "../../../auth/auth";

const NavLinks = props => {
  //conditional rendering for user view only after login
  const { user } = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          {" "}
          THE REALM
        </NavLink>
      </li>
      <li>
        <NavLink to="/search/" exact>
          {" "}
          SEARCH
        </NavLink>
      </li>
      <li>{user ? <NavLink to="/u1/groups">MY GROUPS</NavLink> : " "}</li>
      <li>{user ? <NavLink to="/u1/profile">MY PROFILE</NavLink> : " "}</li>
      <li>{user ? <NavLink to="/groups/new">CREATE GROUPS</NavLink> : " "} </li>
      <li>{!user ? <NavLink to="/register">REGISTER</NavLink> : " "}</li>
      {/* <li>{!user ? <NavLink to="/login">LOGIN</NavLink> : " "}</li> */}
      <li>
        <NavLink to="/about/" exact>
          {" "}
          ABOUT US
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

//Not all links will be rendered all the time!!!
//My groups- only when logged in
//Create Groups- only when logged in
//Login- only when NOT logged in
//Logout - only when logged in
