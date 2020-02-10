import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../auth/auth";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideBar from "./SideBar";
import Backdrop from "../UIElements/Backdrop";
import Button from "../FormElements/Button";
import "./MainNavigation.css";

//creating different state for mobile view. When in mobile- onclick of hamburger icon, sidedrawer is opened or closed.
//Backdrop

const MainNavigation = props => {
  const { user, logoutUser } = useContext(AuthContext);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideBar show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideBar>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}>
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
        <Button
          onClick={e => {
            e.preventDefault();
            logoutUser();
          }}>
          Logout
        </Button>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
