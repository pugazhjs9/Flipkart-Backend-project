const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Initialize the Express app
const app = express();

// Middleware
app.use(express.json());  // Parse incoming JSON data
app.use(cors());          // Enable Cross-Origin Resource Sharing

// Route imports
const authRoutes = require('../routes/authRoutes');
const songRoutes = require('../routes/songRoutes');
const homeRoutes = require('../routes/homeRoutes');

// API Routes
app.use('/api/auth', authRoutes);   // Routes for signin/signup
app.use('/api/songs', songRoutes);  // Routes for song management
app.use('/api/homepage', homeRoutes);  // Route for homepage data

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Amazon Clone Backend!');
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

module.exports = app;
