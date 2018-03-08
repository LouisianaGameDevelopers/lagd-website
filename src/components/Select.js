import React from "react";
import PropTypes from "prop-types";

const Select = ({ name, label, options, handleChange }) => (
  <div>
    <label
      className="block text-xs md:text-sm font-semibold uppercase text-grey-dark mb-2"
      htmlFor="referrer"
    >
      {label}
    </label>

    <div className="relative">
      <select
        className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded text-grey-darker"
        name="referrer"
        id="referrer"
        onChange={handleChange}
        defaultValue="Choose one…"
      >
        <option disabled>Choose one…</option>
        {options.map(option => <option key={option}>{option}</option>)}
      </select>

      <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Select;
