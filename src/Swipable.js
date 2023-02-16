import React from "react"
import ReactDOM from "react-dom"
import {Swipe, Position} from "react-swipe-component"
import LoadImage from './LoadImage';

class Swipable extends React.Component {
  render() {
    return <Swipe
      nodeName="div"
      className="test"
      onSwipeEnd={this.onSwipeEnd}
      onSwipedLeft={this.onSwipeLeftListener}
      onSwipedRight={this.onSwipeRightListener}
      onSwipedDown={this.onSwipeDownListener}
      onSwipedUp={this.onSwipeUpListener}
      touch={true}

      //onSwipe={this.onSwipeListener}
      
      >
      <LoadImage selectedCategory = {this.props.label} count = {this.props.count}/>
    </Swipe>
    
  }
 
  onSwipeEnd = () => {
    console.log("Swipe Ended")
  }
  onSwipeLeftListener = () => {
    console.log("Swiped left")
    if (this.props.label === "Real"){
      this.props.correctAnswer();
      console.log("Right");
    } else {
      this.props.incorrectAnswer();
      console.log("Incorrect");
    }
  }
  onSwipeRightListener = () => {
    console.log("Swiped right")
    if (this.props.label === "AI"){
      console.log("Right");
      this.props.correctAnswer();
    } else {
      this.props.incorrectAnswer();
      console.log("Incorrect");
    }
  }
  onSwipeUpListener = () => {
    console.log("Swiped Up")
  }
  onSwipeDownListener = () => {
    console.log("Swiped down")
  }
  onSwipeListener = (p) => {
    if (p.x !== 0) {
      console.log(`Swipe x: ${p.x}`)
    }
    if (p.y !== 0) {
      console.log(`Swipe y: ${p.y}`)
    }
  }
}

export default Swipable;