// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/task');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
// Connect to MongoDB
mongoose.connect(process.env.REACT_APP_MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(cors('*'));
// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});
app.use('/api', taskRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
