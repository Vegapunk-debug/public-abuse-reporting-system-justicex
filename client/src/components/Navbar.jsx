import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  const role = localStorage.getItem('data');

  const handleLogOut = () => {
    localStorage.removeItem('data');
    window.location.reload();
    navigate('/Login');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div onClick={() => navigate('/')} className="flex items-center space-x-3 text-black font-extrabold text-3xl tracking-wider select-none cursor-pointer group">
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
          <button onClick={() => navigate('/')} className="hover:text-blue-600 transition-colors">
            Home
          </button>
          {/* <button onClick={() => navigate('/report')} className="hover:text-blue-600 flex items-center gap-1 transition-colors">
            Report
          </button> */}
          <button onClick={() => navigate('/track-status')} className="hover:text-blue-600 transition-colors">
            Track Status
          </button>
          <button onClick={() => navigate('/Blogs')} className="hover:text-blue-600 transition-colors">
            Blogs
          </button>
          <button onClick={() => navigate('/Gallery')} className="hover:text-blue-600 transition-colors">
            Gallery
          </button>
          <button onClick={() => navigate('/About')} className="hover:text-blue-600 transition-colors">
            About
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <button onClick={() => navigate("/HelpLine")} className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-full shadow-lg transition duration-300 flex items-center gap-2 hover:scale-105">
            📞 HelpLine
          </button>


          {role && role !== 'guest' ?
            <button
              onClick={handleLogOut}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all hover:shadow-md">
              <i className="ri-door-open-line"></i>
              <span>Logout</span>
            </button> : 
            <button onClick={() => navigate('/Login')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all hover:shadow-md">
              <i className="ri-login-box-line"></i>
              <span>Login</span>
            </button>
          }
        </div>
      </div>
    </header>
  );
}