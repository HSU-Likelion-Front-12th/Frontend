//실습
import Main from "./Main";
import Storage from "./Storage";
// Recoil 연습
import Recoil from "../recoil/Recoil";
import RecoilTest from "../recoilTest/Recoil";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [list, setList] = useState([]); //목록배열
  const [storageList, setStorageList] = useState([]);

  function addStorage(element) {
    setStorageList((prevList) => [...prevList, element])
  }

  //목록 추가 함수
  function addList() {
    const newItem = {//목록 객체 생성
      id: Date.now(),
      content: "",
    };
    setList((prevList) => [...prevList, newItem]);
  }

  //목록 입력 함수 error
  // function updateList(itemId, newContent) {
  //   setList((prevList) => { prevList.map((item) => { item.id === itemId ? { ...item, content: newContent } : item }) })
  // }

  //목록 입력 함수 none error
  function updateList(itemId, newContent) {
    setList((prevList) => {
      return prevList.map((item) => {
        return item.id === itemId ? { ...item, content: newContent } : item;
      });
    });
  }

  function deleteList(itemId) {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== itemId);
    })
  }

  return (
    <>
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Main list={list} addList={addList} updateList={updateList} deleteList={deleteList} addStorage={addStorage} storageList={storageList} />}></Route>
        <Route path="/storage" element={<Storage storageList={storageList} />}></Route>

        <Route path="/recoil" element={<Recoil></Recoil>}></Route>
        <Route path="/recoilTest" element={<RecoilTest></RecoilTest>}></Route>
      </Routes>
    </>
  )
}

export default App;
