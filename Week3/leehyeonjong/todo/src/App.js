import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Storage from "./components/Storage";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  function addList() {
    const newItem = { id: Date.now(), content: "", completed: false };
    setList((prevList) => [...prevList, newItem]);
  }

  function updateList(itemId, newContent) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, content: newContent } : item
      )
    );
  }

  function deleteList(itemId) {
    setList((prevList) => prevList.filter((item) => item.id !== itemId));
  }

  function toggleComplete(itemId) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            list={list}
            addList={addList}
            updateList={updateList}
            deleteList={deleteList}
            toggleComplete={toggleComplete}
          />
        }
      />
      <Route
        path="/storage"
        element={<Storage items={list.filter((item) => item.completed)} />}
      />
    </Routes>
  );
}

export default App;
