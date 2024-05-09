// Main.jsx
import React from "react";
import { Link } from "react-router-dom";
import TodoButton from "./TodoButton";

export default function Main({ list, addList, updateList, deleteList, moveCompleted }) {
  return (
    <div className="App">
      <div>
        <button className="plusButton" onClick={addList}>
          Plus
        </button>
        <button className="plusButton">
          <Link to="/storage">Storage</Link>
        </button>
      </div>

      {list.map((item) => (
        <TodoButton
          key={item.id}
          item={item}
          updateContent={updateList}
          deleteList={() => deleteList(item.id)}
          moveCompleted={moveCompleted}
        />
      ))}
    </div>
  );
}
