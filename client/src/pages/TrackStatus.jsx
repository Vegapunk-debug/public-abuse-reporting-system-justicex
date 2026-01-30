import React, { useState } from 'react'
import { axiosInstance } from '../library/Api'

export default function TrackStatus() {
  const [reportId, setReportId] = useState('')
  const [statusResult, setStatusResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const checkStatus = async (e) => {
    
    e.preventDefault()
    if (!reportId.trim()) return

    setLoading(true)
    setError('')
    setStatusResult(null)

    try {
      const res = await axiosInstance.get(`/reports/${reportId.trim()}`)
      setStatusResult(res.data)
    } catch (err) {
      console.error(err)
      setError("Report ID not found. Please check and try again.")
    } finally {
      setLoading(false)
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved': return 'bg-green-100 text-green-800 border-green-200'
      case 'Rejected': return 'bg-red-100 text-red-800 border-red-200'
      case 'Investigating': return 'bg-blue-100 text-blue-800 border-blue-200'
      default: return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    }
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        
        <div className="bg-gray-900 p-6 text-center">
          <h2 className="text-2xl font-bold text-white">Track Your Report</h2>
          <p className="text-gray-400 text-sm mt-2">Enter your Report ID to check progress</p>
        </div>

        <div className="p-8">
          <form onSubmit={checkStatus} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Report Reference ID</label>
              <input
                type="text"
                placeholder="e.g., 65b2c..."
                value={reportId}
                onChange={(e) => setReportId(e.target.value)}
                className="w-full border-2 border-gray-200 p-3 rounded-lg text-lg text-center focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-bold transition-transform active:scale-95 shadow-md disabled:opacity-50"
              disabled={loading}>
              {loading ? "Searching..." : "Check Status"}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200 text-center animate-pulse">
              ⚠️ {error}
            </div>
          )}

          {statusResult && (
            <div className="mt-8 border-t pt-6 animate-fade-in-up">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{statusResult.title}</h3>
              
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                <span className="text-gray-600 font-medium text-sm">Current Status:</span>
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold border ${getStatusColor(statusResult.status)}`}>
                  {statusResult.status}
                </span>
              </div>
              
              <p className="mt-4 text-xs text-gray-400 text-center">
                Last Updated: {new Date(statusResult.updatedAt).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}