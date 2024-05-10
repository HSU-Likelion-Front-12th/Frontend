import React from "react";
import "../App.css";
import TodoButton from "./ToDoButton";

export default function Main({ moveStorage, moveList, updateCheck, list, addList, updateList, deleteList }) {
    // 새로운 리스트 아이템을 추가하는 함수
    const handleAddList = () => {
        addList();
    };

    // 아이템을 보관함으로 이동하는 함수
    const handleMoveList = (itemId) => {
        // 이동하기 전에 확인 메시지를 표시
        let retValue = window.confirm('이동');
        if (retValue==1) {
            moveList(itemId);
        } else {
            // 이동하지 않을 경우 체크 상태를 업데이트
            updateCheck(itemId);
        }
    };

    return (
        <div className="App">
            {/* 추가 및 보관함 이동 버튼 */}
            <div className="buttonBox">
                <button className="plusButton" onClick={handleAddList}>
                    Plus
                </button>
                <button className="plusButton" onClick={moveStorage}>
                    Storage
                </button>
            </div>
            {/* 리스트 출력 */}
            {list.map((item) => (
                <TodoButton
                    key={item.id}
                    moveList={() => handleMoveList(item.id)}
                    isChecked={item.isChecked}
                    item={item}
                    updateContent={updateList}
                    deleteList={() => deleteList(item.id)}
                />
            ))}
        </div>
    );
}
