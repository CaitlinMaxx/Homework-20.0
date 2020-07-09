import React from "react";
import profilePic from './assets/profilePic.JPG';


function About() {

  return (
    <div>
        <h1>About</h1>
        <img src={profilePic} alt="placeholder" className="profilePic"></img>
        <div>
            <p>I am a full stack web developer, studying at The University of Sydney. I am well versed and skilled in the design aspects of web design, as well as proficient in Javascript, Jquery and Node.js.</p>            
            <a className="resume" href="assets/resume.pdf">My Resume</a>
        </div>
    </div>
  );
}

export default About;
