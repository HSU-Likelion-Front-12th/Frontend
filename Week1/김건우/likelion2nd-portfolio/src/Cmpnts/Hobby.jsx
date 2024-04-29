import React from 'react';
import '../Styles/Hobby.css';

function Hobby(props){
    return (
        <div id="hobby_1st">
                <div className="block-title">{props.title}</div>
                <div className="block-content">
                    <img src={props.imgSrc} alt="이미지 준비중"></img>
                </div>
            </div>
    )
}

export default Hobby;