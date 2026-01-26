const Report = require("../models/Report")

exports.addReport = async (req, res) => {
  try {

    console.log("Incoming Form Data:", req.body)

    const {title, category, description, address, latitude, longitude, incidentDate, anonymous, contact } = req.body


    let locationData = {
      type: 'Point',
      coordinates: [0, 0], 
      address: address
    }// My location data

    if (latitude && longitude) {
      locationData.coordinates = [parseFloat(longitude), parseFloat(latitude)]
    }

    const newReport = new Report({
        title, 
        category, 
        description, 
        location: locationData, 
        incidentDate, anonymous, 
        contact: anonymous ? null : contact})

    await newReport.save()

    res.status(201).json({ 
      success: true, 
      message: "Report added successfully", 
      reportId: newReport._id 
    })

  } catch (error) {
    console.error("Error adding report:", error)
    res.status(500).json({ 
      success: false, 
      message: "Server Error: Could not save report (Try Again)", 
      error: error.message 
    })
  }
}

exports.getReport = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 })
    res.status(200).json(reports)
  } catch (error) {
    console.error("Error fetching reports:", error)
    res.status(500).json({ 
      success: false, 
      message: "Server Error: Could not fetch reports (Try Again)" 
    })
  }
}

// module.exports = {
//   addReport,
//   getReport
// }