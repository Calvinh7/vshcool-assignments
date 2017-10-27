const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000
const utils = require("./utils")

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(utils.explosion)

app.get("/", (req, res) => {
    console.log(req.explosion);
    res.send("Success")
})

// app.post("/", (req, res) => {
//     console.log(req.body);
//     res.send("Success");
// })

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
