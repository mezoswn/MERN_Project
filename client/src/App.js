import './App.css';
import { Router } from '@reach/router';
import CreateUser from './views/CreateUser';
// import LogOut from './component/LogOut';
import Login from './views/Login';
import Plan from './views/Plan';
import ThankYou from './views/ThankYou';
import ContactUsFull from './views/ContactUsFull';
import ProgramPage from './views/ProgramPage';
import HomePage from './views/HomePage';
import Footer from './component/Footer.js';

// import SEO from "./component/seo";

function App() {
  return (

    <div className="App">
      
      <Router>
        <CreateUser path="/new"/>
        <Login path="/login"/>
        <Plan path="/plan"/>
        <ThankYou path="/thank-you"/>
        <ContactUsFull path="contact-us"/>
        <ProgramPage path="programs"/>
        <HomePage path="/"/>
      </Router>
      
    {/* <SEO title="Portfolio Template" /> */}


    </div>

  );
}

export default App;
