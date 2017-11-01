const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 1313
const memoryRoutes = require("./routes/memory")

mongoose.connect("mongodb://localhost/disregarded-SW-memories", (err) => {
    console.log("connected to the database");
});

app.use(bodyParser.json());
app.use("/memory", require("./routes/memory"));

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
}) 
