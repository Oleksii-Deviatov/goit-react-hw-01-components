import React from "react";
import SocialProfile from "./SocialProfile/SocialProfile";
import StatistiscSection from "./StatisticsSection/StatisticsSection";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from "./data/user.json";
import friends from "./data/friends.json";
import statisticalData from "./data/statistical_data.json";
import transactions from "./data/transactions.json";

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
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
