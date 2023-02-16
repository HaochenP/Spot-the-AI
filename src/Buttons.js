


function Buttons(props) { 
    let styles = {
        button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          width: 100,
          height: 100,
        }
        
      };
    

    const handleClick = () =>{
        let newCount = props.count + 1;
        props.changeCount(newCount);
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