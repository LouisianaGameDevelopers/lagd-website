import React from "react";
import Link from "gatsby-link";

import logo from "../static/images/logo.svg";

const Header = () => (
  <header className="flex justify-between">
    <img src={logo} style={{ width: 70 }} />
    <nav className="flex items-center">
      <Link className={linkClasses} to="/">
        Home
      </Link>
      <a className={linkClasses} href="#about">
        About
      </a>
      <a className={linkClasses} href="#rules">
        Rules
      </a>
      <a className={linkClasses} href="#database">
        Database
      </a>
      <a className={linkClasses} href="#contact">
        Contact
      </a>
    </nav>
  </header>
);

const linkClasses = "ml-4 text-white uppercase";

export default Header;
