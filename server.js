//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (request, response) {
  //or function(req, res){} keyword can be anything
  response.send("<h1>Hello Bhai Log!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: angela@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("<h1>I am Yash Pandey</h1>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
