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
        <Route path="/gingerbread">
          <VideoPage videoID="dHKH65qOG-U" />
        </Route>
        <Route path="/fireplace">
          <VideoPage videoID="hNY52YcAs-w" />
        </Route>
        <Route path="/packets">
          <VideoPage videoID="HCzSIFdWQGA" />
        </Route>
        <Route path="/ornaments">
          <VideoPage videoID="vR_gDf_TzUU" />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;


