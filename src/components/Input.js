import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, name, label, handleChange, placeholder }) => (
  <div>
    <label
      className="block text-xs md:text-sm font-semibold uppercase text-grey-dark mb-2"
      htmlFor={name}
    >
      {label}
    </label>
    <input
      className="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-grey rounded w-full py-2 px-4 text-grey-darker"
      type={type}
      id={name}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
    />
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  type: "text",
  placeholder: ""
};

export default Input;
