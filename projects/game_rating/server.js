const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
const port = process.env.PORT || 1337;
const gameRoutes = require("./routes/games")

mongoose.connect("mongodb://localhost/games", (err) => {
    console.log("connected to the database");
});

app.use(bodyParser.json());
app.use(cors)
app.use("/games", require("./routes/games"));

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});
