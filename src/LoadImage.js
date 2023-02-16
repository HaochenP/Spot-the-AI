import styles from './LoadImage.css';
import useWindowDimensions from './WindowDimensions.js';
import React, {  useEffect ,useState, useLayoutEffect, useMemo} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoadImage(props){
    const [aiImages, setAiImages] = useState({}); 
    const [realImages, setImages] = useState({}); 
    const [currentImage, setCurrentImage] = useState('/static/media/generated.webp');
    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    };

  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
  }
    const loadData = () => {
      
      setImages(importAll(require.context('./real', false, /\.(png|jpe?g|svg|webp)$/)));
      setAiImages(importAll(require.context('./images', false, /\.(png|jpe?g|svg|webp)$/)));
      console.log("here");
      console.log(realImages);
      console.log(aiImages);

    }

    useMemo(() => {
      console.log('me');
      loadData();
    }, []);

    useMemo(() => {
      console.log('second me');
      
      if (props.selectedCategory === 'Real'){
        const dictLength = Object.keys(realImages).length;
        const index = getRandomInt(dictLength)
        console.log("real",dictLength);
        setCurrentImage(realImages[Object.keys(realImages)[index]]);
        delete realImages[Object.keys(realImages)[index]];

    } else {
      const dictLength = Object.keys(aiImages).length;
      const index = getRandomInt(dictLength);
      console.log("ai",dictLength);
      setCurrentImage(aiImages[Object.keys(aiImages)[index]]);
      delete aiImages[Object.keys(aiImages)[index]];

    }
    console.log(currentImage);
    }, [props.count, realImages, aiImages, props.newGame]);


    


    const [click, setClick] = useState(false)

    const setFlag = () => {
        setClick(true)
        console.log("set");
    }

    const unsetFlag = () => {
        setClick(false)
        console.log("unset");
    }

    return (
        <>
          {click ? (

          <div id="lightbox" onClick={unsetFlag} >


            <img id="lightbox-img" src={currentImage}></img>
          </div> 
            
          ) : (
            [
              <div>
            <img   src={currentImage} id="original_image" onClick={setFlag}></img>
            </div>
          ]
          )}
        </>
      );
    
};

export default LoadImage;