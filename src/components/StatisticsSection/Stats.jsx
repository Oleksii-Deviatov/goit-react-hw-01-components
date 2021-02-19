import React from "react";
import PropTypes from "prop-types";

const Stats = ({ label, percentage }) => (
  <li className="item">
    <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
  </li>
);

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stats;
