import React, { Component } from 'react';
import WarriorCard from "./components/WarriorCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import worldwarriors from"./worldwarriors.json"

//shuffle function taken from stackoverflow
function shuffle(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

class App extends Component {
  state = {
    currentScore: 0,
    HighScore: 0,
    worldwarriors,
    
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
    handleShuffle = () => {
      let shuffleWarriors = shuffle(worldwarriors);
      this.setState({ worldwarriors:shuffle });
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

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
