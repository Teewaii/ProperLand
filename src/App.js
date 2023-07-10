import logo from './logo.svg';
import { useState, createContext } from 'react';
import './App.css';
import Layout from './Components/Layout';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
export const AppContext = createContext();


function App() {
  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(prev => !prev)
  }
  return (
    <AppContext.Provider value={{ toggle, setToggle, handleToggle }}>
      < Layout >
        <div className="App  ">
          <Hero />
        </div>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
