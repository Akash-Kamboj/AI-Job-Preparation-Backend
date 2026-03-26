// 

const mongoose = require("mongoose")
const dns = require("dns")

dns.setServers(['1.1.1.1', '8.8.8.8'])

let isConnected = false;

async function connectToDB() {
    if (isConnected) {
        console.log("Using existing DB connection")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
        })
        isConnected = true;
        console.log("Connected to Database")
    } catch (err) {
        console.log("DB connection error:", err.message)
        throw err;
    }
}

module.exports = connectToDB