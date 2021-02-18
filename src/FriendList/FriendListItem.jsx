import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default.svg";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={"avatar" + name} width="48" />
      <p className="name">{name}</p>
    </li>
  </>
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
