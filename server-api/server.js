// server.js

const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
const config = require('./config');
const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
// app.use(bodyParser.json());
// app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/user', userRoutes);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
