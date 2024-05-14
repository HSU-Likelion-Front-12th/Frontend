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

  function removeList(itemId) {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== itemId);
    })
  }

  function moveList(itemId) {
    console.log("호출되었습니다.");
    removeList(itemId);//하나 넣어놓고 그리고 보관함에서 해당하는 것을 뺀 것을 갖고 옵시다.
    let items = list.find((item) => {
      return item.id === itemId;
    })
    setStoreList((prevList) => [...prevList, items])
  }
  function updateCheck(itemId) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, isChecked: true } : item));
  }


  return (
    <Routes>
      <Route path="/" element={<Main moveStorage={goStorage} updateCheck={updateCheck} moveList={moveList} list={list} addList={addList} updateList={updateList} removeList={removeList}></Main>}></Route>
      <Route path='/Storage' element={<Storage storeList={storeList} home={goHome}></Storage>}></Route>
    </Routes>
  )
}

export default App; 