import './App.css';
import Page from './Page';
import { DisplayContext } from './context/DisplayContext';
import { UserContext } from './context/UserContext';


import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [UserName, setUserName] = useState("Woo");
  return (
    <>
      <div className='App'>
        <UserContext.Provider value={UserName}>
          <DisplayContext.Provider value={{ isDark, setIsDark }}>
            <Page />
          </DisplayContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App;