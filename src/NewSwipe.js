import React from "react"
import ReactDOM from "react-dom"
import {Swipe, Position} from "react-swipe-component"
import LoadImage from './LoadImage';
import { useSwipeable, UP, DOWN, SwipeEventData } from 'react-swipeable';




function NewSwipe(props) {
    
    
    function onSwipeLeftListener(){
        console.log("Swiped left")
        if (props.label === "Real"){
          props.correctAnswer();
          console.log("Right");
        } else {
          props.incorrectAnswer();
          console.log("Incorrect");
        }
      }
      function  onSwipeRightListener () {
        console.log("Swiped right")
        if (props.label === "AI"){
          console.log("Right");
          props.correctAnswer();
        } else {
          props.incorrectAnswer();
          console.log("Incorrect");
        }
      };


      const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData['dir'] === 'Left'){
                onSwipeLeftListener();
            } else if (eventData['dir'] === 'Right'){
                onSwipeRightListener();
            }
        },
      });

    return (
        <div {...handlers}> <LoadImage selectedCategory = {props.label} count = {props.count}/> </div>
    )
  
  ;
  
   
}


export default NewSwipe;