// controllers/suggestionController.js
const suggestionApi = require('../services/sallingSuggestionsApi');

exports.getRelevantProducts = async (req, res, next) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ error: 'Missing query parameter' });
    const data = await suggestionApi.fetchRelevantProducts(query);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getSimilarProducts = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const data = await suggestionApi.fetchSimilarProducts(productId);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getFrequentlyBoughtTogether = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const data = await suggestionApi.fetchFrequentlyBoughtTogether(productId);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
