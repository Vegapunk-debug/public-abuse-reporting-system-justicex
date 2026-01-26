require('dotenv').config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./library/db")
const reportRouter = require("./routes/reportRouter")

const app = express()
const PORT = process.env.PORT || 3000

// app.use(cors())
app.use(cors({
  origin: [process.env.CLIENT_URL,
    "http://localhost:5173"],
  credentials: true
}))

app.use(express.json())

app.use('/api/reports', reportRouter)

// app.get("/", (req, res) => {
//     res.send("JusticeX API is running...")
// })


const serverConnection = async() => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.error("Error connecting to MongoDB", error)
    }
}
serverConnection()