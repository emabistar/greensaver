// backend/index.js
require('dotenv').config(); // Load environment variables (SALLING_BEARER_TOKEN)
const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Verify environment variable loaded
if (!process.env.SALLING_BEARER_TOKEN) {
  console.error('❌ Missing SALLING_BEARER_TOKEN in environment');
  process.exit(1);
}
console.log('✅ SALLING_BEARER_TOKEN loaded');

// Middleware\app.use(bodyParser.json());

// Mount API routes
app.use('/api', apiRoutes);

// Health check
app.get('/', (req, res) => res.send('Welcome to GreenSaver API'));

// Error handler (must come after routes)
app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.response?.status || 500;
  const message = err.response?.data?.userMessage || err.message || 'Internal server error';
  res.status(status).json({ error: message });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));