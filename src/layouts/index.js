import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

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
    />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
