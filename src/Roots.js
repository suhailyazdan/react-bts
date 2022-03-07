import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from "./App"
import Home from "./containers/Home";
import About from "./containers/About";
import CompletedProjects from './containers/Completed-projects';
import OngoingProjects from './containers/Ongoing-projects';
import ContactUs from './containers/Contact-us';


const Roots = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/completed-projects" element={<CompletedProjects />} />
        <Route path="/ongoing-projects" element={<OngoingProjects />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  )
}

export default Roots