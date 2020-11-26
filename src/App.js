import './App.css';
import {VideoPlayer} from './components/atoms/VideoPlayer/VideoPlayer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoPlayer videoID="wrTzpakmJTE?start=1813" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
