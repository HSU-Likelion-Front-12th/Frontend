
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./components/Main";
import Storage from "./components/Storage";
import { useState } from "react";
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [storeList, setStoreList] = useState([]);
  const navigate = useNavigate();

  const goStorage = () => {
    navigate("/Storage");
  }

  const goHome = () => {
    navigate("/");
  }

  function addList() {
    const newItem = {
      id: Date.now(),
      content: "",
      isChecked: false
    };
    setList((prevList) => [...prevList, newItem]);
  }

  function updateList(itemId, newContent) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, content: newContent } : item));
  }

  function deleteList(itemId) {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== itemId);
    })
  }

  function moveList(itemId) {
    deleteList(itemId); 
    let items = list.find((item) => item.id === itemId);  
    setStoreList((prevList) => [...prevList, items])
  }

  function updateCheck(itemId) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, isChecked: true } : item));
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Memo App</h1>
      </header>
      <Routes>
        <Route path="/" element={<Main 
          moveStorage={goStorage} 
          updateCheck={updateCheck} 
          moveList={moveList} 
          list={list} 
          addList={addList} 
          updateList={updateList} 
          deleteList={deleteList} 
        />} />
        <Route path="/Storage" element={<Storage storeList={storeList} home={goHome} />} />
      </Routes>
    </div>
  )
}

export default App;
