var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.get("/", function(req, res) {
    // res.send("Hello Creep");
    res.sendFile(path.join(__dirname + "/app/public/home.html"))
});

app.listen(PORT, function() {
    console.log("App listening on PORT: "+ PORT);
})