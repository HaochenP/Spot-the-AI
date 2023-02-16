import './App.css';
import Buttons from './Buttons.js';
import LoadImage from './LoadImage';
import HighScore from './HighScore';
import Timer from './Timer';
import React, {  useMemo, useState, useEffect } from "react";


function App() {
  
  const possibility = ['Real', 'AI']
  const select = getRandomInt(2);
  const [image, setImage] = useState(possibility[select]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(getRandomInt(1000000));
  const [newGame, setNewGame] = useState(false);
  const [nextPicture, setnextPicture] = useState(false);


  useEffect (() =>{
    changeImage();
    setScore(0);
    setNewGame(false);
  }, [newGame]);

  useEffect (() =>{
    setnextPicture(false);
  }, [nextPicture]);


  function startNewGame() {
    setNewGame(true);
  }

  function changeImage(e) {
    setImage(possibility[getRandomInt(2)]);
  }
  function changeScore(num){
    setScore(num);
    setnextPicture(true);
  }


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function changeCounter(){
    setCount(getRandomInt(1000000));
  }

  

  console.log("here" + image);

  return (
    <div className="App">
      <header className="App-header">
      <HighScore score = {score} />
        <div>
        
        <Timer startNewGame={startNewGame} newGame = {newGame} nextPicture = {nextPicture} />
      <LoadImage selectedCategory = {image} newGame = {newGame} count = {count} scoreCheck = {changeScore}/>
      </div>
      <div className='rowC'>
        <Buttons myClick={changeImage} label = "Real" score = {score} selectedCategory = {image} scoreCheck = {changeScore} count = {count} changeCount = {setCount}/> 
        <Buttons myClick={changeImage}  label = "AI" score = {score} selectedCategory = {image} scoreCheck = {changeScore} count = {count} changeCount = {setCount}/>
        </div>
      
        
      </header>
      
    </div>
  );
}

export default App;
