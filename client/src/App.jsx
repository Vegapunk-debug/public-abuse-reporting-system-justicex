import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Blogs from './pages/Blogs';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Login from './pages/Login';
import ReportForm from './pages/ReportForm';
import TrackStatus from './pages/TrackStatus';

export default function App() {
  return (
    // <><h1>JusticeX</h1></>
    <Router>

      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/report" element={<ReportForm />} />

          <Route path="/reports" element={<Reports />} />
          <Route path="/track-status" element={<TrackStatus />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

