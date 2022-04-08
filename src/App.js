// import * as React from "react";
import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/nav';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
    <Navbar />
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      </header> 
    </div>
  ); 
}

export default App;
