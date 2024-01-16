const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: String,
  destination: String,
  tripStart: String,
  tripEnd: String,
  img: String,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
