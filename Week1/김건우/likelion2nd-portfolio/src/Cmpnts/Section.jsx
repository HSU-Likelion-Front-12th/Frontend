import React from 'react';
import '../Styles/Section.css'

function Section(props){
    return(
        <article className="section">
        <div className="fade-in-animation-delayed">{props.title}</div>
        {props.content}
        </article>
    )
}

export default Section;