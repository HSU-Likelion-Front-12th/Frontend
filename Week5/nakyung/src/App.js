import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import Main from './main/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './signup/Signup';
import Signin from './signin/Signin';
import LoginMain from './main/loginmain';
import Change from './change/Change';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 393px;
  width: 100vw;
  min-height: 852px;
  background-color: white;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/LoginMain" element={<LoginMain />} />
          <Route path="/Change" element={<Change />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
