import React from "react";
import ToDoButton from "./ToDoButton";
import { useNavigate } from "react-router-dom";

export default function Main({
  list,
  addList,
  updateList,
  deleteList,
  toggleComplete,
}) {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="buttonBox">
        <button className="plusButton" onClick={addList}>
          Plus
        </button>
        <button className="plusButton" onClick={() => navigate("/storage")}>
          Storage
        </button>{" "}
      </div>
      {list.map((item) => (
        <ToDoButton
          key={item.id}
          item={item}
          updateContent={updateList}
          deleteList={() => deleteList(item.id)}
          toggleComplete={() => toggleComplete(item.id)}
        />
      ))}
    </div>
  );
}
