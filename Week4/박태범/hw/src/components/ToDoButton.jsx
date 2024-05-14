import deleteImg from "../images/delete.svg";
import { useState } from "react";

export default function ToDoButton({ item, updateContent, deleteList }) {
  const [userInput, setUserInput] = useState(item.content);
  const [isChecked, setIsChecked] = useState(false);

  function inputChangeHandler(event) {
    // 입력이 발생하면
    const newContent = event.target.value; // 입력이 들어온 값은 새로운 할 일 목록
    setUserInput(newContent); // 화면에 새로운 내용을 보여주기
    updateContent(item.id, newContent); // updateContent에 해당 입력 받은 내용과 id값 인자로 넘기기
  }

  return (
    <div className="toDoList">
      <input type="checkbox" className="select"></input>
      <input
        type="text"
        className="field"
        placeholder="내용을 입력해주세요"
        value={userInput}
        onChange={inputChangeHandler}
      ></input>
      <button className="minusButton" onClick={deleteList}>
        <img src={deleteImg} alt="삭제 이미지"></img>
      </button>
    </div>
  );
}
