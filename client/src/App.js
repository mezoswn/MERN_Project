import './App.css';
// import { Router } from '@reach/router';
// import CreateUser from './views/CreateUser';
// import LogOut from './component/LogOut';
// import Login from './views/Login';
// import Plan from './views/Plan';
// import ThankYou from './views/ThankYou';
// import ContactUsFull from './views/ContactUsFull';
// import ProgramPage from './views/ProgramPage';
// import HomePage from './views/HomePage';
// import Footer from './views/Footer';
import Header from './component/Header';
import Work from './component/Work';
import About from './component/about';
import Skills from './component/skills';
import Promotion from './component/Promotion';
import Footer from './component/Footer';
import Layout from "./component/layout"
// import SEO from "./component/seo";

function App() {
  return (

    <div className="App">
      
      {/* <Router>
        <CreateUser path="/new"/>
        <Login path="/"/>
        <Plan path="/plan"/>
        <ThankYou path="/thank-you"/>
        <ContactUsFull path="contact-us"/>
        <ProgramPage path="programs"/>
        <HomePage path="home"/>
      </Router>
      <Footer/> */}
      <Layout>
    {/* <SEO title="Portfolio Template" /> */}
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>


    </div>

  );
}

export default App;
