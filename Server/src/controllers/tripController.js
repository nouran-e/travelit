const Trip = require('../models/trip');

exports.createTrip = async (req, res) => {
  try {
    const { name, destination, tripStart, tripEnd } = req.body;

    const newTrip = new Trip({
      name,
      destination,
      tripStart,
      tripEnd,
      img: req.file ? `/uploads/${req.file.filename}` : null,
    });

    await newTrip.save();

    res.status(201).json({ message: 'Trip created successfully' });
  } catch (error) {
    console.error('Error creating trip:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
