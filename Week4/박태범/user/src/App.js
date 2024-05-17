import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import LoginMain from "./components/LoginMain";
import Change from "./components/Change";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/LoginMain" element={<LoginMain />} />
        <Route path="/Change" element={<Change />} />
      </Routes>
    </Router>
  );
}

export default App;
