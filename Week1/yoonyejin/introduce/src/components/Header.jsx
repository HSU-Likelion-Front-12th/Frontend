import logo from'../images/portfolio.png';
import Nav from './Nav';

function Header(){

    const headerStyle={
        display: "flex",
        width : "100vw",
        flexDirection : "row",
        justifyContent: "space-around",
        alignItems: "center"
    }

    const logoStyle={
        width : "340px",
        height: "fit-content"
    }
    

    return(
        <div style={headerStyle}>
            <img src={logo} style={logoStyle}/>
            <Nav />
        </div>
    );
}

export default Header;