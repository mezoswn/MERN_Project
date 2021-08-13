import './App.css';
import { Router } from '@reach/router';
import CreateUser from './views/CreateUser';
import LogOut from './component/LogOut';
import Login from './views/Login';
import Plan from './views/Plan';
import ThankYou from './views/ThankYou';
import ContactUsFull from './views/ContactUsFull';
import ProgramPage from './views/ProgramPage';
import HomePage from './views/HomePage';
import Footer from './views/Footer';
import NavBar from './views/NavBar';

function App() {
  return (

    <div className="App">
      <NavBar/>
      <Router>

        <CreateUser path="/regester"/>
        <Login path="/"/>
        <Plan path="/plan"/>
        <ThankYou path="/thank-you"/>
        <ContactUsFull path="contact-us"/>
        <ProgramPage path="programs"/>
        <HomePage path="home"/>
      </Router>
      <Footer/>


    </div>

  );
}

export default App;
