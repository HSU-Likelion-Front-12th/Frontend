import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Change from './components/Change';
import LoginMain from './components/LoginMain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/change" element={<Change />} />
        <Route path="/loginmain" element={<LoginMain />} />
      </Routes>
    </Router>
  );
}

export default App;
