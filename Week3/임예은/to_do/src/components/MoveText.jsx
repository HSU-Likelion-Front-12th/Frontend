import React from "react";
import "../App.css";

export default function MoveText({ userInput, onInputChange }) {
    return (
        <div className="toDoList">
            <div className="listItem">
                {/* 체크박스 */}
                <input type='checkbox' className="select" checked></input>
                {/* 입력 필드 */}
                <input 
                    type='text' 
                    className="field" 
                    placeholder="내용을 입력하세요" 
                    value={userInput} 
                    onChange={onInputChange} // 사용자 입력이 변경될 때 호출되는 함수
                />
            </div>
        </div>
    )
}
