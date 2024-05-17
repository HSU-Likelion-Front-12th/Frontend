import React from 'react';
import styled from 'styled-components';
import profileImg from '../images/Ellipse 2.svg';
import Phone from '../images/Phone.png';
import Envelop from '../images/EnvelopeSimple.png';
import MapPin from '../images/MapPin.png';
const Div = styled.div`
    border-radius: 16px;
    border: 1px solid #EBEDF8;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 23.5%;
    height: 100%;

    & > span{
        color: #4A86FF;
        text-align: center;
        font-family: Inter;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
 }
`

const Img = styled.img`
    width: 5rem;
    height: 5rem;
`

const DDiv = styled.div`
    width:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & > img{
        width : 1.5rem;
        height: 1.5rem;
    }
    & > span{
        width : 8rem;
        font-size: 0.75rem;
    }
`

function Profile(){
    return (
        <Div>
            <Img src={profileImg}></Img>
            <span>최지훈</span>
            <DDiv>
                <Img src= {Phone}></Img>
                <span> 010 - 5134 - 7019</span>
            </DDiv>
            <DDiv>
                <Img src={Envelop}></Img>
                <span> 2171447@hansung.ac.kr</span>
            </DDiv>
            <DDiv>
                <Img src={MapPin}></Img>
                <span> 경기도 고양시 덕양구 혜음로 30</span>
            </DDiv>
        </Div>
    );
}


export default Profile;