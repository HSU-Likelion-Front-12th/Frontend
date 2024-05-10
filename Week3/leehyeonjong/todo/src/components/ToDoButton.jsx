import React, { useState } from "react";
import deleteImg from "../images/deleteImg.svg";

export default function ToDoButton({
  item,
  updateContent,
  deleteList,
  toggleComplete,
}) {
  const [userInput, setUserInput] = useState(item.content);

  function inputChangeHandler(event) {
    const newContent = event.target.value;
    setUserInput(newContent);
    updateContent(item.id, newContent);
  }

  return (
    <div className="toDoList">
      <input
        type="checkbox"
        className="select"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
      />
      <input
        type="text"
        className="field"
        placeholder="내용을 입력해주세요"
        value={userInput}
        onChange={inputChangeHandler}
      />
      <button className="minusButton" onClick={deleteList}>
        <img src={deleteImg} alt="삭제 이미지" />
      </button>
    </div>
  );
}
