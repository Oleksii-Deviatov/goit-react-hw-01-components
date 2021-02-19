import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function color() {
  const letters = "0123456789ABCDEF".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

const Stats = ({ label, percentage }) => (
  <li className={styles.item} style={{ backgroundColor: color() }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}</span>
  </li>
);

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stats;
