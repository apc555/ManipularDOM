const express = require("express");
const path = require("path");
const cors =require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));



//START SERVER
app.listen(3500, function() {
    console.log("Server running");
  });