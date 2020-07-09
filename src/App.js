import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
    /*<div className="App">
      <div idName="page-container">
        <div idName="content-wrap">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand mb-0 h1" href="#">Caitlin Mulcahy</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" idName="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="Portfolio.html">Portfolio</a>
                </li>
              </ul>
              <br />
              <br />
              <br />
              <a href="https://www.linkedin.com/in/caitlin-mulcahy-a4312b1a1/">
                <i className="fa fa-linkedin-square mr-sm-2 form-inline icon"></i>
              </a>
              <a href="https://github.com/CaitlinMaxx">
                <i className="fa fa-github mr-sm-2 form-inline icon"></i>
              </a>    
            </div>
          </nav> 
          <div>
            <h1>About</h1>
            <img src={profilePic} alt="placeholder" className="profilePic"></img>
            <p>I am a full stack web developer, studying at The University of Sydney. I am well versed and skilled in the design aspects of web design, as well as proficient in Javascript, Jquery and Node.js.</p>            <a href="assets/resume.pdf">My Resume</a>
          </div>
        </div>
        <footer idName="footer"></footer>
      </div>
    </div>*/
  );
}

export default App;
