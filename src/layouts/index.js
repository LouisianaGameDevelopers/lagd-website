import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import favicon from "../static/favicon.ico";
import "./index.css";

const title = "Louisiana Game Developers";
const description = `
Louisiana Game Developers is an organization dedicated to fostering
and promoting the game development community in Louisiana.
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={title}
      meta={[{ name: "description", content: description }]}
      link={[{ rel: "icon", href: favicon }]}
    />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
