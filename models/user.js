const mongoose = require("mongoose")

const userSchema = new mongoose.model({
    name: {
        type: String
    },
    email: {
        type: String
    }
})