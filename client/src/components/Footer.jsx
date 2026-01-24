import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111113] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
        
        <div className="md:col-span-2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Speak Up.<br />
            Stay Safe.<br />
            Stop Crime.
          </h2>
          <p className="text-gray-400 mb-6">
            Empowering communities to report crimes safely, anonymously, and securely.
          </p>
          <div className="flex space-x-4">
            <a href="#" target="_blank" className="text-gray-400 hover:text-white">
              <i className="ri-facebook-fill text-xl"></i>
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-white">
              <i className="ri-twitter-x-fill text-xl"></i>
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-white">
              <i className="ri-instagram-fill text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/rohit-nair-p-7a535b251" 
            target="_blank" 
            className="text-gray-400 hover:text-white">
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/Report" className="hover:text-white">Report Incident</a></li>
            <li><a href="/Status" className="hover:text-white">Check Report Status</a></li>
            <li><a href="/Helpline" className="hover:text-white">Helpline</a></li>
            <li><a href="/About" className="hover:text-white">About Us</a></li>
            <li><a href="/HowItWorks" className="hover:text-white">How It Works</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Disclaimer</a></li>
            <li><a href="#" className="hover:text-white">Data Protection</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="flex items-start gap-4 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 
                1.343-3 3 1.343 3 3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 22s8-4.5 8-11a8 8 0 
                10-16 0c0 6.5 8 11 8 11z" />
            </svg>
            <p className="text-gray-400">
              Pathanamthitta<br />
              Kerala, India
            </p>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a3 3 0 003.22 0L22 8M5 
                19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 
                2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:support@gmail.com" className="hover:underline text-gray-400">
              rohitnair@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h3 className="text-lg font-semibold mb-4">Partner Organizations</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-3 rounded flex items-center justify-center">
            <i className="ri-government-line text-gray-400 mr-2"></i>
            <span className="text-sm text-gray-400">Police Dept.</span>
          </div>
          <div className="bg-gray-800 p-3 rounded flex items-center justify-center">
            <i className="ri-heart-line text-gray-400 mr-2"></i>
            <span className="text-sm text-gray-400">Child Services</span>
          </div>
          <div className="bg-gray-800 p-3 rounded flex items-center justify-center">
            <i className="ri-medicine-bottle-line text-gray-400 mr-2"></i>
            <span className="text-sm text-gray-400">Drug Enforcement</span>
          </div>
          <div className="bg-gray-800 p-3 rounded flex items-center justify-center">
            <i className="ri-mental-health-line text-gray-400 mr-2"></i>
            <span className="text-sm text-gray-400">Crisis Support</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Certifications</h3>
        <div className="flex flex-wrap gap-4">
          <div className="bg-gray-800 p-3 rounded flex items-center justify-center">
            <i className="ri-lock-line text-gray-400 mr-2"></i>
            <span className="text-sm text-gray-400">SSL Secure</span>
          </div>
          <div className="bg-gray-800 p-3 rounded flex items-center justify-center">
            <i className="ri-shield-check-line text-gray-400 mr-2"></i>
            <span className="text-sm text-gray-400">GDPR Compliant</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm px-6">
        <p>© Copyright 2025. All rights reserved.</p>
        <div className="flex items-center mt-4 md:mt-0">
          <span className="text-gray-400 text-sm mr-2">Protected by:</span>
          <div className="flex space-x-3">
            <i className="ri-lock-fill"></i>
            <i className="ri-shield-check-fill"></i>
            <i className="ri-fingerprint-line"></i>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-500 text-xs px-4">
        JusticeX is committed to ensuring community safety through secure, anonymous crime reporting.
      </div>
    </footer>
  )
}