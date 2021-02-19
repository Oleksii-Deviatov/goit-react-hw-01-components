import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default.svg";
import styles from "./styles.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.is_online : styles.is_offline}></span>
    <img
      className={styles.avatar}
      src={avatar}
      alt={"avatar" + name}
      width="48"
    />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
