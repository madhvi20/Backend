// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS - Cross-Origin Resource Sharing
app.use(cors());

// Simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Refer & Earn application.' });
});

// Include routes
const referralRoutes = require('./routes/referralRoutes');
app.use('/api', referralRoutes);

// Set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
