const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Todo = require("./Todo"); // import model
require("dotenv").config();
const app = express();
const PORT = 3050;

let todos = [];

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use(cors());
app.use(bodyParser.json());

// GET all todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST a new todo
app.post("/todos", async (req, res) => {
  const { task } = req.body;
  const newTodo = new Todo({ task });
  await newTodo.save();
  res.status(201).json(newTodo);
});

// Toggle complete
app.put("/todos/:id/complete", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo) {
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// DELETE
app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
