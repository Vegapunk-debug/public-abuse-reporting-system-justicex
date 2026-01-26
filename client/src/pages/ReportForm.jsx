import React, { useState } from 'react';
import { axiosInstance } from '../library/Api'; 
import { useNavigate } from 'react-router-dom';

export default function ReportingForm() {
  const navigate = useNavigate();
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
  });

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
        (position) => {
          setFormData((prev) => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }));
          alert("Location coordinates captured.") 
        },
        (error) => {
          console.error(error);
          alert("Could not fetch location. Please ensure GPS is enabled.")
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  };
//Workingg........................................
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
      
      console.log('Report submitted:', response.data)
    //   alert("Report submitted successfully.")
    //   navigate('/')
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
      <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-2xl text-center border-t-8 border-green-500 animate-fade-in-up">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Report Submitted!</h2>
        <p className="text-gray-600 mb-6">Your report has been securely recorded.</p>
        
        <div className="bg-blue-50 p-6 rounded-lg border-2 border-dashed border-blue-200 mb-8">
          <p className="text-sm text-blue-600 uppercase font-bold tracking-wider mb-2">Your Tracking ID</p>
          <div className="text-3xl font-mono font-bold text-gray-800 select-all bg-white p-3 rounded shadow-sm">
            {successId}
          </div>
          <p className="text-xs text-red-500 mt-3 font-semibold">
            Please copy and save this ID. You will need it to track your case status.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => navigate('/track-status')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-bold shadow-md transition-transform active:scale-95">
            Track Status Now
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 font-bold transition-colors">
            File Another Report
          </button>
        </div>
      </div>
    );
  }

 
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Report an Incident</h2>

      <div>
        <label className="block font-semibold mb-1">Report Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Brief title (e.g., Theft at Market)"
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Category of Incident</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Select a Category</option>
          <option value="Child Abuse">Child Abuse</option>
          <option value="Drug Activity">Drug Activity</option>
          <option value="Domestic Violence">Domestic Violence</option>
          <option value="Sexual Harassment">Sexual Harassment</option>
          <option value="Human Trafficking">Human Trafficking</option>
          <option value="Other">Other</option>
        </select>
      </div>
  
      <div>
        <label className="block font-semibold mb-1">Incident Description</label>
        <textarea
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          rows="5"
          placeholder="Describe what happened in detail..."
          className="w-full border border-gray-300 p-2 rounded"
        ></textarea>
      </div>

      <div>
        <label className="block font-semibold mb-1">Location of Incident</label>
        <div className="flex gap-2 mb-2">
            <button 
                type="button" 
                onClick={getLocation}
                className="bg-gray-200 hover:bg-gray-300 text-black px-3 py-1 rounded text-sm transition-colors">
                Get Current GPS Location
            </button>
            <span className="text-sm text-gray-500 self-center">
                {formData.latitude ? "✅ Coordinates Set" : "Coordinates missing"}
            </span>
        </div>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter address manually (e.g., MG Road, Kerala)"
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Upload Photo/Video (optional)</label>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleImageUpload}
          className="block w-full mt-1"
        />
        {file && (
            <button 
                type="button" 
                onClick={handleImageRemoval} 
                className="text-red-600 text-sm mt-1 underline">
                Remove file
            </button>
        )}
      </div>

      <div>
        <label className="block font-semibold mb-1">Do you want to remain anonymous?</label>
        <select
          name="anonymous"
          value={formData.anonymous}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Choose</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1">Your Contact (Optional)</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder={formData.anonymous === 'yes' ? "Hidden from public (Admin only)" : "Email or Phone"}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full text-white font-semibold py-2 px-4 rounded ${loading ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'}`}
      >
        {loading ? 'Submitting...' : 'Report Now'}
      </button>
    </form>
  );
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