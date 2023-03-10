import './App.css';
import Buttons from './Buttons.js';
import LoadImage from './LoadImage';
import HighScore from './HighScore';
import NewSwipe from './NewSwipe'
import Timer from './Timer';
import React, {  useMemo, useState, useEffect } from "react";
import {isMobile} from 'react-device-detect';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useSwipeable, UP, DOWN, SwipeEventData } from 'react-swipeable';
import Modal from 'react-bootstrap/Modal';

function App() {
  

  const possibility = ['Real', 'AI']
  const select = getRandomInt(2);
  const [image, setImage] = useState(possibility[select]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(getRandomInt(1000000));
  const [newGame, setNewGame] = useState(false);
  const [nextPicture, setnextPicture] = useState(false);
  const [startGame, setStartGmae] = useState(false);


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

  function correctAnswer () {
    setScore((prev) => prev + 1);
    setnextPicture(true);
    changeCounter()
    changeImage();
  }
  
  function incorrectAnswer () {
    alert("Sorry you lost");
    unsetFlag();
    setScore(0);
    setNewGame(true);
    changeCounter();
    changeImage();
  }
  const setFlag = () => {
    setStartGmae(true)
    console.log("set");
  }

  const unsetFlag = () => {
    setStartGmae(false)
      console.log("unset");
  }

  console.log("here" + image);

  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData['dir']),
  });
  


    

  


  return (
    <>

    {startGame ? (
      <>
          {!isMobile ? (
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
    ) : (
      <div>
        <HighScore score = {score} />
        <Timer startNewGame={startNewGame} newGame = {newGame} nextPicture = {nextPicture} />
        <NewSwipe label = {image} incorrectAnswer = {incorrectAnswer} correctAnswer = {correctAnswer} count = {count} />
        
      </div>
    )
    }
  
  </>
    
    
    ) : (
        <Popup open = {!startGame} position="right center">
          <div className="App">
          <p>Welcome to spot the AI</p>
          <p>A game where you decide whether a drawing is made by humans or AI</p>
          <p>Swipe left if you think the image is made by artist</p>
          <p>Swipe right if you think the image is made an AI</p>
        <button onClick = {setFlag}> Start game</button>
        </div>
        </Popup>

      
    )}
    </>
  );
}

export default App;
