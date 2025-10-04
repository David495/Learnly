import React from "react"
import './index.css'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/home.jsx'
import Header from "./components/navbar.jsx"
import About from "./Pages/about.jsx"
import Contact from "./Pages/contact.jsx"
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
