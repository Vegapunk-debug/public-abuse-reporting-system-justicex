import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../library/Api'
import { Link } from 'react-router-dom'

export default function Reports() {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axiosInstance.get('/reports')
        setReports(res.data)
      } catch (error) {
        console.error("Error fetching reports:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchReports()
  }, [])

  if (loading) return <div className="text-center mt-10">Loading reports...</div>

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Community Reports</h1>
        <Link to="/report" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          + Report Incident
        </Link>
      </div>

      {reports.length === 0 ? (
        <p className="text-gray-500 text-center">No reports found yet.</p>) 
        : 
        (<div className="grid gap-4 md:grid-cols-2">
          {reports.map((report) => (
            <div key={report._id} className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-500">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">{report.title}</h2>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-700">
                  {report.category}
                </span>
              </div>
              
              <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                {report.description}
              </p>

              <div className="mt-4 text-xs text-gray-500 space-y-1">
                <p>{report.location?.address || "Location unavailable"}</p>
                <p>{new Date(report.incidentDate).toLocaleString()}</p>
                <p>{report.anonymous ? "Anonymous Report" : `Reported by: ${report.contact}`}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}