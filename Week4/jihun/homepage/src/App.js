import { useEffect, useState } from 'react';
import './App.css';
// import styled from 'styled-components';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './components/Main';
import Signin from './components/Signin';
import Signup from './components/Signup';
import LoginMain from './components/LoginMain';
import Change from './components/Change';
function App() {
  //현재 로그인을 했는지 안 했는지 세션으로 관리하자.
  const sessionStorage = window.sessionStorage;
  const [isLogin, setLogin] = useState(false);//처음에는 False
  const [idList, setIdList] = useState([]);


  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [tel, setTel] = useState('');


  const navigate = useNavigate();
  const GoToSignIn = () => {
    navigate('Signin');
  }

  const GoToLoginMain = () => {
    navigate('LoginMain');
  }


  const GoToChange = () => {
    setEmail(idList.filter((item) => item.id === id).at(0)['email']);
    setTel(idList.filter((item) => item.id === id).at(0)['tel']);
    navigate('Change');
  }

  const GoToSignup = () => {
    navigate('Signup');
  }
  const GoToHome = () => {
    navigate('/');
  }

  useEffect(() => {
    if (isLogin) {
      GoToLoginMain();//이미 로그인 돼있기에
    }
  })
  //현재 세션이 로그인을 했는지 안 했는지 체크할 상태를 갖고 있자.
  return (//여기서 HEADER SECTION FOTTER로 나누자.
    <Routes>
      <Route path='/' element={<Main GotoSiginin={GoToSignIn} GoToSignup={GoToSignup} />}></Route>
      <Route path="/Signin" element={<Signin setID={setId} GoToLoginMain={GoToLoginMain} idList={idList} sessionStorage={sessionStorage} setLogin={setLogin} />}></Route>
      <Route path="/Signup" element={<Signup setIdList={setIdList} GoToHome={GoToHome} />}></Route>
      <Route path="/LoginMain" element={<LoginMain id={id} setEmail={setEmail} setID={setId} setPASS={setPass} setLogin={setLogin} setIdList={setIdList} GoToChange={GoToChange} sessionStorage={sessionStorage} isLogin={isLogin} GoToHome={GoToHome} />}></Route>
      <Route path="/Change" element={<Change setIdList={setIdList} EMAIL={email} TEL={tel} ID={id} />}></Route>
    </Routes>
  );
}

export default App;
