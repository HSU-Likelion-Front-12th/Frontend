import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [comp, setComp] = useState(Home);

  return (
    // <>
    //   <header>
    //     <button onClick={() => setComp(Home)}>Home</button>
    //     <button onClick={() => setComp(About)}>About</button>
    //     <button onClick={() => setComp(Users)}>Users</button>
    //   </header>
    //   <hr />
    //   <main children={comp}></main>
    // </>

    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/About">
          <button>About</button>
        </Link>
        <Link to="/Users">
          <button>Users</button>
        </Link>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
