import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {  useEffect ,useState, useLayoutEffect, useMemo, useRef} from "react";

function Timer(props) {
    const timeLimit = 10;
    const [num, setNum] = useState(timeLimit);
    const [pause, setPause] = useState(false);

    let intervalRef = useRef();
    const decreaseNum = () => {
        setNum((prev) => prev - 1);

    }
    useEffect(() => {
        if (num === 0){
            alert("Times up, you lost");
            props.startNewGame();
            setNum(timeLimit);
            setPause(false);
        }
    }, [num]);

    useEffect(() => {
        if (props.newGame || props.nextPicture)  {
            setNum(timeLimit);
        }
    }, [props.newGame, props.nextPicture]);

    useEffect(() => {
        setPause(true)
        intervalRef.current = setInterval(decreaseNum, 1000);
        return () => clearInterval(intervalRef.current);
    }, [pause]);

    return (
        <ProgressBar variant="info" now={num} label={`${num} seconds`} max = {timeLimit} />
    )

}

export default Timer;