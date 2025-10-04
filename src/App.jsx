import React from "react"
import './index.css'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/home.jsx'
import Header from "./components/navbar.jsx"
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
