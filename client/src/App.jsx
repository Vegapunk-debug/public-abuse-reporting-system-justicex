import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Blogs from './pages/Blogs';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Login from './pages/Login';

import './index.css'

export default function App() {
  return (
    <Router>

      <Navbar />
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

