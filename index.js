const express = require("express");
const mongoose = require("mongoose");
const bodyparse = require("body-parser");
const SERVER_PORT = process.env.PORT || 6969
const app = express();
const userRoutes = require("./routes/user");
const offerRoutes = require("./routes/offer");
mongoose.connect("mongodb://localhost:27017/user").then(()=> {
    console.log("connected to db");
}).catch(()=> {
    console.log("conecting to db is failed");
});
app.use(bodyparse.json());
app.listen(SERVER_PORT, ()=> {
    console.log("server running at" + " " + SERVER_PORT)
});
app.use("/user", userRoutes);
app.use("/offer", offerRoutes);