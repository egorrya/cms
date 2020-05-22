//  Connecting modules
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Configure Mongoose to connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/cms", { useNewUrlParser: true })
  .then((response) => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Database connection failed");
  });

// Configure express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", (req, res) => {});

// Running a server
app.listen(3000, () => {
  console.log("Server is running");
});
