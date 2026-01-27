import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HowItWorks() {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen text-slate-800 font-sans">
      <div className="bg-slate-900 text-white py-12 border-b-4 border-blue-600">
        <div className="max-w-6xl mx-auto px-6">
          {/* <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            JusticeX
          </h1> */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Public Abuse Reporting Protocol
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Standard Operating Procedure (SOP) for anonymous incident reporting and status tracking via the JusticeX System.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-md mb-12 flex items-start gap-4">
          <div className="text-blue-700 mt-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">
                System Integrity & Privacy
                </h3>
            <p className="text-slate-600 text-sm mt-1">
              This platform operates under a strict <strong>Zero-Knowledge Architecture</strong>. No Personally Identifiable Information (PII) regarding the whistleblower is stored on government servers unless voluntarily provided.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="border border-slate-200 rounded-lg p-8 hover:border-blue-600 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-slate-900 text-white text-sm font-bold px-3 py-1 rounded">STEP 01</span>
              <h2 className="text-xl font-bold text-slate-900">Incident Submission</h2>
            </div>
            <p className="text-slate-600 mb-4">
              Citizens file a report selecting the appropriate category (e.g., Trafficking, Domestic Violence). The system automatically captures geo-coordinates for precise jurisdictional routing.
            </p>
            <ul className="text-sm text-slate-500 list-disc list-inside bg-slate-50 p-3 rounded">
              <li>256-bit Encryption</li>
              <li>No IP Logging</li>
            </ul>
          </div>


          <div className="border border-slate-200 rounded-lg p-8 hover:border-blue-600 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-slate-900 text-white text-sm font-bold px-3 py-1 rounded">STEP 02</span>
              <h2 className="text-xl font-bold text-slate-900">Issuance of JX-Ticket</h2>
            </div>
            <p className="text-slate-600 mb-4">
              Upon successful submission, the system generates a unique, non-sequential <strong>Reference ID (e.g., JX-8492)</strong>. This ID is the only key to access the report record.
            </p>
            <div className="text-sm border-l-4 border-amber-500 bg-amber-50 p-3 text-amber-800">
              <strong>Notice:</strong> This ID cannot be recovered if lost.
            </div>
          </div>

          
          <div className="border border-slate-200 rounded-lg p-8 hover:border-blue-600 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-slate-900 text-white text-sm font-bold px-3 py-1 rounded">STEP 03</span>
              <h2 className="text-xl font-bold text-slate-900">Authority Routing</h2>
            </div>
            <p className="text-slate-600">
              The report is instantly classified and routed to the dashboard of the relevant nodal agency (Police, NGO, or Child Welfare Committee) based on the location and category provided.
            </p>
          </div>


          <div className="border border-slate-200 rounded-lg p-8 hover:border-blue-600 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-slate-900 text-white text-sm font-bold px-3 py-1 rounded">STEP 04</span>
              <h2 className="text-xl font-bold text-slate-900">Public Status Tracking</h2>
            </div>
            <p className="text-slate-600">
              Citizens can use the "Track Status" portal to view the current standing of their report (Pending, Under Investigation, Resolved) without logging in.
            </p>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-10">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Proceed to Application</h3>
              <p className="text-slate-600">Select an action to continue.</p>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/track-status')}
                className="px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded hover:bg-slate-50 transition">
                Track Existing Case
              </button>
              <button
                onClick={() => navigate('/report')}
                className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded shadow-sm transition">
                File New Report
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}