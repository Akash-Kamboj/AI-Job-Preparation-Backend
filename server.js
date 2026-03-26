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

connectToDB();

// only for local
if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () => {
    console.log("Running on port 3000 🚀");
  });
}

// required for Vercel
module.exports = app;