// const mongoose = require("mongoose")
// const dns = require("dns");

// dns.setServers([
//     '1.1.1.1',
//     '8.8.8.8'
// ])

// async function connectToDB() {

//     try {
//         await mongoose.connect(process.env.MONGO_URI)

//         console.log("Connected to Database")
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// module.exports = connectToDB

const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

let isConnected = false;

async function connectToDB() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDB;