const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

mongoose
    .connect(
        process.env.MONGO_URL
    )
    .then(()=>console.log("DB Connection Successfull"))
    .catch((err)=> {
        console.log(err);
    });

// app.get("api/test", () => {
    // mistake - need a slash before api
    
// app.get("/api/test", () => {
//     console.log("test is successfull");
// });
    // mistake -we should not provide all the endpoints here 

app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});