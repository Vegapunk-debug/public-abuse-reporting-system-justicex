import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Reports', path: '/reports' },
  { name: 'Track Status', path: '/track-status' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'News', path: '/news' },
  { name: 'About', path: '/about' }
]
export default function NavBar() {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const role = localStorage.getItem('data')

  const handleLogOut = () => {
    localStorage.removeItem('data')
    navigate('/Login')
  }

  const handleNavigation = (path) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div
          onClick={() => navigate('/')}
          className="flex items-center space-x-3 text-black font-extrabold text-3xl tracking-wider select-none cursor-pointer group z-50 relative">
          <span className="animate-fade-in-left hover:text-blue-600 transition-colors duration-300">
            JUSTICE
          </span>
          <span className="relative inline-block overflow-hidden w-9 h-9">
            <span className="absolute animate-slide-in-right text-white bg-black w-full h-full flex items-center justify-center rounded-md transform transition-transform duration-500 group-hover:rotate-180 shadow-md">
              X
            </span>
          </span>
        </div>


        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => navigate(link.path)}
              className="transition-colors hover:text-blue-600"
            >
              {link.name}
            </button>
          ))}
        </nav>


        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/HelpLine")}
            className="hidden md:flex fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-full shadow-lg transition duration-300 items-center gap-2 hover:scale-105">
            HelpLine
          </button>
          <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>

          <div className="hidden md:block">
            {role && role !== 'guest' ? (
              <button
                onClick={handleLogOut}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all hover:shadow-md">
                <i className="ri-door-open-line"></i>
                <span>Logout</span>
              </button>
            )
              : (<button
                onClick={() => navigate('/Login')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all hover:shadow-md">
                <i className="ri-login-box-line"></i>
                <span>Login</span>
              </button>
              )}
          </div>
        </div>
      </div>


      <div className={`md:hidden absolute top-0 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen py-20 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
        <div className="flex flex-col items-center space-y-6 font-medium text-gray-700 text-lg">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.path)}
              className="hover:text-blue-600 transition-colors"
            >
              {link.name}
            </button>
          ))}

          <div className="h-px w-24 bg-gray-200 my-2"></div>

          {role && role !== 'guest' ? (
            <button
              onClick={() => {
                handleLogOut()
                setIsMenuOpen(false)
              }}
              className="text-red-600 flex items-center space-x-2"
            >
              <i className="ri-door-open-line"></i>
              <span>Logout</span>
            </button>
          ) : (
            <button
              onClick={() => {
                navigate('/Login')
                setIsMenuOpen(false)
              }}
              className="text-blue-600 flex items-center space-x-2">
              <i className="ri-login-box-line"></i>
              <span>Login</span>
            </button>
          )}
          <button onClick={() => navigate("/HelpLine")} className="text-green-600 font-bold flex items-center gap-2">
            HelpLine
          </button>
        </div>
      </div>
    </header>
  )
}