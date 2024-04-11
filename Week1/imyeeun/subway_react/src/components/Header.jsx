import logo from '../images/logo.png';

function Header(){


    const HeaderStyle={
        display:"flex",
        width:"100vw",
        flexDirection:"column",
        alignItems:"center"
    }

    const logoStyle={
        width:"250px",
        height:"fit-content",


    }
    return(
        <div style={HeaderStyle}>
            <img src={logo} style={logoStyle}/>
        </div>
    );
}


export default Header;