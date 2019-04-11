import React, { Component } from 'react';
import WarriorCard from "./components/WarriorCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import worldwarriors from"./worldwarriors.json";


//shuffle function taken from stackoverflow

class App extends Component {
  state = {
    currentScore: 0,
    HighScore: 0,
    worldwarriors,
    message: "",
    clicked: [],
    
  };
      shuffleWarriors(array){
        for (let i = array.length - 1; i > 0; i--){
          let j = Math.floor(Math.random() * (i + 1));
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      };
  
  handleClick = id =>{
    if (this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };
    handleIncrement = () => {
       let newScore= this.state.currentScore + 1;
       this.setState({
         currentScore: newScore,
       });
       if (newScore >= this.highScore){
         this.setState({ highScore: newScore});
       }
       this.handleShuffle();
  

    };

    handleReset = () =>{
      this.setState({
        currentScore: 0,
        highScore: this.state.highScore,
        message: " ",
        clicked: []
      })
      this.handleShuffle();
    }
    handleShuffle = () => {
      this.shuffleWarriors(worldwarriors);
      this.setState({ worldwarriors:shuffleWarriors });
    };
     
    
  render(){
   
    return(
      <Wrapper>
        <Navbar 
        title="Clicky Game"
        score = {this.state.currentScore}
        highScore = {this.state.highScore}
        />
        <Title>Warrior Clicky Game</Title>
        {this.state.worldwarriors.map(warrior =>(
          <WarriorCard
          id={warrior.id}
          key={warrior.id}
          image={warrior.image}
          handleIncrement={this.handleIncrement}
          handleShuffle={this.handleShuffle}
          handleReset={this.handleReset}
          handleClick={this.handleClick}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
