import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Stats({ label, percentage }) {
  function generateColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  return (
    <li className={styles.item} style={{ backgroundColor: generateColor() }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  );
}

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stats;
