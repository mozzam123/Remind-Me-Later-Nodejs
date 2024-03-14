const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true }, 
    message: { type: String, required: true, maxlength: 255 },
    reminder_method: { type: String, required: true, enum: ['SMS', 'Email'] }
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;
