import Home from './components/Home';
import MyPage from './mypage/MyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myPage' element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
