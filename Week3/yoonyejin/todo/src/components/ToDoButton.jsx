import { useState } from "react";
import deleteImg from "../images/deleteImg.svg";

export default function ToDoButton({item, updateContent, deleteList, moveToStorage}) {
  const [userInput, setUserInput] = useState(item.content);
  const [isChecked, setIsChecked] = useState(false);

  function inputChangeHandler(event) { // 입력이 발생하면
    const newContent = event.target.value; // 입력 들어온 값은 새로운 할 일 목록
    setUserInput(newContent); // 화면에 새로운 내용 보여주기
    updateContent(item.id, newContent); // updateContent에 해당 입력 받은 내용과 id값 인자로 넘기기
  }

  function handleCheckboxChange(event) {
    const checkStatus = event.target.checked;
    setIsChecked(checkStatus);
    if (checkStatus) {
      if (window.confirm("Storage로 이동하시겠습니까?")) {
        moveToStorage(item);
      }
    }
  }

  return (
    <div className="toDoList">
      <input type="checkbox" className="select" checked={isChecked} onChange={handleCheckboxChange}></input>
      <input type="text" className="field" placeholder="내용을 입력해주세요" value={userInput} onChange={inputChangeHandler}></input>
      <button className="minusButton" onClick={deleteList}>
        <img src={deleteImg} alt="삭제 이미지"></img>
      </button>
    </div>
  )
}
