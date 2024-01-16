const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  activity: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

module.exports = mongoose.model('activity', activitySchema);