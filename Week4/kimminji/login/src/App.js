import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home.jsx'
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import LoginMain from './components/LoginMain.jsx';
import Change from './components/Change.jsx';

export default function App(){
  return(
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route 
            path="/LoginMain" 
            element={ <LoginMain />} 
        />
        <Route 
            path="/Change" 
            element={ <Change /> } 
        />
    </Routes>
</Router>
  );}