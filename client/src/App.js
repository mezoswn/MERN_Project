import './App.css';
import { Redirect, Router } from '@reach/router';
import CreateUser from './views/CreateUser';
import Login from './views/Login';
import CreatePlan from './views/CreatePlan';
import ThankYou from './views/ThankYou';
import ContactUsFull from './views/ContactUsFull';
import ProgramPage from './views/ProgramPage';
import HomePage from './views/HomePage';
import Footer from './views/Footer';
import NavBar from './views/NavBar';
import Cookies from 'js-cookie';

function App() {
  return (


    <div className="App">
      <NavBar />
      <Router>
        <CreateUser path="/regester" />
        <Login path="/" />
        <CreatePlan path="/plan" />
        <ThankYou path="/thank-you" />
        <ContactUsFull path="contact-us" />
        <ProgramPage path="programs" />
        <HomePage path="home" />
      </Router>
      <Footer />


    </div>

  );
}

export default App;
