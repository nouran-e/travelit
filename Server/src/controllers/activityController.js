const Activity = require('../models/activityModel');

// Controller to create a new activity
const createActivity = async (req, res) => {
  try {
    const { activity, location, date, startTime, endTime } = req.body;
    const newActivity = await Activity.create({
      activity,
      location,
      date,
      startTime,
      endTime,
    });
    // Save the new activity to the database
    const savedActivity = await newActivity.save();

    // Respond with the saved activity
    res.status(201).json(savedActivity);
  } catch (error) {
    console.error('Error creating activity:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get all activities
const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    console.error('Error getting activities:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get a specific activity by ID
const getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    res.status(200).json(activity);
  } catch (error) {
    console.error('Error getting activity by ID:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to update a specific activity by ID
const updateActivityById = async (req, res) => {
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedActivity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    res.status(200).json(updatedActivity);
  } catch (error) {
    console.error('Error updating activity by ID:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to delete a specific activity by ID
const deleteActivityById = async (req, res) => {
  try {
    const deletedActivity = await Activity.findByIdAndDelete(req.params.id);
    if (!deletedActivity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting activity by ID:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createActivity,
  getAllActivities,
  getActivityById,
  updateActivityById,
  deleteActivityById,
};
