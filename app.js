const session = require("express-session");
const passport = require("./config/passport");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

// routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/contacts", require("./routes/contactRoutes"));
app.use("/tasks", require("./routes/taskRoutes"));

// Swagger
const setupSwagger = require("./swagger");
setupSwagger(app);

// home route
app.get("/", (req, res) => {
  res.send("Project 2 API is running");
});

module.exports = app;