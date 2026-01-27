import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Blogs from './pages/Blogs';
import News from './pages/News';
import About from './pages/About';
import Login from './pages/Login';
import ReportForm from './pages/ReportForm';
import TrackStatus from './pages/TrackStatus';
import Helpline from './pages/Helpline';
import HowItWorks from './pages/HowItWorks';

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
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/helpline" element={<Helpline />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </div>
    </Router>
  )
}

