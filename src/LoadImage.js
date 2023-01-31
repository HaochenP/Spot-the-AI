import styles from './LoadImage.css';




function LoadImage(){


    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    const images = importAll(require.context('./real', false, /\.(png|jpe?g|svg|webp)$/));
    const dictLength = Object.keys(images).length;


    const name = Object.keys(images)[getRandomInt(dictLength)];
    console.log(name);


    return (
        <div className={styles.div_image}>
        <img style={{ width: "50%", height: "50%" }} src={images[name] } />
        </div>
    );
};

export default LoadImage;