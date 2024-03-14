const mongoose = require("mongoose");
const Reminder = require("./../models/reminderModel");

exports.createReminder = async (req, res) => {
  try {
    // Extracting the reminder method from the request body
    const reminder_method = req.body.reminder_method;

    // Checking if the reminder method is not 'SMS' and not 'Email'
    if (reminder_method !== "SMS" && reminder_method !== "Email") {
      // Sending an error response if the reminder method is not valid
      return res.json({
        status: "error",
        message: "This reminder method is not available",
      });
    }

    // Creating a new Reminder document with the provided data
    await new Reminder({
      date: req.body.date,
      time: req.body.time,
      message: req.body.message,
      reminder_method: req.body.reminder_method,
    }).save();

    // Sending a success response after creating the reminder
    res.json({ message: "Reminder Created" });
  } catch (error) {
    // Sending an error response if any error occurs during the process
    res.json({ status: "error", message: error });
  }
};
