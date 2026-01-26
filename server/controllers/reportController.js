const Report = require("../models/Report")

const generateReportId = () => {
  const randomNum = Math.floor(100000 + Math.random() * 900000)
  return `JX-${randomNum}`
}

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
    const safeId = generateReportId()

    const newReport = new Report({
        reportId: safeId,
        title, 
        category, 
        description, 
        location: locationData, 
        incidentDate, anonymous, 
        contact: anonymous ? null : contact,
        status: "Pending"
})
        

    await newReport.save()
    console.log("Report Saved:", newReport._id);

    res.status(201).json({ 
      success: true, 
      message: "Report added successfully", 
      reportId: safeId
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

exports.getReportStatus = async (req, res) => {
  try {
    const { id } = req.params

    const report = await Report.findOne({reportId: id})

    if (!report) {
      return res.status(404).json({ error: "Report not found" })
    }

    res.status(200).json({ 
      id: report.reportId,
      title: report.title,
      status: report.status,
      updatedAt: report.createdAt 
    })
  } catch (error) {
    res.status(500).json({ error: "Invalid Report ID" })
  }
}

// module.exports = {
//   addReport,
//   getReport
// }