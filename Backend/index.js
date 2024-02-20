// index.js

const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/task');

const app = express();
const PORT = process.env.PORT || 8080;
console.log(process.env.REACT_APP_MONGO_KEY);
// Connect to MongoDB
mongoose.connect(`mongodb+srv://prathamsinghkathayat:nNzb0xeQbUzsqa7L@cluster0.lvzlmme.mongodb.net/`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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
