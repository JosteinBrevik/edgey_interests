import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPage from "./components/molecules/VideoPage/VideoPage";
import Home from "./Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/snøhetta">
          <VideoPage videoID="wrTzpakmJTE?start=1813" />
        </Route>
        <Route path="/glittertind">
          <VideoPage videoID="rXqAU2v_5Io" />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
