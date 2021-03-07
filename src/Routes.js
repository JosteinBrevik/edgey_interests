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
        <Route path='/nashville'>
          <VideoPage videoID='https://www.youtube.com/embed/otBIjC2V_rQ?autoplay=1' />
        </Route>
        <Route path='/workingout'>
          <VideoPage videoID='https://www.youtube.com/embed/0W4iNfViXEM?autoplay=1' />
        </Route>
        <Route path='/systemdynamics'>
          <VideoPage videoID='https://www.youtube.com/embed/gweJMS-ahmU?autoplay=1' />
        </Route>
        <Route path='/electricskateboards'>
          <VideoPage videoID='https://www.youtube.com/embed/nH59vkbi750?autoplay=1' />
        </Route>
        <Route path='/changinghabits'>
          <VideoPage videoID='https://www.youtube.com/embed/CQ-qnErof2E?autoplay=1' />
        </Route>
        <Route path='/communication'>
          <VideoPage videoID='https://www.youtube.com/embed/Bq9MUq1Fj-0?autoplay=1' />
        </Route>
        <Route path='/taekwondo'>
          <VideoPage videoID='https://www.youtube.com/embed/CLcM2Ol9d08?autoplay=1' />
        </Route>
        <Route path='/interpretiveprecidence'>
          <VideoPage videoID='https://www.youtube.com/embed/v3VCJC8rr-Y?autoplay=1' />
        </Route>
        <Route path='/windsurfing'>
          <VideoPage videoID='https://www.youtube.com/embed/hEcO-Gj87gM?autoplay=1' />
        </Route>
        <Route path='/rice'>
          <VideoPage videoID='https://www.youtube.com/embed/BbTnfwni83M?autoplay=1' />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
