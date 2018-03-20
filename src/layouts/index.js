import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import favicon from "../static/favicon.ico";
import { batonRouge } from "../static/images";
import "./index.css";

const title = "Louisiana Game Developers";
const description = `
Louisiana Game Developers is an organization dedicated to fostering
and promoting the game development community in Louisiana. [Image (modified)
is CC BY-SA 2.0 by neil o (http://bit.ly/2FWcani)]
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: "description", content: description },
        { name: "og:url", content: "https://www.lagd.network/" },
        { name: "og:type", content: "website" },
        { name: "og:title", content: "Louisiana Game Developers" },
        { name: "og:image", content: batonRouge },
        { name: "og:description", content: description }
      ]}
      link={[{ rel: "icon", href: favicon }]}
    />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
