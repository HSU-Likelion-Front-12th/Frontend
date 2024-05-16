import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main.jsx'
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import LoginMain from './components/LoginMain.jsx';
import Change from './components/Change.jsx';

const App = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
                <Route 
                    path="/LoginMain" 
                    element={isLoggedIn ? <LoginMain /> : <Navigate to="/signin" />} 
                />
                <Route 
                    path="/Change" 
                    element={isLoggedIn ? <Change /> : <Navigate to="/signin" />} 
                />
            </Routes>
        </Router>
    );
};

export default App;
