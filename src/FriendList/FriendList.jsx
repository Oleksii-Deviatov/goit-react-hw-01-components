import React from "react";
import friends from "../data/friends.json";
import FriendListItem from "./FriendListItem";

const FriendList = () => (
  <>
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline }) => (
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  </>
);

export default FriendList;
