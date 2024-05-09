import deleteImg from "../images/delete.svg";
import { useState } from "react";

export default function ToDoButton({
  item,
  updateContent,
  deleteList,
  addToArchive,
}) {
  const [userInput, setUserInput] = useState(item.content);
  const [isChecked, setIsChecked] = useState(false);

  function inputChangeHandler(event) {
    const newContent = event.target.value;
    setUserInput(newContent);
    updateContent(item.id, newContent);
  }

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      // 체크되면 확인창 보이기
      const confirmed = window.confirm("보관함으로 옮기겠습니까?");
      if (confirmed) {
        // 사용자가 확인을 선택한 경우 보관함으로 옮기는 로직 구현
        addToArchive(item);
        deleteList(item.id);
        // 체크박스 체크 해제
        setIsChecked(false);
      } else {
        // 사용자가 취소를 선택한 경우 체크박스 다시 체크 해제
        setIsChecked(false);
      }
    }
  }

  return (
    <div className="toDoList">
      {/* 체크박스 */}
      <input
        type="checkbox"
        className="select"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      {/* 할 일 내용 입력 필드 */}
      <input
        type="text"
        className="field"
        placeholder="내용을 입력해주세요"
        value={userInput}
        onChange={inputChangeHandler}
      />

      {/* 삭제 버튼 */}
      <button className="minusButton" onClick={() => deleteList(item.id)}>
        <img src={deleteImg} alt="삭제 이미지" />
      </button>
    </div>
  );
}
