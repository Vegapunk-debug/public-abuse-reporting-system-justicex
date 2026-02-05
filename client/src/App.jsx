import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Blogs from './pages/Blogs';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import About from './pages/About';
import AdminLogin from './pages/AdminLogin';
import ReportForm from './pages/ReportForm';
import TrackStatus from './pages/TrackStatus';
import Helpline from './pages/Helpline';
import HowItWorks from './pages/HowItWorks';

export default function App() {
  return (
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
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/helpline" element={<Helpline />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </div>
    </Router>
  )
}


