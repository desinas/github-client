import React, { useState } from "react";
import "./styles.scss";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={"navbar" + (props.spaced ? " is-spaced" : "")}>
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width={props.logoWidth}
              height={props.logoHeight}
              alt=""
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
