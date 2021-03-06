// https://medium.com/@luqman.qureshi/create-animated-sidebar-component-in-react-with-react-transition-group-7956ed575c00
import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideBar.css";

const SideBar = props => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit>
      <aside className="side-bar" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("sideBar-hook")
  );
};

export default SideBar;
