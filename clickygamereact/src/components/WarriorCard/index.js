import React from "react";
import "./style.css";

function WarriorCard(props){
  return ( 
    
    <div className="card" 
    value={props.id}>
      <div className="img-container">
        <img alt={props.name} src = {props.image}/>
        
        
      </div>
    </div>
 
    )
  }
  
  export default WarriorCard
  // onClick={() => props.handleIncrement(props.id)}