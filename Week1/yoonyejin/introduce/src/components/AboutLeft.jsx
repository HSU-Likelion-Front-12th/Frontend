import me from '../images/me.jpg'
import MapPin from '../images/MapPin.png'
import EnvelopeSimple from '../images/EnvelopeSimple.png'
import Phone from '../images/Phone.png'

function AboutLeft(){

        const leftSytle={
            display : "inlineBlock",
            textAlign : "center",
            width : "25rem",
            height : "38rem",
            marginRight:"0.6rem",
            backgroundColor:"#ffffff",
            borderRadius:"1rem",
            border: "1px solid #ebedf8",
            marginBottom:"10rem"
        }
    
        const imgStyle={
            marginTop:"2rem",
            width:"13rem",
            height:"13rem",
            borderRadius: "50%"
        }
    
        const nameStyle={
            color:"#4A86FF",
            fontSize : "2.5rem",
            fontWeight : 700,
            fontFamily : "Inter"
        }

        const pContainer={
            display :"flex",
            flexDirection : "column",
            marginLeft:"1rem"
        }

        const spanContainer={
            height: "3rem",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            marginLeft:"2rem",
            marginBottom:"0.5rem"
        }

        const markStyle={
            width:"3rem",
            height:"3rem",
            marginRight:"1rem"
        }

        const spanStyle={
            fontSize:"1.2rem",
            color:"#484a64",
            fontFamily : "Inter",
            textAlign : "left"
        }

        return (
            <div style={leftSytle}>
                <img src={me} style={imgStyle} />
                <br /><br/><br/>
                <strong style={nameStyle}>윤예진</strong>
                <br />
                <div style={pContainer}>
                    <p style={spanContainer}>
                        <img src={Phone} style={markStyle} />
                        <span style={spanStyle}>010.2496.9985</span>
                    </p>
                    <p style={spanContainer}>
                        <img src={EnvelopeSimple} style={markStyle} />
                        <span style={spanStyle}>2001_11_7@naver.com</span>
                    </p>
                    <p style={spanContainer}>
                        <img src={MapPin} style={markStyle} />
                        <span style={spanStyle}>경기도 화성시 동탄2신도시</span>
                    </p>
                </div>
            </div>
        );
}

export default AboutLeft;