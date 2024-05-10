import background from '../images/main.png'

function MainSection(){

    const imgStyle={
        display:"flex",
        width:"100vw",
        height:"45vh"
    }

    return(
        <img src={background} style={imgStyle}/>
    );
}

export default MainSection;