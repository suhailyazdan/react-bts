import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from "./App"
import Home from "./containers/Home";
import About from "./containers/About";


const Roots = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default Roots