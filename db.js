const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection URL from .env
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error(error.message);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
