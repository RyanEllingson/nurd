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
      <li>{user ? <NavLink to="/u1/groups">My Groups</NavLink> : " "}</li>
      <li>{user ? <NavLink to="/u1/profile">My Profile</NavLink> : " "}</li>
      <li>{user ? <NavLink to="/groups/new">Create Groups</NavLink> : " "} </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

//Not all links will be rendered all the time.
//My places- only when logged in
//Add Place- only when logged in
//Authenticate- only when NOT logged in
