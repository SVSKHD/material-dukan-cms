const mongoose = require("mongoose")
const productSchema = new mongoose.model({
    title: {
        type: String,
        unique: true
    },
    subtitle: {
        type: String
    },
    description: {
        type: String,
    },
    slug: {
        type: String,
        unique: true
    },
    quantity: {
        type: Number
    },
    notes: {
        type: String
    },
    price: {
        type: Number
    },
    marketPrice: {
        type: Number
    }
})