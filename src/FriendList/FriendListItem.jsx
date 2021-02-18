import React from "react";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt={"avatar" + name} width="48" />
      <p class="name">{name}</p>
    </li>
  </>
);

export default FriendListItem;
