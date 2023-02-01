import logo from './logo.svg';
import './App.css';
import ai_image from './images/ai1.webp';
import Buttons from './Buttons.js'
import LoadImage from './LoadImage';
import React, { useEffect, useState } from "react";


function App() {
  const possibility = ['Real', 'AI']
  const select = getRandomInt(2);
  let selectedCategory = possibility[select];
  const [image, setImage] = useState(possibility[select]);
  
  function changeImage(e) {
    setImage(possibility[getRandomInt(2)]);
    console.log("New state"+ image);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  

  console.log("here" + image);

  return (
    <div className="App">
      <header className="App-header">
      <LoadImage selectedCategory = {image}/>
        <Buttons myClick={changeImage} label = "Real" selectedCategory = {image}/> 
        <Buttons myClick={changeImage}  label = "AI" selectedCategory = {image}/>
        
        
      </header>
    </div>
  );
}

export default App;
