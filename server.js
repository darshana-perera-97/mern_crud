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
app.get("/items", (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error : " + err));
});

//create route
app.post("/newitem", (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    description: req.body.description,
  });
  newItem
    .save()
    .then((item) => console.log(item))
    .catch((err) => res.status(400).json("Error" + err));
});

//delete route

//update route

app.listen(port, function () {
  console.log("Express is running");
});
