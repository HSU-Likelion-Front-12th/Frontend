import React from 'react';
import '../Styles/Intro.css';

function Intro(props){
    return (
        <div className="intro">
            <div className="fade-in-animation">
                {props.textContent}
            </div>
        </div>
    )    
}
export default Intro;