//jshint esversion:6

const express = require('express');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

var favicon = require('serve-favicon');
var path = require('path');

app.use(favicon(path.join(__dirname, 'favicon.ico')));


//Calculator
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("Calculating... " + result + " 😎");
});



// BMI Calculator
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight / Math.pow(height, 2);
    res.send("your BMI is " + bmi + " 😎");
});


app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});