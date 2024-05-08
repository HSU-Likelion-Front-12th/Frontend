import React from "react";
import deleteImg from "../images/deleteImg.svg";
import { useState } from "react";

const TodoButton = ({
    item,
    checkedItemHandler,
    updateContent,
    deleteList,
}) => {
    const [userInput, setUserInput] = useState(item.content);

    function inputChangeHandler(event) {
        const newContent = event.target.value;
        setUserInput(newContent);
        updateContent(item.id, newContent);
    }

    const [bChecked, setChecked] = useState(false);

    const checkHandler = ({ target }) => {
        if (window.confirm("저장소에 추가하시겠습니까?")) {
            setChecked(!bChecked);
            checkedItemHandler(item.id, target.checked);
        } else {
            setChecked(false);
        }
    };

    return (
        <div className="toDoList">
            <input
                type="checkbox"
                className="select"
                checked={bChecked}
                onChange={(e) => checkHandler(e)}
            ></input>
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
};

export default TodoButton;
