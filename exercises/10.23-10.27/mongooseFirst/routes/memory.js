const express = require("express");
const memoryRoutes = express.Router();
const Memory = require("../models/memory");

memoryRoutes.get("/", (req, res) => {
    Memory.find({}, (err, memories) => {
        if(err) return res.status(500).send(err);
        return res.send(memories);
    });
});

memoryRoutes.post("/", (req, res) => {
    const newMemory = new MemoryModel(req.body);
    newMemory.save((err, brandNewMemory) => {
        if(err) return res.status(500).send(err);
        return res.send(brandNewMemory);
    });
});

module.exports = memoryRoutes;
