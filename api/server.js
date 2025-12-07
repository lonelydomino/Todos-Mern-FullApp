const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://lonelydomino:Kiwi2023@cluster0.jycrvss.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

// CORS must be configured before other middleware
const allowedOrigins = [
  "https://todos-mern-client.vercel.app",
  "http://localhost:3000",
  "http://localhost:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, or server-to-server)
    if (!origin) {
      return callback(null, true);
    }
    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      // Temporarily allow all origins for debugging - remove this in production
      console.log("CORS: Allowing origin:", origin);
      callback(null, true);
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Handle preflight requests explicitly
app.options("*", cors(corsOptions));

app.use(express.json());

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
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

app.post("/todo/new", async (req, res) => {
  try {
    const todo = new Todo({
      text: req.body.text,
    });

    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ error: "Failed to create todo" });
  }
});

app.delete("/todo/delete/:id", async (req, res) => {
  try {
    console.log("IN DELETE");
    const result = await Todo.findByIdAndDelete(req.params.id);
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

app.get("/todo/complete/:id", async (req, res) => {
  try {
    console.log("in complete");
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    todo.complete = !todo.complete;
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error("Error completing todo:", error);
    res.status(500).json({ error: "Failed to update todo" });
  }
});
// Global error handler middleware - must be before static file serving
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({ 
    error: err.message || "Internal server error" 
  });
});

// Serve static files from React app in production (optional - for combined deployment)
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  const fs = require("fs");
  const buildPath = path.join(__dirname, "../client/build");

  // Only serve static files if build folder exists (for combined deployment)
  if (fs.existsSync(buildPath)) {
    app.use(express.static(buildPath));

    app.get("*", (req, res) => {
      res.sendFile(path.join(buildPath, "index.html"));
    });
  }
}

app.listen(process.env.PORT || 3001, "0.0.0.0", () =>
  console.log(`Server started on port ${process.env.PORT || 3001}.`)
);
