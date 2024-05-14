import { useState } from "react";
import deleteImg from "../images/delete.svg";

export default function ToDoButton({item, updateContent, deleteList, movetoStorage}) {
  const [userInput, setUserInput] = useState(item.content);
  const [isCheked, setIsChecked] = useState(false);

  function inputChangeHandler(event) { // 입력이 발생하면
    const newContent = event.target.value; // 입력 들어온 값은 새로운 할 일 목록
    setUserInput(newContent); // 화면에 새로운 내용 보여주기
    updateContent(item.id, newContent); // updateContent에 해당 입력 받은 내용과 id값 인자로 넘기기
  }

  function checkboxHandler(event){
    const isCheked = event.target.checked;
    setIsChecked(isCheked);
    if(isCheked){ // 목록의 완료 표시가 눌리면 
      const isConfirmed = window.confirm('보관함으로 이동시키겠습니까?');
        if(isConfirmed) {// 확인을 누른경우
          movetoStorage(item.id);
        }
    }
  }

  return (
    <div className="toDoList">
      <input type="checkbox" className="select" checked={isCheked} onChange={checkboxHandler}></input>
      <input type="text" className="field" placeholder="내용을 입력해주세요" value={userInput} onChange={inputChangeHandler}></input>
      <button className="minusButton" onClick={deleteList}>
        <img src={deleteImg} alt="삭제 이미지"></img>
      </button>
    </div>
  )
}