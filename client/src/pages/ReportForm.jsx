import React, { useState } from 'react';
import { axiosInstance } from '../library/Api'; 
import { useNavigate } from 'react-router-dom';

const BackgroundWrapper = ({ children }) => (
  <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 relative overflow-hidden font-sans isolate">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none grayscale -z-10">
          <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="Watermark" 
              className="w-[500px]"
          />
      </div>
      <div className="relative z-50">
        {children}
      </div>
  </div>
)


export default function ReportingForm() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: '', 
    date: '',
    time: '',
    anonymous: '',
    contact: '',
    latitude: null,
    longitude: null
  })

  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [successId, setSuccessId] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleImageUpload = (e) => {
    setFile(e.target.files[0])
  };

  const handleImageRemoval = () => {
    setFile(null)
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(

       async (position) => {

          setFormData((prev) => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }))
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
            const data = await response.json()

            if (data && data.display_name){
                setFormData((prev) => ({
                    ...prev,
                    location: data.display_name
                }))
                alert("Location successfully auto filled. You can edit it if you want.")
            }
          } catch (error) {
            console.error("Error fetching address",error)
            alert("GPS coordinates captured, but could not find text address. Please type it manually.")
          }
        //   alert("Location coordinates captured.") 
        },
        (error) => {
          console.error(error);
          alert("Could not fetch location. Please ensure GPS is enabled.")
        }
      )

    } else {
      alert("Geolocation is not supported by this browser.")
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
        const combinedDate = new Date(`${formData.date}T${formData.time}`)
      
      const payload = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        address: formData.location,
        latitude: formData.latitude,
        longitude: formData.longitude,
        incidentDate: combinedDate.toISOString(),
        anonymous: formData.anonymous === 'yes', 
        contact: formData.contact
      };

      const response = await axiosInstance.post('/reports', payload)
      setSuccessId(response.data.reportId)
      
    } catch (error) {
      console.error('Error submitting report:', error)
      const errorMsg = error.response?.data?.error || "Something went wrong."
      alert(errorMsg)
    } finally {
      setLoading(false)
    }
  }

  if (successId) {
    return (
      <BackgroundWrapper>
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-sm shadow-xl text-center border-t-4 border-green-600 relative z-50">
            <div className="flex justify-center mb-6">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                    alt="Emblem" 
                    className="w-16 h-auto"/>
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide mb-2">Acknowledgement of Receipt</h2>
            <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
            
            <p className="text-slate-600 mb-8">
                Your incident report has been securely transmitted to the National Grievance Database.
            </p>
            
            <div className="bg-slate-50 p-6 border border-slate-300 mb-8 max-w-md mx-auto relative">
                <div className="absolute top-0 left-0 bg-slate-200 text-slate-600 text-[10px] px-2 py-0.5 uppercase font-bold tracking-wider">
                    Official Reference
                </div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2 mt-2">Generated JX-ID</p>
                <div className="text-3xl font-mono font-bold text-slate-900 select-all tracking-widest">
                    {successId}
                </div>
                <p className="text-[10px] text-red-600 mt-2 font-semibold uppercase">
                    * Preservation of this ID is mandatory for future correspondence
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    onClick={() => navigate('/track-status')}
                    className="bg-blue-900 text-white px-8 py-3 rounded-sm hover:bg-blue-800 font-semibold shadow-sm text-sm uppercase tracking-wide transition-all cursor-pointer">
                    Check Status
                </button>
                <button 
                    onClick={() => window.location.reload()}
                    className="bg-white text-slate-800 border border-slate-300 px-8 py-3 rounded-sm hover:bg-slate-50 font-semibold text-sm uppercase tracking-wide transition-colors cursor-pointer">
                    File New Report
                </button>
            </div>
            
            <div className="mt-8 text-[10px] text-slate-400 uppercase">
                System Generated Response • Digital India Initiative
            </div>
        </div>
      </BackgroundWrapper>
    )
  }

  return (
    <BackgroundWrapper>
        <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-xl border border-slate-200 relative z-50">
        
        <div className="bg-slate-900 p-4 border-b-4 border-orange-500 flex items-center gap-4">
            <div className="bg-white p-1 rounded-sm">
                 <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                    alt="Govt Logo" 
                    className="w-10 h-auto"/>
            </div>
            <div>
                <h2 className="text-white text-lg font-bold uppercase tracking-wider leading-none">Incident Reporting Portal</h2>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest mt-1">Ministry of Public Safety • Govt. of India</p>
            </div>
        </div>

        <div className="p-8 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Title of Incident <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Subject / Title"
                        required
                        className="w-full border-b-2 border-slate-200 bg-slate-50 p-3 text-slate-900 focus:outline-none focus:border-blue-900 transition-colors rounded-t-sm"/>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Category of Incident <span className="text-red-600">*</span>
                    </label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full border-b-2 border-slate-200 bg-slate-50 p-3 text-slate-900 focus:outline-none focus:border-blue-900 transition-colors rounded-t-sm">

                        <option value="">Select Category of Incident</option>
                        <option value="Child Abuse">Child Abuse</option>
                        <option value="Drug Activity">Drug Activity</option>
                        <option value="Domestic Violence">Domestic Violence</option>
                        <option value="Sexual Harassment">Sexual Harassment</option>
                        <option value="Human Trafficking">Human Trafficking</option>
                        <option value="Cyber Bullying">Cyber Bullying</option>
                        <option value="Robbery">Robbery</option>
                        <option value="Other">Other</option>

                    </select>
                </div>
            </div>
        
            <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Detailed Statement <span className="text-red-600">*</span>
                </label>
                <textarea
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Provide factual details of the incident..."
                    className="w-full border-2 border-slate-200 bg-slate-50 p-3 text-slate-900 focus:outline-none focus:border-blue-900 transition-colors rounded-sm"></textarea>
            </div>

            <div className="bg-blue-50 p-4 border border-blue-100 rounded-sm">
                <label className="block text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">
                    Location of Incident <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-2 mb-3">
                    <button 
                        type="button" 
                        onClick={getLocation}
                        className="bg-blue-900 text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wide hover:bg-blue-800 flex items-center gap-2 cursor-pointer z-50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        Fetch Geo-Coordinates
                    </button>
                    <span className="text-xs font-mono self-center text-slate-600 bg-white px-2 py-1 border border-slate-200">
                        {formData.latitude ? `LAT: ${formData.latitude.toFixed(4)} | LONG: ${formData.longitude.toFixed(4)}` : "GPS DATA: NOT CAPTURED"}
                    </span>
                </div>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Physical Address / Landmark"
                    required
                    className="w-full border border-slate-300 p-2 text-sm focus:outline-none focus:border-blue-900"/>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Date of Occurrence <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full border-b-2 border-slate-200 bg-slate-50 p-2 text-slate-900 focus:outline-none focus:border-blue-900"/>
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Time of Occurrence <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full border-b-2 border-slate-200 bg-slate-50 p-2 text-slate-900 focus:outline-none focus:border-blue-900"/>
                </div>
            </div>

            <div className="border-2 border-dashed border-slate-300 p-4 bg-slate-50 text-center">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Evidence Upload (Optional)
                </label>
                <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleImageUpload}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-blue-800 cursor-pointer"
                />
                {file && (
                    <button 
                        type="button" 
                        onClick={handleImageRemoval} 
                        className="text-red-600 text-xs font-bold mt-2 uppercase tracking-wide hover:underline cursor-pointer">
                        [ Remove Attachment ]
                    </button>
                )}
            </div>

            <div className="bg-orange-50 p-4 border border-orange-200 rounded-sm">
                <label className="block text-xs font-bold text-orange-900 uppercase tracking-wider mb-2">
                    Privacy Protocol <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select
                        name="anonymous"
                        value={formData.anonymous}
                        onChange={handleChange}
                        required
                        className="w-full border border-orange-200 bg-white p-2 text-sm focus:outline-none focus:border-orange-500">
                        <option value="">Select Preference</option>
                        <option value="yes">Remain Anonymous (Protected)</option>
                        <option value="no">Reveal Identity</option>
                    </select>

                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder={formData.anonymous === 'yes' ? "Contact Hidden (Admin Access Only)" : "Email or Phone Number"}
                        className="w-full border border-orange-200 bg-white p-2 text-sm focus:outline-none focus:border-orange-500"/>
                </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full text-white font-bold py-4 px-4 rounded-sm uppercase tracking-widest shadow-lg transition-all cursor-pointer ${
                        loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800'
                    }`}
                >
                    {loading ? 'Processing Submission...' : 'Submit Official Report'}
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-3">
                    By submitting this form, you declare that the information provided is true to the best of your knowledge. 
                    False reporting is a punishable offense.
                </p>
            </div>
        </div>
        </form>
    </BackgroundWrapper>
  )
}


//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 mt-10">
//       <h2 className="text-2xl font-bold mb-4 text-center">Report an Incident</h2>

//       <div>
//         <label className="block font-semibold mb-1">Report Title</label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Brief title (e.g., Theft at Market)"
//           required
//           className="w-full border border-gray-300 p-2 rounded"
//         />
//       </div>

//       <div>
//         <label className="block font-semibold mb-1">Category of Incident</label>
//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           required
//           className="w-full border border-gray-300 p-2 rounded"
//         >
//           <option value="">Select a Category</option>
//           <option value="Child Abuse">Child Abuse</option>
//           <option value="Drug Activity">Drug Activity</option>
//           <option value="Domestic Violence">Domestic Violence</option>
//           <option value="Sexual Harassment">Sexual Harassment</option>
//           <option value="Human Trafficking">Human Trafficking</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>
  
//       <div>
//         <label className="block font-semibold mb-1">Incident Description</label>
//         <textarea
//           name="description"
//           required
//           value={formData.description}
//           onChange={handleChange}
//           rows="5"
//           placeholder="Describe what happened in detail..."
//           className="w-full border border-gray-300 p-2 rounded"
//         ></textarea>
//       </div>

//       <div>
//         <label className="block font-semibold mb-1">Location of Incident</label>
//         <div className="flex gap-2 mb-2">
//             <button 
//                 type="button" 
//                 onClick={getLocation}
//                 className="bg-gray-200 hover:bg-gray-300 text-black px-3 py-1 rounded text-sm transition-colors">
//                 Get Current GPS Location
//             </button>
//             <span className="text-sm text-gray-500 self-center">
//                 {formData.latitude ? "Coordinates Set" : "Coordinates missing"}
//             </span>
//         </div>
//         <input
//           type="text"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           placeholder="Enter address manually (e.g., MG Road, Kerala)"
//           required
//           className="w-full border border-gray-300 p-2 rounded"
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block font-semibold mb-1">Date</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1">Time</label>
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block font-semibold mb-1">Upload Photo/Video (optional)</label>
//         <input
//           type="file"
//           accept="image/*,video/*"
//           onChange={handleImageUpload}
//           className="block w-full mt-1"
//         />
//         {file && (
//             <button 
//                 type="button" 
//                 onClick={handleImageRemoval} 
//                 className="text-red-600 text-sm mt-1 underline">
//                 Remove file
//             </button>
//         )}
//       </div>

//       <div>
//         <label className="block font-semibold mb-1">Do you want to remain anonymous?</label>
//         <select
//           name="anonymous"
//           value={formData.anonymous}
//           onChange={handleChange}
//           required
//           className="w-full border border-gray-300 p-2 rounded"
//         >
//           <option value="">Choose</option>
//           <option value="yes">Yes</option>
//           <option value="no">No</option>
//         </select>
//       </div>

//       <div>
//         <label className="block font-semibold mb-1">Your Contact (Optional)</label>
//         <input
//           type="text"
//           name="contact"
//           value={formData.contact}
//           onChange={handleChange}
//           placeholder={formData.anonymous === 'yes' ? "Hidden from public (Admin only)" : "Email or Phone"}
//           className="w-full border border-gray-300 p-2 rounded"
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className={`w-full text-white font-semibold py-2 px-4 rounded ${loading ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'}`}
//       >
//         {loading ? 'Submitting...' : 'Report Now'}
//       </button>
//     </form>
//   );
// }