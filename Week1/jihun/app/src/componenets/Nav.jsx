import React from 'react';
import styled from 'styled-components';
const DivContainer = styled.div`
    height : 7vh;
    display: flex;
    justify-content: center;
`
const NavContainer = styled.div`
    max-width: 80rem;
    height: 100%;
    display: flex;
    color: black;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

    &>div{
        &:hover strong{
            color : rgb(31,158,31);
            border-bottom : 3px solid rgb(31, 158, 31);
            cursor : pointer;
        }
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    height: 100%;
    min-width: 6rem;
`;

const Strong = styled.strong`
    font-size: 1rem;    
`;

function Nav(){
    return(
        <DivContainer>
            <NavContainer>
            <Div>
                <Strong>메뉴소개</Strong>
            </Div>
            <Div>
                <Strong>이용방법</Strong>
            </Div>
            <Div>
                <Strong>새소식</Strong>
            </Div>
            <Div>
                <Strong>써브웨이</Strong>
            </Div>
            <Div>
                <Strong>가맹점</Strong>
            </Div>
            <Div>
                <Strong>온라인 주문</Strong>
            </Div>
        </NavContainer>
    </DivContainer>
);

}


export default Nav;