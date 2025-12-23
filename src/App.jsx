import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/ui/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./dashboards/AdminDashboard";
import PageNotFound from "./pages/PageNotFound";
import UserDashboard from "./dashboards/UserDashboard";
import ResetPassword from "./pages/ResetPassword";


function App() {
  return (
    <Routes>
      {/* Routes WITH Navbar & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard/>}/>
      </Route>

      {/* Routes WITHOUT Navbar & Footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
