import Navbar from "./components/Navbar.js";
import Feeds from "./pages/Feeds.js";
import Upload from "./pages/Upload.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/feeds" />
          </Route>

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
