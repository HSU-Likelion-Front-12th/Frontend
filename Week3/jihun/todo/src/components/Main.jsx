import TodoButton from "./ToDoButton";
import React from 'react';
export default function Main({ moveStorage, moveList, updateCheck, list, addList, updateList, removeList }) {
    // const nav = () => {
    //     return <Navigate to={Storage} />
    // }
    return (
        <div className="App">
            <div className="buttonBox">
                <button className="plusButton" onClick={addList}>
                    Plus
                </button>
                <button className="plusButton" onClick={moveStorage}>
                    Storage
                </button>
            </div>
            {list.map((item) => {
                return (
                    <TodoButton key={item.id} moveList={() => {
                        let retValue = window.confirm('보관함으로 옮기시겠습니까?');
                        if (retValue) {
                            moveList(item.id);
                        } else {
                            updateCheck(item.id);
                        }
                    }} isChecked={item.isChecked} item={item} updateContent={updateList} removeList={() => removeList(item.id)}>

                    </TodoButton>);
            })}
        </div>
    )
}