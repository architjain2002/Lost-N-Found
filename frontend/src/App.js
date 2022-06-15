import Navbar from "./components/Navbar.js";
import Leaderboard from "./components/Leaderboard.js";
import TextBox from "./components/TextBox.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/feeds">
            <Feeds />
          </Route>

          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
