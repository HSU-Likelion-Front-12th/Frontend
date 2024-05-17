import React from 'react';
import styled from 'styled-components';
import boj from '../images/boj.png';
import exercise from '../images/exercise.jpeg';
import hobbys from '../images/movie.jpeg';

const HOBBY = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    height:70%;
`

const Div = styled.div`
border-radius: 16px;
border: 1px solid #EBEDF8;
background-color: #FFF;
width: 27%;
height: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const LID = styled.div`
    border-radius: 16px 16px 0px 0px;
    background: #4A86FF;
    height:25%;
    width: 100%;

    display:flex;
    justify-content: center;
    align-items: center;

    & + div{

        display: flex;
        justify-content: center;
        align-items: center;
        width : 150%;
        height: 75%;
    }
`

const Span = styled.span`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const Img = styled.img`
    width: 50%;
    height:75%;
`

function Hobby(){
    return (
        <HOBBY>
            <Div>
                <LID>
                    <Span>알고리즘 문제 풀기</Span>
                </LID>
                <div>
                    <Img src ={boj} />
                </div>
            </Div>
            <Div>
                <LID>
                    <Span>운동 하기</Span>
                </LID>
                <div>
                    <Img src ={exercise} />
                </div>
            </Div>
            <Div>
                <LID>
                    <Span>영화 보기</Span>
                </LID>
                <div>
                    <Img src ={hobbys} />
                </div>
            </Div>
        </HOBBY>
    );
}


export default Hobby;