import React from 'react'
import '../Styles/Career.css'

function Career (props){
    return (
        <div>
            <div className="info-title">{props.title}</div>
            <div className="info-content">{props.content}
            </div>
        </div>
    )
}

export default Career;