import SocialProfile from "./SocialProfile";
import StatistiscSection from "./StatisticsSection";
import user from "./data/user.json";
import statisticalData from "./data/statistical_data.json";

const App = () => (
  <div className="app">
    <SocialProfile user={user} />
    <StatistiscSection title="Upload stats" stats={statisticalData} />
    <StatistiscSection stats123={statisticalData} />
  </div>
);

export default App;
