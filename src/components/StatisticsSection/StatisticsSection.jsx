import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import styles from "./styles.module.css";

const StatistiscSection = ({ title, stats }) => (
  <section className={styles.statistics}>
    <div className={styles.wrapper}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <Stats key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </div>
  </section>
);

StatistiscSection.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ),
};

export default StatistiscSection;
