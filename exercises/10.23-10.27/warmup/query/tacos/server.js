const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const uuid = require("uuid/v4")

const tacoRoutes = require("./routes/tacoRoutes")

app.use(bodyParser.json());

app.use("/tacos", tacoRoutes);
