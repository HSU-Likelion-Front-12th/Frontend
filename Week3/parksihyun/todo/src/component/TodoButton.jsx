import React, { useState } from "react";
import deleteImg from "../images/delete.svg";

export default function TodoButton({
  item,
  updateContent,
  deleteList,
  moveCompleted,
}) {
  const [isChecked, setIsChecked] = useState(false);

  function inputChangeHandler(event) {
    const newContent = event.target.value;
    updateContent(item.id, newContent);
  }

  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);

    if (isChecked) {
      const confirmMove = window.confirm(
        "투두리스트에서 보관함으로 옮기시겠습니까?"
      );
      if (confirmMove) {
        moveCompleted(item.id);
      } else {
        setIsChecked(false);
      }
    }
  }

  return (
    <div className="toDoList">
      <input
        type="checkbox"
        className="select"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <input
        type="text"
        className="field"field
        placeholder="내용을 입력하세요."
        value={item.content}
        onChange={inputChangeHandler}
      />
      <button className="minusButton" onClick={() => deleteList(item.id)}>
        <img src={deleteImg} alt="삭제 이미지" />
      </button>
    </div>
  );
}
