import './App.css';
import Buttons from './Buttons.js'
import LoadImage from './LoadImage';
import HighScore from './HighScore'
import React, {  useState } from "react";


function App() {
  const possibility = ['Real', 'AI']
  const select = getRandomInt(2);
  const [image, setImage] = useState(possibility[select]);
  
  const [score, setScore] = useState(0);

  function changeImage(e) {
    setImage(possibility[getRandomInt(2)]);
    console.log("New state"+ image);
  }
  function changeScore(num){
    console.log(num);
    setScore(num);
  }


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  

  console.log("here" + image);

  return (
    <div className="App">
      <header className="App-header">
        <HighScore score = {score}/>
      <LoadImage selectedCategory = {image}/>
      <div className='rowC'>
        <Buttons myClick={changeImage} label = "Real" score = {score} selectedCategory = {image} scoreCheck = {changeScore}/> 
        <Buttons myClick={changeImage}  label = "AI" score = {score} selectedCategory = {image} scoreCheck = {changeScore}/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
