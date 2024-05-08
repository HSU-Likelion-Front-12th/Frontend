import React from "react";
import { useState, useEffect } from "react";

const SavedToDo = ({ item, checkedItemHandler, checkedItems }) => {
    const [bChecked, setChecked] = useState(false);

    const checkHandler = ({ target }) => {
        if (window.confirm("저장소에 제거하시겠습니까?")) {
            setChecked(!bChecked);
            checkedItemHandler(item.id, target.checked);
        } else {
            setChecked(false);
        }
    };

    useEffect(() => {
        checkedItems.has(item.id) ? setChecked(true) : setChecked(false);
    }, [checkedItems, item.id]);

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
                value={item.content}
                disabled
            ></input>
        </div>
    );
};

export default SavedToDo;
