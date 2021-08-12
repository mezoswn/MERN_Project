import './App.css';
import { Router } from '@reach/router';
import CreateUser from './views/CreateUser';
import Home from './views/Home';
import LogOut from './component/LogOut';

function App() {
  return (

    <div className="App">
      <Router>
        <CreateUser path="new"/>
        {/* <Home path="/"/> */}
        <LogOut path="/"/>
      </Router>


    </div>

  );
}

export default App;
