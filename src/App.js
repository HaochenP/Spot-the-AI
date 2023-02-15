import './App.css';
import Buttons from './Buttons.js'
import LoadImage from './LoadImage';
import HighScore from './HighScore'
import React, {  useMemo, useState } from "react";


function App() {
  
  const possibility = ['Real', 'AI']
  const select = getRandomInt(2);
  const [image, setImage] = useState(possibility[select]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(getRandomInt(1000000));


  function changeImage(e) {
    setImage(possibility[getRandomInt(2)]);
  }
  function changeScore(num){
    setScore(num);
  }


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  

  console.log("here" + image);

  return (
    <div className="App">
      <header className="App-header">
        <HighScore score = {score} />
      <LoadImage selectedCategory = {image} count = {count}/>
      <div className='rowC'>
        <Buttons myClick={changeImage} label = "Real" score = {score} selectedCategory = {image} scoreCheck = {changeScore} count = {count} changeCount = {setCount}/> 
        <Buttons myClick={changeImage}  label = "AI" score = {score} selectedCategory = {image} scoreCheck = {changeScore} count = {count} changeCount = {setCount}/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
