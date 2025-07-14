const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('./config/db');
const certificationRoutes = require('./routes/certificationRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/certifications', certificationRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});