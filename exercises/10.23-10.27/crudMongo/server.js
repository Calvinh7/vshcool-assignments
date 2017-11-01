const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 6060

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});
