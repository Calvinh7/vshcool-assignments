const express = require('express');
const bountyRoutes = express.Router();

let bounties = [
    {name: "revan", living: true, bounty: 1000000000, allignment: "unkown", id: "59fc8e20-09d2-475d-ae9d-d9dcb6e548b2"},
    {name: "malak", living: true, bounty: 0, allignment: "dark", id: "2b312967-3be4-4aed-a486-3cbadcfac7c5"}
]

bountyRoutes.get('/', (req, res) => {
    res.send("GET bounty");
});

bountyRoutes.get('/:id', (req, res) => {
    res.send("GET one bounty");
});

bountyRoutes.post('/', (req, res) => {
    console.log(req.body)
    res.send("POST bounty");
});

bountyRoutes.put('/:id', (req, res) => {
    res.send("PUT bounty");
});

bountyRoutes.delete('/bounty/:id', (req, res) => {
    res.send("DELETE bounty");
});

module.exports = bountyRoutes
