import React from 'react'
import HeroSlider from '../components/HeroSlider'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'
import News from '../pages/News'
import PublicGrievance from '../components/PublicGrievance'

export default function Home() {
  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      <HeroSlider />
      <HomeContent />
      <News />
      <PublicGrievance />
      <Footer />
    </div>
  )
}
