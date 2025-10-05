import React from "react"
import './index.css'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/home.jsx'
import Header from "./components/navbar.jsx"
import About from "./Pages/about.jsx"
import Contact from "./Pages/contact.jsx"
import Login_page from "./Pages/login_page.jsx"
import Signup from "./Pages/signup.jsx"
import Dashboard from "./Pages/dashboard.jsx"
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login_page />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
