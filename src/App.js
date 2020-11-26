import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VideoPage from './components/molecules/VideoPage/VideoPage'
import Home from './Home'

const App = () =>{
  return (
    <Router>
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/snøhetta">Snøhetta</Link>
          </li>
          <li>
            <Link to="/glittertind">Glittertind</Link>
          </li>
        </ul>
      </nav> */}
      
      <Switch>
        <Route path="/snøhetta">
          <VideoPage videoID="wrTzpakmJTE?start=1813"/>
        </Route>
        <Route path="/glittertind">
        <VideoPage videoID="rXqAU2v_5Io"/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
