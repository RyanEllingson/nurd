//generic template for Navbar. Don't freak out- this is not the final product!

import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import "./MainNavigation.scss";

const MainNavigation = props => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Game Realm</Link>
      </h1>
      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
