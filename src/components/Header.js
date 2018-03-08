import React from "react";
import Link from "gatsby-link";

import { logo } from "../static/images";

const Header = () => (
  <header className="flex justify-between">
    <img src={logo} style={{ width: 70 }} />
  </header>
);

const linkClasses = "ml-4 text-white uppercase";

export default Header;
