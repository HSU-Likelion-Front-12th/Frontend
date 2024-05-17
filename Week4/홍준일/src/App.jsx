import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import SetPwPage from "./components/SetPwPage";

function App() {

  return (
    <>
      <GlobalStyles />
      <LoginTemplete>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/loginPage" element={<LoginPage />}/>
          <Route path="/signUpPage" element={<SignUpPage />}/>
          <Route path="/signInPage" element={<SignInPage />} />
          <Route path="/setPwPage" element={<SetPwPage />} />
        </Routes>
      </LoginTemplete>
    </>
  );
}

const LoginTemplete = styled.div`
  width: 393px;
  height: 852px;
  position: absolute;
  border: 1px solid #7A7485;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export default App;
