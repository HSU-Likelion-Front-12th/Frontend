import React from 'react';
import '../Styles/HobbyBlock.css'
import Hobby from './Hobby';
import feng_shei from '../assets/feng_shei.jpeg';
import beer from '../assets/beer.jpg';
import subway_coding from '../assets/subway_coding.jpeg';

function HobbyBlock (props){
    return (
        <div className="hobby-blocks fade-in-animation-delayed">
            <Hobby title = "풍수지리" imgSrc = {feng_shei}></Hobby>
            <Hobby title = "맥주" imgSrc = {beer}></Hobby>
            <Hobby title = "지하철 코딩" imgSrc = {subway_coding}></Hobby>
        </div>
    )
}

export default HobbyBlock;