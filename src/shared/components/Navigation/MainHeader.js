//generic template for Nav Header. Don't freak out- this is not the final product!

import React from "react";

import "./MainHeader.scss";

const MainHeader = props => {
  //props.children currently used as a placeholder for what will go inbetween the <MainHeader> in MainNavigation.js
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;
