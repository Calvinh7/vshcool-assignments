const express = require("express")
const app = express();

app.get("/tacos", (req, res) => {
    res.send("Hey!");
});



app.listen(8000);
