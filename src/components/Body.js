import React, { Component } from "react";
import "../App.css";

class Body extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <div className="img">
          {" "}
          <img
            src={require("../assets/pic.jpg")}
            alt="the developer"
            width="500"
            height="600"
            className="image"
          />
        </div>
        <h1>Hi! I'm Elisha Day</h1>
        <p className="para">
          I am a Full Stack Blockchain developer living in Pleasantville, New
          Jersey.
        </p>
        <p>
          Please take a look at my website and feel free to{" "}
          <a href="mailto:elishaday00@gmail.com">Contact Me!</a>
        </p>

        <div className="column">
          <h2>Skills:</h2>
          <div className="skillWrapper">
            <button className="skill">React</button>
            <button className="skill">React Native</button>
            <button className="skill">Javascript</button>
            <button className="skill">Node.js</button>
            <button className="skill">Express.js</button>
            <button className="skill">Angular</button>
            <button className="skill">Solidity</button>
            <button className="skill">Parity Substrate</button>
            <button className="skill">Ajax</button>
            <button className="skill">Redux</button>
            <button className="skill">Nightmare.js</button>
            <button className="skill">HTML</button>
            <button className="skill">CSS</button>
            <button className="skill">Knockout.js</button>
            <button className="skill">Vue.js</button>
            <button className="skill">Truffle</button>
            <button className="skill">Ganache</button>
            <button className="skill">Web 3.0</button>
            <button className="skill">PHP</button>
            <button className="skill">Next.js</button>
            <button className="skill">Nuxxt.js</button>
            <button className="skill">Typescript</button>
            <button className="skill">Nativescript</button>
            <button className="skill">Python</button>
            <button className="skill">NPM</button>
            <button className="skill">Data Entry</button>
            <button className="skill">Jquery</button>
            <button className="skill">SASS</button>
            <button className="skill">LESS</button>

            <button className="skill">Django</button>
          </div>
        </div>
        <div className="about">
          <div className="para">
            <h2> About Elisha</h2>
            <p className="para">
              I have been writing code for 7 years! My first language was C++
              back when I was 17!
            </p>
            <p className="para">
              {" "}
              I started learning React and React Native about 3 years ago.
            </p>
            <p className="para">
              I intend to get certified as a software engineer at Thinkful!
            </p>
            <p className="para">
              If you're looking to hire a new developer (or are looking for a
              partner for a hackathon) please reach out! I am so excited to work
              with other developers to build great software.
            </p>
          </div>
        </div>
        <div className="">
          <h2>Contact Elisha</h2>
          <p className="para">
            I'd love to hear from you! Please feel free to contact or follow me:
          </p>
          <ol>
            <a
              href="https://www.linkedin.com/in/elisha-day-jenkins-64b1b6132/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <li className="para">LinkedIn</li>
            </a>
            <a
              href="https://github.com/kingdayx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Github</li>
            </a>
          </ol>
        </div>
      </div>
    );
  }
}

export default Body;
