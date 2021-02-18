import SocialProfile from "./SocialProfile";
import StatistiscSection from "./StatisticsSection";
import user from "./data/user.json";
import statisticalData from "./data/statistical_data.json";

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
    <StatistiscSection stats={statisticalData} />
  </div>
);

export default App;
