


function Buttons(props) { 
    const handleClick = () =>{
        console.log(props.label);
    }
    return(
    <button onClick={handleClick}>{props.label}</button>
    )
};

export default Buttons;