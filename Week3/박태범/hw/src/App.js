import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./components/Main";
import ToDoButton from "./components/ToDoButton";
import Storage from "./components/Storage";

function App() {
  const [list, setList] = useState([]); // 할 일 목록 배열
  const [archiveItems, setArchiveItems] = useState([]); // 보관함 아이템 배열

  // 할 일 목록에 아이템 추가하는 함수
  function addList() {
    const newItem = {
      id: Date.now(),
      content: "",
    };
    setList((prevList) => [...prevList, newItem]);
  }

  // 할 일 목록의 아이템 내용 업데이트하는 함수
  function updateList(itemId, newContent) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, content: newContent } : item
      )
    );
  }

  // 할 일 목록에서 아이템 삭제하는 함수
  function deleteList(itemId) {
    setList((prevList) => prevList.filter((item) => item.id !== itemId));
  }

  // 보관함에 아이템 추가하는 함수
  function addToArchive(item) {
    setArchiveItems([...archiveItems, item]);
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
            addToArchive={addToArchive}
          />
        }
      />
      <Route
        path="/Storage"
        element={<Storage archiveItems={archiveItems} />}
      />
    </Routes>
  );
}

export default App;
