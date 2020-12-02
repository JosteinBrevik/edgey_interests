import './App.css';
import Routes from './Routes'
import Snowfall from 'react-snowfall'

const App = () =>{
  return (
    <div>
    <Routes/>
    <Snowfall snowflakeCount={50} color="#fffafa" />
    </div>
  );
}

export default App;
