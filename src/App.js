import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import Work from "./components/Work";
import Play from "./components/Play";
import Study from "./components/Study";
import Exercise from "./components/Exercise";
import Social from "./components/Social";
import SelfCare from "./components/SelfCare";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="page">
      <div className="cards__grid">
        <GlobalProvider>
          <Profile />
          <Work />
          <Play />
          <Study />
          <Exercise />
          <Social />
          <SelfCare />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
