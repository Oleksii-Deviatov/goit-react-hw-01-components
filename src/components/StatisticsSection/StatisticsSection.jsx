import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";

const StatistiscSection = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <Stats key={id} label={label} percentage={percentage} />
      ))}
    </ul>
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
