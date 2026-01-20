// Here i have created a separate file to connect MongoDB database for better code organization and maintainability    

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.error("Error connecting to MongoDB", error)
    }
}       

module.exports = connectDB