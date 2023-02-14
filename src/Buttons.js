


function Buttons(props) { 
    let styles = {
        button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          width: 50,
          height: 50,
        }
        
      };
    

    const handleClick = () =>{
        props.changeCount(props.count + 1);
        if (props.label === props.selectedCategory)
        {
            alert("Correct");
            let newScore = props.score + 1;
            props.scoreCheck(newScore);
        } else {
            alert ("False");
            props.scoreCheck(0);
        }
        props.myClick();
    }
    return(
    <button style = {styles.button} onClick={handleClick}>{props.label}</button>
    )
};

export default Buttons;