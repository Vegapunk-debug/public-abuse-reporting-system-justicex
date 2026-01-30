import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Invalid Credentials')
      }

      localStorage.setItem('token', data.token)
      navigate('/admin/dashboard') 
      
    } catch (err) {
      setError('Access Denied: You do not have permission.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      
      <div className="w-full max-w-md bg-white rounded shadow-2xl overflow-hidden">
        
        <div className="bg-red-800 p-4 text-center">
            <h2 className="text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                Restricted Access
            </h2>
            <p className="text-red-200 text-[10px] uppercase mt-1">Authorized Departmental Personnel Only</p>
        </div>

        <div className="p-8">

            <div className="bg-blue-50 border border-blue-200 p-4 mb-6 rounded text-center">
                <p className="text-blue-900 text-xs font-bold uppercase mb-2">Public User?</p>
                <p className="text-slate-600 text-xs mb-3">You do not need to login to file a report.</p>
                <div className="flex gap-2 justify-center">
                    <button 
                        onClick={() => navigate('/report')}
                        className="text-[10px] bg-white border border-blue-300 text-blue-800 hover:bg-blue-100 px-3 py-1 rounded uppercase font-bold transition-colors cursor-pointer">
                        File Complaint
                    </button>
                    <button 
                        onClick={() => navigate('/track-status')}
                        className="text-[10px] bg-white border border-blue-300 text-blue-800 hover:bg-blue-100 px-3 py-1 rounded uppercase font-bold transition-colors cursor-pointer">
                        Track Status
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase mb-1">Official Email ID</label>
                    <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-slate-300 p-3 text-sm focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 rounded-sm"
                        placeholder="officer@gov.in"
                    />
                </div>

                <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase mb-1">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-slate-300 p-3 text-sm focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 rounded-sm"
                        placeholder="••••••••"
                    />
                </div>

                {error && (
                    <div className="bg-red-50 text-red-700 text-xs p-3 border border-red-200 text-center">
                        {error}
                    </div>
                )}

                <button 
                    type="submit" 
                    disabled={loading}
                    className={`w-full bg-slate-900 text-white font-bold py-3 uppercase text-xs tracking-wider hover:bg-slate-800 transition-colors cursor-pointer ${loading ? 'opacity-70' : ''}`}
                >
                    {loading ? 'Verifying Credentials...' : 'Secure Login'}
                </button>

            </form>

            <div className="mt-6 text-center border-t border-slate-100 pt-4">
                <p className="text-[10px] text-slate-400 uppercase">
                    Unauthorized access is a punishable offense.
                    <br/>IP Address is being logged.
                </p>
            </div>

        </div>
      </div>
    </div>
  )
}