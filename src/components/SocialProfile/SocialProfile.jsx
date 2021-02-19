import React from "react";
import PropTypes from "prop-types";

import Stats from "./stats";
import styles from "./styles.module.css";

const SocialProfile = ({ name, avatar, tag, location, stats }) => (
  <div key={name} className={styles.profile}>
    <div className="description">
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
    <Stats {...stats} />
  </div>
);

SocialProfile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default SocialProfile;
