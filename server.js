// require("dotenv").config()
// const app = require("./src/app");
// const connectToDB = require("./src/config/database");

// connectToDB();

// app.listen(3000, () => {
//     console.log("Running...."); 
// });


require("dotenv").config()
const app = require("./src/app");
const connectToDB = require("./src/config/database");

connectToDB();

// For local dev
if (process.env.NODE_ENV !== "production") {
    app.listen(3000, () => console.log("Running on port 3000"));
}

module.exports = app;
