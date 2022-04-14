const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({ Token: true }
    ));
app.use(cors());
// app.use("/", function(req,res) {
//     req.send("hi");
// });

app.use(express.static("public"));

const port = 3000;

app.listen(port, () => 
    console.log(`Node js Server ruuning at http://${port}/`
));
