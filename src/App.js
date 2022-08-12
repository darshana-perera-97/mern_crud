import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";

function App() {
  const [item, setItem] = React.useState({ title: "", description: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(item);
  }
  function addItem(event) {
    event.preventDefault();
    const newItem = { title: item.title, description: item.description };
    axios.post("/newitem", newItem);
    console.log(newItem);
  }
  return (
    <div className="App">
      <input
        onChange={handleChange}
        name="title"
        placeholder="title"
        value={item.title}
      ></input>
      <input
        onChange={handleChange}
        name="description"
        placeholder="title"
        value={item.description}
      ></input>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default App;


//https://youtu.be/qotbRizPobA?t=975