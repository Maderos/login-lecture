//module
const express = require("express");
const app = express();

//router
const home = require("./routes/home");

//App setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> register middle ware

module.exports = app;