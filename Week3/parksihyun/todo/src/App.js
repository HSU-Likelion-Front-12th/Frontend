// App.jsx
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./component/Main";
import Storage from "./component/Storage";
function App() {
  const [list, setList] = useState([]);
  const [storageItems, setStorageItems] = useState([]);

  function addList() {
    const newItem = {
      id: Date.now(),
      content: "",
      completed: false,
    };
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

  function moveCompleted(itemId) {
    const completedItem = list.find((item) => item.id === itemId);
    setStorageItems((prevItems) => [...prevItems, completedItem]);
    setList((prevList) => prevList.filter((item) => item.id !== itemId));
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
            moveCompleted={moveCompleted}
          />
        }
      />
      <Route
        path="/storage"
        element={<Storage storageItems={storageItems} />}
      />
    </Routes>
  );
}

export default App;
