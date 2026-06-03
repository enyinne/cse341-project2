const express = require("express");

const app = express();

app.use(express.json());

// routes
app.use("/contacts", require("./routes/contactRoutes"));
app.use("/tasks", require("./routes/taskRoutes"));

app.get("/", (req, res) => {
  res.send("Project 2 API is running");
});

module.exports = app;