import { useState } from "react";
import deleteImg from "../image/delete.svg";

export default function ToDoButton({item, isChecked, moveList,updateContent, deleteList}) {
  const [userInput, setUserInput] = useState(item.content);

  function inputChangeHandler(event) { // 입력이 발생하면
    const newContent = event.target.value; // 입력 들어온 값은 새로운 할 일 목록
    setUserInput(newContent); // 화면에 새로운 내용 보여주기
    updateContent(item.id, newContent); // updateContent에 해당 입력 받은 내용과 id값 인자로 넘기기
  }

  return (
    <div className="toDoList">
        <input type='checkbox' className="select" onClick={moveList} checked={isChecked}></input>
        <input type='text' className="field" placeholder="내용을 입력하세요" value={userInput} onChange={inputChangeHandler}></input>
        <button className="minusButton" onClick={deleteList}>
            <img src={deleteImg} alt="삭제 이미지"></img>
        </button>

    </div>)
}