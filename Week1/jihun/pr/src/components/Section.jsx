import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Introduce from './Introduce';
import Hobby from './Hobby';

const Div = styled.div`
    border: 1px solid #000;
    background-color: #4A86FF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;
    height: 32vh;

    & > span{
        color: #FFF;
        text-align: center;
        font-family: Inter;
        font-size: 2rem;
        font-style: normal;
        font-weight: 800;
        line-height: 5.5vh;
    }
`
function Presentation(){
    return (
        <Div>
            <span>안녕하세요!<br></br>
                제 이름은 최지훈 입니다.<br></br>
                항상 발전하는 개발자가 되고 싶습니다.
            </span>
        </Div>
    );
}
const Footer = styled.div`
    background-color:  #F3F5FF;
    height:80vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
`
const Text = styled.span`
    text-transform: uppercase;
    font-size : 1.0rem;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 70vw;
    height: 30vh;
`
const DDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width:  100%;
    height: 50%;
    & > span{
        color: #4A86FF;
        text-align: center;
        font-family: Inter;
        font-size: 2.0rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;

        height: 15vh;
        display: flex;
        align-items: center;
}
`

const Hidden = styled.div`
    height: 100%;
`
function footer(){
    return (
        <Footer>
            <DDiv>
                <Text>about</Text>
                <Bottom>
                    <Profile></Profile>
                    <Introduce></Introduce>
                </Bottom>
            </DDiv>
            <DDiv>
                <Text style={{height : "30%"}}>hobby</Text>
                <Hobby></Hobby>
            </DDiv>
            <Hidden></Hidden>
        </Footer>
    );
}

export {Presentation as Section1,footer as Section2};