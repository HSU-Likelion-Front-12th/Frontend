
import deleteImg from "../images/delete.svg";
import { useState } from "react";


export default function TodoButton({ item, isChecked, moveList, updateContent, removeList }) {
    const [userInput, setUserInput] = useState(item.content);

    function inputChangeHandler(event) {
        const newContent = event.target.value;
        setUserInput(newContent);
        updateContent(item.id, newContent);
    }
    return (
        <div className="toDoList">
            <input type='checkbox' className="select" onClick={moveList} checked={isChecked}></input>
            <input type='text' className="field" placeholder="내용을 입력해주세요" value={userInput} onChange={inputChangeHandler}></input>
            <button className="minusButton" onClick={removeList}>
                <img src={deleteImg} alt="삭제 이미지"></img>
            </button>

        </div>)
}