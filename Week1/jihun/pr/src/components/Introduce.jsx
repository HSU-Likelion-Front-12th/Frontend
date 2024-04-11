import React from 'react';
import styled from 'styled-components';
const Div  = styled.div`
display: flex;
flex-wrap : wrap;
height:100%;
width:60%;

    & > div{
        height: 50%;
        width: 50%;
    }
`


const Span = styled.span`
    text-transform: uppercase;
    font-size : 1.0rem;


    font-size : 1.25rem;
    font-weight: 700;
`

const Text = styled.span`
    color: #626682;
    font-family: Inter;
    font-size: 0.85rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.rem; 
`


function Introduce(){

    return(
        <Div>
            <div>
                <div><Span>education</Span></div>
                <div><Text>한성대학교 컴퓨터 공학부 <br></br>2021.03~2025.02</Text></div>
            </div>
            <div>
                <div><Span>skills</Span></div>
                <div><Text>Python<br></br>Java<br></br>C++<br></br>Swif</Text></div>
            </div>
            <div>
                <div><Span>work</Span></div>
                <div><Text>프론트엔드 개발자</Text></div>
            </div>
            <div>
                <div><Span>activites</Span></div>
                <div><Text>멋쟁이사자처럼 12기 <br></br>ROTC 63기</Text></div>
            </div>
        </Div>
    );
}


export default Introduce;