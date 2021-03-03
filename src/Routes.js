import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VideoPage from './components/molecules/VideoPage/VideoPage';
import Home from './Home';
import Office from './pages/Office/Office';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/office'>
          <Office />
        </Route>
        <Route path='/gingerbread'>
          <VideoPage videoID='https://www.youtube.com/embed/otBIjC2V_rQ?autoplay=1' />
        </Route>
        <Route path='/fireplace'>
          <VideoPage videoID='https://www.youtube.com/embed/hNY52YcAs-w?autoplay=1' />
        </Route>
        <Route path='/packets'>
          <VideoPage videoID='https://www.youtube.com/embed/HCzSIFdWQGA?autoplay=1' />
        </Route>
        <Route path='/ornaments'>
          <VideoPage videoID='https://www.youtube.com/embed/vR_gDf_TzUU?autoplay=1' />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
