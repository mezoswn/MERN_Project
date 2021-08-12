import './App.css';
import { Router } from '@reach/router';
import CreateUser from './views/CreateUser';
import Home from './views/Home';
import LogOut from './component/LogOut';
import Login from './views/Login';
import Plan from './views/Plan';

function App() {
  return (

    <div className="App">
      <Router>
        <CreateUser path="/new"/>
        <Login path="/"/>
        <Plan path="/plan"/>
        
      </Router>


    </div>

  );
}

export default App;
