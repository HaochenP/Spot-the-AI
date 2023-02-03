import styles from './LoadImage.css';
import useWindowDimensions from './WindowDimensions.js';
import {isMobile} from 'react-device-detect';


function LoadImage(props){
    let images = {};
    let { height, width } = useWindowDimensions();
    let heightString, widthString;
    if(isMobile) {
         heightString = height/2 + 'px';
         widthString = width + 'px';
    } else {
         heightString = height/2 + 'px';
        widthString = width/3 + 'px';
    }
    
    let usedImages = [];

    console.log(heightString, widthString);
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    if (props.selectedCategory === 'Real')
    {
        images = importAll(require.context('./real', false, /\.(png|jpe?g|svg|webp)$/));
    } else {
        images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|webp)$/));
    }
    

    const dictLength = Object.keys(images).length;
    const name = Object.keys(images)[getRandomInt(dictLength)];
    while (usedImages.includes(name)){
        dictLength = Object.keys(images).length;
        name = Object.keys(images)[getRandomInt(dictLength)];
    }
    console.log(name);


    return (
        <div className={styles.div_image}>
        <img style={{ width: widthString, height: heightString }} src={images[name] } />
        </div>
    );
};

export default LoadImage;