const express = require("express");
const tacoRoutes = express.Router();

tacoRoutes.get("/tacos", (req, res) => {
    res.send("GET tacos");
})

tacoRoutes.get("/tacos/:id", (req, res) => {
    res.send("GET one taco");
})


tacoRoutes.post("/tacos/:id", (req, res) => {
    res.send("POST tacos");
})

tacoRoutes.put("/tacos/:id", (req, res) => {
    res.send("PUT tacos");
})

tacoRoutes.delete("/tacos/:id", (req, res) => {
    res.send("DELETE tacos");
})


module.exports = tacoRoutes;
