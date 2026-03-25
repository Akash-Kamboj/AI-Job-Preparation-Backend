// require("dotenv").config()
// const app = require("../src/app");
// const connectToDB = require("../src/config/database");

// connectToDB();

// app.listen(3000, () => {
//     console.log("Running...."); 
// });

const serverless = require("serverless-http");
require("dotenv").config();

const app = require("../src/app");
const connectToDB = require("../src/config/database");

let isConnected = false;

async function connectDBOnce() {
  if (!isConnected) {
    await connectToDB();
    isConnected = true;
    console.log("DB Connected");
  }
}

module.exports = async (req, res) => {
  try {
    await connectDBOnce();
    return serverless(app)(req, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};