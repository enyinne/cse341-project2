const express = require("express");
const Contact = require("./models/contactModel");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/contacts", require("./routes/contactRoutes"));
app.use("/tasks", require("./routes/taskRoutes"));

app.get("/test-contacts", async (req, res) => {
  const contacts = await Contact.find();
  res.json({
    count: contacts.length,
    contacts
  });
});

// Swagger 
const setupSwagger = require("./swagger");
setupSwagger(app);

// home route
app.get("/", (req, res) => {
  res.send("Project 2 API is running");
});

module.exports = app;