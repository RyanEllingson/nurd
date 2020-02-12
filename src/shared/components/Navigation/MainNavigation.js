import React, { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../auth/auth";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideBar from "./SideBar";
import Backdrop from "../UIElements/Backdrop";
import Button from "@material-ui/core/Button";
// import Button from "../FormElements/Button";
import "./MainNavigation.css";

//creating different state for mobile view. When in mobile- onclick of hamburger icon, sidebar is opened or closed.
//Backdrop in index.html

const MainNavigation = props => {
  const { user, logoutUser } = useContext(AuthContext);
  const [barIsOpen, setBarIsOpen] = useState(false);

  const openBarHandler = () => {
    setBarIsOpen(true);
  };

  const closeBarHandler = () => {
    setBarIsOpen(false);
  };

  return (
    <Fragment>
      {barIsOpen && <Backdrop onClick={closeBarHandler} />}
      <SideBar show={barIsOpen} onClick={closeBarHandler}>
        <nav className="main-navigation__bar-nav">
          <NavLinks />
        </nav>
      </SideBar>

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openBarHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Game Realm</Link>
        </h1>
        <h1 className="main-navigation__title">
          {user ? `Hello ${user.name}!` : ""}
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
        <Button className="loginBut"
          onClick={e => {
            e.preventDefault();
            logoutUser();
          }}>
          Logout
        </Button>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
