import { useState } from "react"
import InputManager from './InputManager'
import { Routes, Route } from "react-router-dom";
import StorageManager from "./StorageManager";

export default function App() {
  const [isDisable, setDisable] = useState(false); //체크 박스가 활성화 되면 input 기능은 disable이 될 수 있는 상태 관리 값
  const [isContent, setContent] = useState(); //입력된 값을 관리하는 상태 관리 :InputManger.jsx
  const [isStorage, setStorage] = useState();

  //체크 박스가 이루어 지면 모든 기능들을 막게 한다.
  const handleDisable = () => {
    setDisable(!isDisable);
  }

  //LocalStorage에 저장하는 함수 : 저장을 누르면 동작하는 함수
  const handleSetLocalStorage = () => {
    const inputValue = isContent;
    localStorage.setItem("content", inputValue);
  }

  // const handleGetLocalStorage = () => {
  //   const savedContent = localStorage.getItem("content");
  //   if (savedContent) {
  //     setContent(savedContent);
  //   }
  // }

  return (
    <Routes>
      <Route path="/" element={<InputManager handleDisable={handleDisable} isDisable={isDisable} isContent={isContent} setContent={setContent} handleSetLocalStorage={handleSetLocalStorage} />} />
      <Route path="/storage" element={<StorageManager />} />
    </Routes>
  )
}