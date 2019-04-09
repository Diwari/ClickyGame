import React from "react";

let Navbar = props => (
<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                 
                 <a className="navbar-brand" href="#"> <div className="p-3 mb-2 bg-info text-white">{props.title}</div></a>
                   <ul className="navbar-nav ml-auto">
                    
                     <li className="nav-item">
                       <a className="nav-link" id="gameScore"> Current Score: {props.score}</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" id="highScore" >Top Score: {props.highScore} </a>
                     </li>
                     </ul>
         
</nav>

  // <nav>
  //   <ul>
  //     <li>
  //       <span className = "header">{props.title}</span>
  //     </li>
      
  //     {/* <li id="message">{props.message}</li> */}

  //     <li id="gameScore">Current Score: {props.score}</li>

  //     <li id="highScore">Top Score: {props.highScore}</li>
  //   </ul>
  // </nav>
)

export default Navbar