import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Change from "./pages/Change";
import LoginMain from "./pages/LoginMain";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Change" element={<Change />}></Route>
            <Route path="/LoginMain" element={<LoginMain />}></Route>
        </Routes>
    );
}

export default App;
