import { useState, createContext } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blogs";

import { Routes, Route } from "react-router-dom";

// import ToTop from './Components/Button/ToTop';
export const AppContext = createContext();

function HomePage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

function AboutUs() {
  return (
    <Layout>
      <About />
    </Layout>
  );
}
function Blogs() {
  return (
    <Layout>
      <Blog />
    </Layout>
  );
}

function App() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }
  return (
    <AppContext.Provider value={{ toggle, setToggle, handleToggle }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* Additional routes go here... */}
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
