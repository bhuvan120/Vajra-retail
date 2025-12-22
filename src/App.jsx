import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (

      <BrowserRouter>
       <Routes>

        <Route 
        path="/"
        element={
          <>
          <Navbar/>
          <Home/>
          <Footer/>

          </>
        }
      />


      <Route 

        path="/about"
        element={
          <>
          <Navbar/>
          <About/>
          <Footer/>

          </>
        }
      />

      <Route 
      
        path="/contact"
        element={
          <>
          <Navbar/>
          <Contact/>
          <Footer/>
           

          </>
        }
      />

      <Route 
      
        path="/login"
        element={
          <>
          {/* <Navbar/> */}
          <Login/>
          {/* <Footer/> */}

          </>
        }
      />

      <Route 
      
        path="/signup"
        element={
          <>
          {/* <Navbar/> */}
          <Signup/>
          {/* <Footer/> */}

          </>
        }
      />



        </Routes>
      </BrowserRouter>

  

  )
}

export default App
