const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const activityRouter = require("./routes/activityRouter");
const userRouter = require("./routes/userRouter");
const tripRouter = require("./routes/tripRouter");

const app = express();
const allowedOrigins = require('./config/allowedOrigins');
require("dotenv").config();
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Enable CORS for all routes
app.use(cors({
  origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  credentials: true,
}));

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err.message);
  }
};

// Use the routes
app.use("/api", activityRouter);
app.use("/register", userRouter);
app.use("/api", tripRouter);

// Start the server after connecting to MongoDB
const PORT = 5173;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect to MongoDB and start the server
connectDB();
