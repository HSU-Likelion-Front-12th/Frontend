import { useState } from "react";
import Main from "./components/Main";
import {Routes, Route} from "react-router-dom";

function App() {
  const [list, setList] = useState([]); // 목록 배열 생성
  const [storageItems, setStorageItems] = useState([]);

  // 목록 추가 함수
  function addList() {
    const newItem = { // 목록 객체 생성
      id: Date.now(), // 고유한 id 값
      content: "", // 내용
    };
    setList((prevList) => [...prevList, newItem]);
  }

  // 목록 입력 함수
  function upadateList(itemId, newContent) {
    setList((prevList) => 
      prevList.map((item) => 
        item.id === itemId ? {...item, content: newContent} : item
      )
    );
  }

  // 삭제 함수
  function deleteList(itemId) {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== itemId); // 삭제하고 싶은 id 값을 받아서 해당 id 값이 아닌 요소들을 리턴
    })
  }

  function moveToStorage(item) {
    setStorageItems((prevItems) => [...prevItems, item]);
    deleteList(item.id);
  }

  return (
    <Routes>
      <Route path="/" element={<Main list={list} storageItems={storageItems} addList={addList} updateList={upadateList} deleteList={deleteList} moveToStorage={moveToStorage} />}></Route>
    </Routes>
  )
}

export default App;
