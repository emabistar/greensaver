// controllers/foodWasteController.js
const sallingApi = require('../services/sallingApi');

exports.getNearbyClearances = async (req, res, next) => {
  try {
    const { lat, lng, radius = 5 } = req.query;
    const data = await sallingApi.fetchNearbyFoodWaste(lat, lng, radius);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getStoreClearances = async (req, res, next) => {
  try {
    const { storeId } = req.params;
    const data = await sallingApi.fetchStoreFoodWaste(storeId);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
