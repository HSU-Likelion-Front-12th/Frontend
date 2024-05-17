import { useState } from "react"

import deleteImg from "./images/deleteImg.svg"
export default function ToDoButton({ item, updateContent, deleteList }) {

  const [userInput, setUserInput] = useState(item.content);

  //입력이 발생하면 
  function inputChangeHandler(e) {
    const newContent = e.target.value; //입력 들어온 값은 새로운 할일 목록
    setUserInput(newContent);//화면에 새로운 내용 보여주기
    updateContent(item.id, newContent);//updateContent 해당 입력 받은 내용과..
  }
  return (
    <div className="toDoList">
      <input type="checkbox" className="select"></input>
      <input
        type="text"
        className="field"
        placeholder="input text"
        value={userInput}
        onChange={inputChangeHandler}></input>
      <button className="minusButton" onClick={deleteList}>
        <img src={deleteImg} alt="삭제 이미지"></img>
      </button>
    </div>
  )
}