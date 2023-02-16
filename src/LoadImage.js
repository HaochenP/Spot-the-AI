import styles from './LoadImage.css';
import useWindowDimensions from './WindowDimensions.js';
import React, {  useEffect ,useState, useLayoutEffect, useMemo} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {isMobile} from 'react-device-detect';



function LoadImage(props){
    const [aiImages, setAiImages] = useState({}); 
    const [realImages, setImages] = useState({}); 
    const [currentImage, setCurrentImage] = useState('/static/media/generated.webp');

    // Function for adding file names from a file to a dictionary
    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    };

    // Returns a random integer
  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
  }

  // Loading initial data
    const loadData = () => {
      
      setImages(importAll(require.context('./real', false, /\.(png|jpe?g|svg|webp)$/)));
      setAiImages(importAll(require.context('./images', false, /\.(png|jpe?g|svg|webp)$/)));
    }
    
    // Loading images path only once
    useMemo(() => {
      loadData();
    }, []);


    // Load next image when user clicks button or timer runs out
    useMemo(() => {
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
      <>{!isMobile ? (
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
        ) :(
          <img   src={currentImage} id="original_image_mobile" onClick={setFlag}></img>
        )
  }
        </>
      );
    
};

export default LoadImage;