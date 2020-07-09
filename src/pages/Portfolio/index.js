import React from "react";
import toYou from './assets/toYou.png';
import Quiz from './assets/Quiz.png';
import WeatherDashboard from './assets/WeatherDashboard.jpg';
import DayPlanner from './assets/DayPlanner.png';
import LinkedOut from './assets/LinkedOut.png';
import EmployeeDirectory from './assets/EmployeeDirectory.png';



function Portfolio() {

  return (
    <div>
        <h1>Projects</h1>
            <div class="container" id="columns">
                <div class="row">
                <div class="col-sm project">
                    <div class="card">
                    <img src={toYou} class="card-img-top" alt="screenshot of app"></img>
                    <div class="card-body">
                        <h5 class="card-title">toYou</h5>
                    </div>
                    <div class="card-body ">
                        <a href="https://solmarnov.github.io/project-zero/index.html" class="card-link">Website</a>
                        <a href="https://github.com/Solmarnov/project-zero" class="card-link">Github Repository</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm project">
                    <div class="card">
                    <img src={Quiz} class="card-img-top" alt="screenshot of app"></img>
                    <div class="card-body">
                        <h5 class="card-title">Quiz</h5>
                    </div>
                    <div class="card-body">
                        <a href="https://caitlinmaxx.github.io/Homework-4.0/" class="card-link">Website</a>
                        <a href="https://github.com/CaitlinMaxx/Homework-4.0" class="card-link">Github Repository</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm project">
                    <div class="card">
                    <img src={DayPlanner} class="card-img-top" alt="screenshot of app"></img>
                    <div class="card-body">
                        <h5 class="card-title">DayPlanner</h5>
                    </div>
                    <div class="card-body">
                        <a href="https://caitlinmaxx.github.io/Homework-5.0/" class="card-link">Website</a>
                        <a href="https://github.com/CaitlinMaxx/Homework-5.0" class="card-link">Github Repository</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm project">
                    <div class="card">
                    <img src={LinkedOut} class="card-img-top" alt="screenshot of app"></img>
                    <div class="card-body">
                        <h5 class="card-title">LinkedOut</h5>
                    </div>
                    <div class="card-body">
                        <a href=" https://fierce-thicket-56137.herokuapp.com/" class="card-link">Website</a>
                        <a href="https://github.com/Matt-STJR/LinkedOut" class="card-link">Github Repository</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm project">
                    <div class="card">
                    <img src={EmployeeDirectory} class="card-img-top" alt="screenshot of app"></img>
                    <div class="card-body">
                        <h5 class="card-title">Employee Directory</h5>
                    </div>
                    <div class="card-body">
                        <a href=" https://employeedirectorymaxx.herokuapp.com/" class="card-link">Website</a>
                        <a href="https://github.com/CaitlinMaxx/Homework-19.0" class="card-link">Github Repository</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm project">
                    <div class="card">
                    <img src={WeatherDashboard} class="card-img-top" alt="screenshot of app"></img>
                    <div class="card-body">
                        <h5 class="card-title">Weather Dashboard</h5>
                    </div>
                    <div class="card-body">
                        <a href="https://caitlinmaxx.github.io/Homework-6.0/" class="card-link">Website</a>
                        <a href="https://github.com/CaitlinMaxx/Homework-6.0" class="card-link">Github Repository</a>
                    </div>
                    </div>
                </div>
                </div>
            </div> 
        </div>
  );
}

export default Portfolio;
