import React from "react";
import SocialProfile from "./SocialProfile/SocialProfile";
import StatistiscSection from "./StatisticsSection/StatisticsSection";
import user from "./data/user.json";
import statisticalData from "./data/statistical_data.json";
import FriendList from "./FriendList/FriendList";

const App = () => (
  <div className="app">
    <SocialProfile
      name={user.name}
      avatar={user.avatar}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <StatistiscSection title="Upload stats" stats={statisticalData} />
    <FriendList />
  </div>
);

export default App;
