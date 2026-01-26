const express = require("express")
const router = express.Router()

const { addReport, getReport, getReportStatus } = require("../controllers/reportController")

router.post("/", addReport)
router.get("/", getReport)
router.get("/:id", getReportStatus)

module.exports = router