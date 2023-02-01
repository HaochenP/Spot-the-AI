


function Buttons(props) { 
    const handleClick = () =>{
        if (props.label === props.selectedCategory)
        {
            alert("Correct");
        } else {
            alert ("False");
        }
        props.myClick();
    }
    return(
    <button onClick={handleClick}>{props.label}</button>
    )
};

export default Buttons;