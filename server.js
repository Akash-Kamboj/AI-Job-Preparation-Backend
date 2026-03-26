// require("dotenv").config()
// const app = require("./src/app");
// const connectToDB = require("./src/config/database");

// connectToDB();

// app.listen(3000, () => {
//     console.log("Running...."); 
// });

require("dotenv").config();

const app = require("./src/app");
const connectToDB = require("./src/config/database");

console.log("ENV CHECK:", process.env.MONGO_URI ? "OK" : "MISSING");

connectToDB();

module.exports = app;