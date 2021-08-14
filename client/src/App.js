import './App.css';
import { Redirect, Router } from '@reach/router';
import CreateUser from './views/CreateUser';
<<<<<<< HEAD
=======
// import LogOut from './component/LogOut';
>>>>>>> 96701ed04005470b67be90c9ba96449c29c30d49
import Login from './views/Login';
import CreatePlan from './views/CreatePlan';
import ThankYou from './views/ThankYou';
import ContactUsFull from './views/ContactUsFull';
import ProgramPage from './views/ProgramPage';
import HomePage from './views/HomePage';
<<<<<<< HEAD
import Footer from './views/Footer';
import NavBar from './views/NavBar';
import Cookies from 'js-cookie';
=======
import Footer from './component/Footer.js';

// import SEO from "./component/seo";
>>>>>>> 96701ed04005470b67be90c9ba96449c29c30d49

function App() {
  return (


    <div className="App">
<<<<<<< HEAD
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
=======
      
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
>>>>>>> 96701ed04005470b67be90c9ba96449c29c30d49


    </div>

  );
}

export default App;
