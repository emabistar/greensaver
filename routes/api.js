// routes/api.js
const express = require('express');
const router = express.Router();
const foodWasteController = require('../controllers/foodWasteController');
const suggestionController = require('../controllers/suggestionController');

// Food Waste Endpoints
// GET /api/food-waste/nearby?lat=...&lng=...&radius=...
router.get('/food-waste/nearby', foodWasteController.getNearbyClearances);
// GET /api/food-waste/store/:storeId
router.get('/food-waste/store/:storeId', foodWasteController.getStoreClearances);

// Product Suggestions Endpoints
// GET /api/suggestions/relevant?query=...
router.get('/suggestions/relevant', suggestionController.getRelevantProducts);
// GET /api/suggestions/similar/:productId
router.get('/suggestions/similar/:productId', suggestionController.getSimilarProducts);
// GET /api/suggestions/fbt/:productId
router.get('/suggestions/fbt/:productId', suggestionController.getFrequentlyBoughtTogether);

module.exports = router;