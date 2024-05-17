import styled from 'styled-components';
import images from "../images/main.png"
import React from 'react';
import img1 from "../images/subway1.png";
import img2 from "../images/subway2.png";
import img3 from "../images/subway3.png";
import img4 from "../images/subway4.png";
const Sec1 = styled.section`
    width: 100vw;
    height: 45vh;
    position: relative;
    background: url(${images}) no-repeat 50% 50% / cover;
`

const Sec2 = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
`

function Section1(){
    return (
        <div>
            <Sec1></Sec1>        
        </div>
    );
}
const data = [
    {"img" : img1,"strong" : "에그마요", "span" : "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러"},
    {"img" : img2,"strong" : "이탈리안 비엠티", "span" : "페페로니,살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는 써브웨이의 베스트셀러!"},
    {"img" : img3,"strong" : "비엘티", "span" : "오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그래도"},
    {"img" : img4,"strong" : "햄", "span" : "기본 중에 기본!  풍부한 햄이 만들어내는 입 안 가득 넘치는 맛의 향연"},
]


const DivContainer = styled.div`
display: inline-block;
    text-align: center;
    width: 14rem;
    height: 14rem;
    margin-right: 0.6rem;
`
const Img = styled.img`
width: 10rem;
height: 6rem;
`
const Span = styled.span`
font-size: 0.8rem;
color: gray;
`
function Section2(){
    
    return (
        <div>
            <Sec2>
                {data.map((key,index)=>(<>
                    <DivContainer>
                    <Img src = {key["img"]}></Img>
                    <br/>
                    <strong>{key["strong"]}</strong>
                    <br></br><br></br>
                    <Span>{key["span"]}</Span>
                    </DivContainer>
                </>        
                ))}
            </Sec2>        
        </div>
    );
}
export {Section1,Section2};