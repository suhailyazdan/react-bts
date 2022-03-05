import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";


const Roots = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Roots