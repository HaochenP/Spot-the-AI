import styles from './LoadImage.css';
import useWindowDimensions from './WindowDimensions.js';
import React, {  useEffect ,useState, useLayoutEffect, useMemo} from "react";

function LoadImage(props){
    const [aiImages, setAiImages] = useState({}); 
    const [realImages, setImages] = useState({}); 
    const [currentImage, setCurrentImage] = useState('')
  
    let { height, width } = useWindowDimensions();
    height = height/ 3;
    width = width/ 3;
    console.log(height);
    console.log(width);
    const loadData = () => {
      
      setImages(importAll(require.context('./real', false, /\.(png|jpe?g|svg|webp)$/)));
      setAiImages(importAll(require.context('./images', false, /\.(png|jpe?g|svg|webp)$/)));
      console.log("here");

    }

    useMemo(() => {
      console.log('me');
      loadData();
    }, []);

    useMemo(() => {
      console.log('second me');
      if (props.selectedCategory === 'Real'){
        const dictLength = Object.keys(realImages).length;
        setCurrentImage(realImages[Object.keys(realImages)[getRandomInt(dictLength)]]);
    } else {
      const dictLength = Object.keys(aiImages).length;
      setCurrentImage(aiImages[Object.keys(aiImages)[getRandomInt(dictLength)]]);
    }
    }, [props.count, props.selectedCategory]);


    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


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
            <img  src={currentImage} id="original_image" onClick={setFlag}></img>
          )}
        </>
      );
    
};

export default LoadImage;