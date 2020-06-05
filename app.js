const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const path = require("path");

app.set("view engine", "ejs");
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(express.static("public"));

app.get("/", (req, res) => res.render("homepage"));

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function () {
    console.log("Server has started successfully.");
});