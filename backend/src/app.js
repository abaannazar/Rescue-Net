const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const weatherRoutes = require('./routes/weather');
const locationRoutes = require('./routes/locations');
const alertRoutes = require('./routes/alerts');

app.use('/api/weather', weatherRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/alerts', alertRoutes);

module.exports = app;
