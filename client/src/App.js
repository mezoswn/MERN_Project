import './App.css';
import {Router } from '@reach/router';
import CreateUser from './views/CreateUser';
import Login from './views/Login';
import CreatePlan from './views/CreatePlan';
import ThankYou from './views/ThankYou';
import ContactUsFull from './views/ContactUsFull';
import ProgramPage from './views/ProgramPage';
import HomePage from './views/HomePage';





function App() {
  return (


    <div className="App">
      
      <Router>
        <CreateUser path="/register"/>
        <Login path="/login"/>
        <CreatePlan path="/plan" />
        <ThankYou path="/thank-you"/>
        <ContactUsFull path="contact-us"/>
        <ProgramPage path="programs"/>
        <HomePage path="/"/>
      </Router>
      


    </div>

  );
}

export default App;
