const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/createlead", (req, res) => {

    console.log("Received Data:");

    console.log(req.body);

    res.json({
        success: true,
        message: "Data received successfully"
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});