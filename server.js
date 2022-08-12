const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3001;

//cpnnect to mongodb
mongoose.connect(
  "mongodb+srv://darshana:darshana@cluster0.uoooe.mongodb.net/items?retryWrites=true&w=majority"
);

//data schema
const itemSchema = {
  title: String,
  description: String,
};

//data model
const Item = mongoose.model("Item", itemSchema);

//read route

//create route

//delete route

//update route

app.listen(port, function () {
  console.log("Express is running");
});
