const express = require("express")
const router = express.Router()

const { addReport, getReport } = require("../controllers/reportController")

router.post("/", addReport)
router.get("/", getReport)

module.exports = router