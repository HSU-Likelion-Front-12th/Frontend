import { useState, useEffect} from 'react';
import img from '../assets/Group.svg'
import '../App.css'


function Storage({todoCheckedList}){
    return(
        <div className='App'>
            <h1>Storage</h1>
            {todoCheckedList.map((elem)=>
                <div className="toDoList" key={elem.id}>
                    <input type="checkbox" className="select" checked></input>
                    <div className="field" style={{'width': '100%'}}>{elem.content}</div>
                </div>
            )}
        </div>
    )
}

export default Storage;