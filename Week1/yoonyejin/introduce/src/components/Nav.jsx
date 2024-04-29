import styled from "styled-components";

const NavContainer=styled.div`
    max-width : 80rem;
    height : 100%;
    display : flex;
    color : black;
    justify-content : center;
    align-items : center;
`;

const Div = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    height : 100%;
    min-sidth : 6rem;
    margin-right: 4rem;
    fontFamily : Inter;
`;


const navStyle={
    height : "8vh",
    display : "flex",
    justifyContent : "center"
}

function Nav(){
    return(
        <nav style={navStyle}>
        <NavContainer>
            <Div>
                ABOUT
            </Div>
            <Div>
                HOBBY
            </Div>
            <Div>
                CONTACT
            </Div>
        </NavContainer>
        </nav>
    );
}

export default Nav;