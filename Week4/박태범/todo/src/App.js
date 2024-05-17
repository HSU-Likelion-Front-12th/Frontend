import { useState } from "react";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Storage from "./components/Storage";

function App() {
  const [list, setList] = useState([]); // 목록 배열 생성
  const [storageList, setStorageList] = useState([]);

  // 목록 추가 함수
  function addList() {
    const newItem = {
      // 목록 객체 생성
      id: Date.now(), // 고유한 id 값
      content: "", // 내용
      isChecked: false, // 체크 상태 추가
    };
    setList((prevList) => [...prevList, newItem]);
  }

  // 목록 입력 함수
  function upadateList(itemId, newContent) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, content: newContent } : item
      )
    );
  }

  // 삭제 함수
  function deleteList(itemId) {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== itemId); // 삭제하고 싶은 id 값을 받아서 해당 id 값이 아닌 요소들을 리턴
    });
  }

  const saveContent = (itemId) => {
    const checkList = list.find((item) => item.id === itemId);
    if (checkList) {
      setStorageList((prev) => [...prev, checkList]);
      deleteList(itemId);
    }
  };

  function handleToggleCheck(itemId) {
    setList((prevList) => {
      return prevList.map((item) => {
        return item.id === itemId
          ? { ...item, isChecked: !item.isChecked }
          : item;
      });
    });
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            list={list}
            addList={addList}
            updateList={upadateList}
            deleteList={deleteList}
            saveContent={saveContent}
            handleToggleCheck={handleToggleCheck}
          />
        }
      ></Route>
      <Route path="/storage" element={<Storage list={storageList} />} />
    </Routes>
  );
}

export default App;
