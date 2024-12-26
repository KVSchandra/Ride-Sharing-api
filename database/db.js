const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

const connectToDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database has been connected successfully!");
    } catch (err) {
        console.log("Failed to connect db", err)
    }
}

module.exports = connectToDB