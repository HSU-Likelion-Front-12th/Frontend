import React from 'react';
import styled from 'styled-components';
const Text = styled.span`
    text-transform: uppercase;
    font-size : 1.0rem;
`
const Box = styled.div`
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center ;
    & > span{
        width:10vw;
    }
`
const Div = styled.div`
    flex-shrink: 0;
    background-color: #fff;
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    height: 7vh;
`
const Span = styled.span`
    color : #4A86FF;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    font-size : 1.5rem;
`
function Header(){ 
    return (
        <Div>
            <Box><Text><Span>portfolo.</Span></Text></Box>
            <Box>
                <Text>about</Text>
                <Text>hobby</Text>
                <Text>contact</Text>
            </Box>
        </Div>
        
        
    );
}



export default Header;