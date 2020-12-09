import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPage from "./components/molecules/VideoPage/VideoPage";
import Home from "./Home";
import Office from "./pages/Office/Office"

const Routes = () => {
  return (
    <Router>
      <Switch>
      <Route path="/office">
          <Office />
        </Route>
        <Route path="/snøhetta">
          <VideoPage videoID="wrTzpakmJTE?start=1813" />
        </Route>
        <Route path="/falketind">
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
