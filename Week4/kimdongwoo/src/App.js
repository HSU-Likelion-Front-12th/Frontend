import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Signin from "./Pages/Signin";
import LoginMain from "./Pages/LoginMain";
import Change from "./Pages/Change";
import Signup from "./Pages/Signup";
import { useState } from "react";
export default function App() {

  const [isID, setID] = useState();
  const [isPW, setPW] = useState();

  const handleSetID = (ID) => {
    // const inputValue = isID;
    localStorage.setItem("ID", ID);
  }

  const handleSetPW = (PW) => {
    // const inputValue = isPW;
    localStorage.setItem("PW", PW);
  }

  const handleGetID = () => {
    // const inputValue = isID;
    return localStorage.getItem("ID");
  }

  const handleGetPW = () => {
    // const inputValue = isPW;
    return localStorage.getItem("PW");
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Signin" element={<Signin handleGetID={handleGetID} handleGetPW={handleGetPW} />}></Route>
        <Route path="/LoginMain" element={<LoginMain handleGetID={handleGetID} />}></Route>
        <Route path="/Change" element={<Change handleSetPW={handleSetPW} />}></Route>
        <Route path="/Signup" element={<Signup handleSetID={handleSetID} handleSetPW={handleSetPW} />}></Route>
      </Routes>
    </>
  )
}