import React from "react";
import "./styles.scss";

function Footer(props) {
  return (
    <footer className="FooterComponent">
      <div className="container">
        <div className="brand left">
          <a href="/">
            <img src={props.logoImg} />
          </a>
        </div>
        <div className="links right">
          <a href="/about">About</a>
          <a href="/faq">FAQ</a>
          <a href="/support">Support</a>
          <a href="/blog">Blog</a>
        </div>
        <div className="social right">
          <a href="https://twitter.com" target="_blank">
            <span className="icon">
              <i className="fab fa-twitter" />
            </span>
          </a>
          <a href="https://facebook.com" target="_blank">
            <span className="icon">
              <i className="fab fa-facebook-f" />
            </span>
          </a>
          <a href="https://instagram.com" target="_blank">
            <span className="icon">
              <i className="fab fa-instagram" />
            </span>
          </a>
        </div>
        <div className="copyright left">© 2019 Bulma, Inc</div>
      </div>
    </footer>
  );
}

export default Footer;
