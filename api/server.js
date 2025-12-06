const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://lonelydomino:Kiwi2023@cluster0.jycrvss.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"))
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    console.error("\nTroubleshooting tips:");
    console.error("1. Check your internet connection");
    console.error("2. Verify your IP address is whitelisted in MongoDB Atlas");
    console.error("3. Check if the MongoDB Atlas cluster is running");
    console.error("4. Verify your username and password are correct");
  });

const Todo = require("./models/Todo.js");

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todo/new", (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });

  todo.save();

  res.json(todo);
});

app.delete("/todo/delete/:id", async (req, res) => {
  console.log("IN DELETE");
  const result = await Todo.findByIdAndDelete(req.params.id);
  console.log(result);
  res.json(result);
});

app.get("/todo/complete/:id", async (req, res) => {
  console.log("in complete");
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  res.json(todo);
});
app.listen(process.env.PORT || 3001, "0.0.0.0", () =>
  console.log("Server started on port 3001.")
);
