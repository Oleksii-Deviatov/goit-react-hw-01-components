import React from "react";
import SocialProfile from "./components/SocialProfile/SocialProfile";
import StatistiscSection from "./components/StatisticsSection/StatisticsSection";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

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
      stats={user.stats}
    />
    <StatistiscSection title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
