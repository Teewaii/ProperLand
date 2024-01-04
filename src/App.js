import { useState, createContext } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import PropertyDetail from "./Components/Pages/PropertyDetail";
import Blog from "./Components/Pages/Blogs";
import Team from "./Components/Pages/OurAgents";

import { Routes, Route } from "react-router-dom";
import ContactUs from "./Components/Pages/ContactUs";

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

function PropertyInfo() {
  return (
    <Layout>
      <PropertyDetail />
      <style>
        {`
      .saleCard  {
        background-color: #F9F9F9;
      }
    `}
      </style>
    </Layout>
  );
}

function OurAgents() {
  return (
    <Layout>
      <Team />
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
function ContactPage() {
  return (
    <Layout>
      <ContactUs />;
    </Layout>
  );
}

function App() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }
  // Function for scrolling to the top of the page. To be passed as prop to components when necessary
  function toTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div
      className={toggle ? "h-[100vh] overflow-hidden " : "overflow-x-hidden"}
    >
      <AppContext.Provider value={{ toggle, setToggle, handleToggle, toTop }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/detail/:id" element={<PropertyInfo />} />
          <Route path="/blog/:title" element={<Blogs />} />
          <Route path="/agents" element={<OurAgents />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
