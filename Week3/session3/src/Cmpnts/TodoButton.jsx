import '../App.css'
import img from '../assets/Group.svg'
import {useState} from 'react'

export default function TodoButton({elem, deleteList, input, setInput}){
    function inputChangeHandler(e){
        setInput(e.target.value) // 오타 수정
        console.log(input)
    }
    return (
        <div className="toDoList">
            <input type="checkbox" className="select"></input>
            <input type="text" className="field" placeholder="내용을 입력해주세요" value={input} onChange={(e)=>{inputChangeHandler(e)}}></input>
            <button className="minusButton" onClick={()=>deleteList(elem.id)}></button>
            <img src={img} alt='삭제 이미지' onClick={()=>deleteList(elem.id)} /> {/* 삭제 기능을 이미지에도 적용 */}
        </div>
    )
}
