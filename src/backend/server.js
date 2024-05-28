console.clear();
const express=require("express");
const connecDB = require("./config/dbConnect");
const app = express();
require('dotenv').config();


// connect to DB
connecDB();

// routes 
app.use(express.json());
app.use("/user", require("./routes/user"));


// server
const PORT=process.env.PORT;
app.listen(PORT,(err)=> err ?
console.log(err) : console.log( `server is running on ${PORT}`));