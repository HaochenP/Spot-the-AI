import styles from './LoadImage.css';




function LoadImage(props){
    console.log(props.selectedCategory);
    let path = ' ';
    console.log(path);

    let images = {};
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
    console.log("path here"+path);
    
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