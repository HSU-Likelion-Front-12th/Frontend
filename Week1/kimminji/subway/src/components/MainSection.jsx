import background from '../images/main.png';

function MainSection(){

    const imgStyle = {
        display: "flex",
        height: "45vh",
        width: "100vw"
    }
    return(
        <img src={background} style={imgStyle}/>
    );
}

export default MainSection;