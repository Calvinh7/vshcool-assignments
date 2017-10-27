const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const uuidv4 = require("uuid/v4");
const morgan = require("morgan");
const cors = require("cors")

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/bounty", require("./routes/bountyRoutes"));
app.use(cors())

app.listen(4000, () => {
    console.log("server is running on port 4000")
})
