import React from "react";
import SocialProfile from "./components/SocialProfile/SocialProfile";
import StatistiscSection from "./components/StatisticsSection/StatisticsSection";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import Container from "./components/utils/Container";

import user from "./data/user.json";
import friends from "./data/friends.json";
import statisticalData from "./data/statistical_data.json";
import transactions from "./data/transactions.json";

const App = () => (
  <div className="app">
    <Container>
      <SocialProfile
        name={user.name}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </Container>

    <Container>
      <StatistiscSection title="Upload stats" stats={statisticalData} />
    </Container>

    <Container>
      <FriendList friends={friends} />
    </Container>

    {/* <TransactionHistory items={transactions} /> */}
  </div>
);

export default App;
