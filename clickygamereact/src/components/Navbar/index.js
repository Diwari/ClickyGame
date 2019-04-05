import React from "react";

let Navbar = props => (
  <nav>
    <ul>
      <li>
        <span className = "header">{props.title}</span>
      </li>
      
      {/* <li id="message">{props.message}</li> */}

      <li id="gameScore">Current Score: {props.score}</li>

      <li id="highScore">Top Score: {props.highScore}</li>
    </ul>
  </nav>
)

export default Navbar