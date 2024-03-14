const express = require("express");
const app = express();

const reminderRouter = require("./routes/reminderRoutes")

// Middlewares
app.use(express.json());

app.use("/api/reminder", reminderRouter);

module.exports = app;