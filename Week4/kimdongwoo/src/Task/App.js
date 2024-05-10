import Home from './Home';
import About from './About';
import Users from './Users';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';

function App() {
  // const [comp, setComp] = useState(Home); //SPA
  return (
    <Router>
      <header>
        <Link to="/"><button>Home</button></Link>
        <Link to="/About"><button>About</button></Link>
        <Link to="/Users"><button>Users</button></Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/About" element={<About></About>} />
          <Route path="/Users" element={<Users></Users>} />
        </Routes>
      </main>
    </Router>
    // <header>
    //   <button onClick={() => { setComp(Home) }}></button>
    //   <button onClick={() => { setComp(About) }}></button>
    //   <button onClick={() => { setComp(Users) }}></button>

    //   <main children={comp} />
    // </header>
  );
}

export default App;
