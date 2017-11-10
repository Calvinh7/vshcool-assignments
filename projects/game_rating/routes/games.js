const express = require("express");
const gameRoutes = express.Router();
const Game = require("../models/games");

gameRoutes.get("/", (req, res) => {
    Game.find({} , (err, games) => {
        if(err) return res.status(500).send(err);
        return res.send(games);
    })
})

module.exports = gameRoutes;
