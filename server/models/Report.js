const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: [100, 'Title must be less than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [5000]
    },
    category: {
        type: String,
        required: [true, 'Please add a category'],
        enum: [
            'Child Abuse', 
            'Drug Activity', 
            'Domestic Violence', 
            'Sexual Harassment', 
            'Human Trafficking', 
            'Other'
        ]
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },
    imageUrl: {
        type: String,
        default: 'no-photo.jpg'
    },
    contact: {
        type: String,
        trim: true
    },
    anonymous: {
        type: Boolean,
        required: [true, 'Please specify if you want to remain anonymous'],
        default: false
    },
    incidentDate: {
        type: Date,
        required: [true, 'Please specify when the incident occurred']
    },
    status: {
        type: String,
        enum: ['Pending', 'Investigating', 'Resolved', 'Rejected'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Report", ReportSchema)
