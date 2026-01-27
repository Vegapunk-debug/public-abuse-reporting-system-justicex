import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const slides = [
  {
    title: 'Safety Starts With You — And We’ve Got Your Back.',
    description: 'An anonymous and secure platform to report child abuse. Your privacy matters — all reports are confidential.',
    image: 'https://plus.unsplash.com/premium_photo-1673543757560-061f5222201c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Confidential. Secure. Life-Saving.',
    description: 'Help eliminate drug activity from your neighborhood. Submit tips without revealing your identity.',
    image: 'https://images.unsplash.com/photo-1604198729707-3e29206ef963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Help Build a Safer Community',
    description: 'Your voice matters. Report crime and abuse securely — empower change in your society.',
    image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }, 
  {
    title: 'Report Without Fear. We’ll Handle the Rest.',
    description: 'Your safety matters. Share what you know —anonymously, securely, and without judgment. We’ll take it from there.',
    image: 'https://i.pinimg.com/736x/e9/a0/3f/e9a03f0feaf15d07399b51ece64b56d0.jpg',
  },
  {
    title: 'Your Action Today Can Prevent Harm Tomorrow.',
    description: 'A simple report now can stop a serious threat later. Speak up. Save lives. Be the reason someone is safe.',
    image: 'https://i.pinimg.com/736x/2b/52/9c/2b529c2c78c7e531797575889b05fd9d.jpg',
  },
  {
    title: 'You See Something. We Do Something.',
    description: 'Spot danger? Report it anonymously.We act swiftly to keep your community safe.',
    image: 'https://i.pinimg.com/1200x/f4/e4/07/f4e4074bf4283f1779bd71174ce19cee.jpg',
  },
]

export default function HeroSlider() {
  const navigate = useNavigate()

  const [currentSlide, setCurrentSlide] = useState(0)

  const goToPrev = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  const goToNext = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  
  const slide = slides[currentSlide]

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white px-6 text-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
          <p className="text-lg md:text-xl mb-6">{slide.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <button
              onClick={() => navigate('/report')}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-sm">
              <i className="ri-file-list-3-line mr-2 text-lg"></i>
              Register a Complaint
            </button>

            <button
              onClick={() => navigate('/how-it-works')}
              className="inline-flex items-center justify-center border border-white hover:bg-white hover:text-black text-white text-base font-medium px-6 py-3 rounded-lg transition duration-200">
              <i className="ri-information-line mr-2 text-lg"></i>
              How It Works
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow hover:bg-gray-200">
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow hover:bg-gray-200">
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full ${currentSlide === idx ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  )
}