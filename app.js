//  Connecting modules
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("express-handlebars");
const { mongoDbUrl, PORT } = require("./config/configuration");

const app = express();

// Configure Mongoose to connect to MongoDB
mongoose
  .connect(mongoDbUrl, { useNewUrlParser: true })
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

// Setup View Engine (Handlebars)
app.engine("handlebars", hbs({ defaultLayout: "default" }));
app.set("view engine", "handlebars");

// Routes
const defaultRoutes = require("./routes/defaultRoutes");
app.use("/", defaultRoutes);

// Running a server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
