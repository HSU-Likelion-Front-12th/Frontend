import React from "react";
import "../App.css";
import TodoButton from "./TodoButton";
import { Link } from "react-router-dom";

const Main = ({
    list,
    addList,
    checkedItemHandler,
    checkedItems,
    updateList,
    deleteList,
}) => {
    return (
        <div className="App">
            <div className="plusButton">
                <button className="plusButton" onClick={addList}>
                    Plus
                </button>
                <Link to="/Storage">
                    <button className="plusButton">Storage</button>
                </Link>
            </div>
            {list.map((item) => {
                return checkedItems.has(item.id) ? null : (
                    <TodoButton
                        key={item.id}
                        item={item}
                        checkedItemHandler={checkedItemHandler}
                        updateContent={updateList}
                        deleteList={() => deleteList(item.id)}
                    />
                );
            })}
        </div>
    );
};

export default Main;
