import React from "react";
//import { useState } from 'react';
import "./styles.scss";

function Navbar(props) {
  //const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={"navbar" + (props.spaced ? " is-spaced" : "")}>
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width={props.logoWidth}
              height={props.logoHeight}
              alt=""
            />
          </a>
          <a className="navbar-item" href="/">Github Users</a>
          <a className="navbar-item" href="/following">Following</a>
          <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
