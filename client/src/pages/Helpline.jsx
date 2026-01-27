import React from 'react';

export default function HelpLine() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="bg-blue-50 border-l-4 border-blue-800 p-4 mb-10 flex items-start gap-3 shadow-sm">
          <svg className="w-6 h-6 text-blue-800 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h2 className="text-sm font-bold text-blue-900 uppercase">Directory Information</h2>
            <p className="text-sm text-blue-800 mt-1">
              The nodal agencies listed below are authorized to handle immediate distress calls. 
              <span className="font-semibold"> Tap on any number to dial immediately.</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 uppercase">Police Control</h3>
                  <p className="text-xs text-slate-500 font-mono">CODE: L-ENF</p>
                </div>
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-red-50 transition-colors">
                  <svg className="w-8 h-8 text-slate-700 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              
              <a href="tel:100" className="block group/link">
                <div className="text-4xl font-black text-slate-900 tracking-tighter group-hover/link:text-red-600 transition-colors">100</div>
                <div className="flex items-center gap-2 mt-2">
                    <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-1 rounded border border-red-200 group-hover/link:bg-red-600 group-hover/link:text-white transition-colors">
                     CALL NOW
                    </span>
                    <span className="text-xs text-gray-400">24/7 • Immediate</span>
                </div>
              </a>

            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 uppercase">Ambulance</h3>
                  <p className="text-xs text-slate-500 font-mono">CODE: MED-ER</p>
                </div>
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                   <svg className="w-8 h-8 text-slate-700 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                   </svg>
                </div>
              </div>
              
              <a href="tel:102" className="block group/link">
                <div className="text-4xl font-black text-slate-900 tracking-tighter group-hover/link:text-blue-600 transition-colors">102</div>
                <div className="flex items-center gap-2 mt-2">
                    <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded border border-blue-200 group-hover/link:bg-blue-600 group-hover/link:text-white transition-colors">
                        CALL NOW
                    </span>
                    <span className="text-xs text-gray-400">Trauma Unit</span>
                </div>
              </a>

            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 uppercase">Fire / Disaster</h3>
                  <p className="text-xs text-slate-500 font-mono">CODE: FIRE-OPS</p>
                </div>
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-yellow-50 transition-colors">
                   <svg className="w-8 h-8 text-slate-700 group-hover:text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                   </svg>
                </div>
              </div>
              
              <a href="tel:101" className="block group/link">
                <div className="text-4xl font-black text-slate-900 tracking-tighter group-hover/link:text-yellow-600 transition-colors">101</div>
                <div className="flex items-center gap-2 mt-2">
                    <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded border border-yellow-200 group-hover/link:bg-yellow-600 group-hover/link:text-white transition-colors">
                        CALL NOW
                    </span>
                    <span className="text-xs text-gray-400">Rapid Response</span>
                </div>
              </a>

            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 shadow-sm rounded-sm">
          <div className="bg-slate-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 uppercase tracking-wide text-sm">Specific Grievance Redressal Units</h3>
            <span className="text-[10px] bg-slate-200 px-2 py-1 rounded text-slate-600 font-mono">STATUS: ACTIVE</span>
          </div>
          
          <div className="divide-y divide-gray-100">
            
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center hover:bg-slate-50 transition-colors group">
              <div className="sm:col-span-1">
                 <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 </div>
              </div>
              <div className="sm:col-span-8">
                <h4 className="text-base font-bold text-slate-900">National Child Helpline (POCSO)</h4>
                <p className="text-sm text-slate-500 mt-1">For reporting child abuse, abandonment, or distress under POCSO Act.</p>
              </div>
              <div className="sm:col-span-3 text-right">
       
                <a href="tel:1098" className="inline-block text-xl font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    1098
                </a>
              </div>
            </div>

            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center hover:bg-slate-50 transition-colors group">
              <div className="sm:col-span-1">
                 <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                 </div>
              </div>
              <div className="sm:col-span-8">
                <h4 className="text-base font-bold text-slate-900">Women's Domestic Abuse Helpline</h4>
                <p className="text-sm text-slate-500 mt-1">24/7 Support for domestic violence and harassment cases.</p>
              </div>
              <div className="sm:col-span-3 text-right">
  
                <a href="tel:1091" className="inline-block text-xl font-bold text-pink-700 bg-pink-50 px-3 py-1 rounded border border-pink-100 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                1091
                </a>
              </div>
            </div>

            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center hover:bg-slate-50 transition-colors group">
              <div className="sm:col-span-1">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                 </div>
              </div>
              <div className="sm:col-span-8">
                <h4 className="text-base font-bold text-slate-900">National Cyber Crime Reporting</h4>
                <p className="text-sm text-slate-500 mt-1">For online harassment, financial fraud, and digital threats.</p>
              </div>
              <div className="sm:col-span-3 text-right">
                <a href="tel:1930" className="inline-block text-xl font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded border border-slate-200 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                    1930
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-slate-400 border-t border-gray-200 pt-6">
          <p>© 2026 National Emergency Registry. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>System Operational</span>
          </div>
        </div>

      </div>
    </div>
  );
}