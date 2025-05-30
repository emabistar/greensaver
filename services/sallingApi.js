// services/sallingApi.js

const axios     = require('axios');
const NodeCache = require('node-cache');
const cache     = new NodeCache({ stdTTL: 300 });

const BASE_URL       = 'https://api.sallinggroup.com';
const FOOD_WASTE_URL = '/v1/food-waste';
const AUTH_HEADER    = { Authorization: `Bearer ${process.env.SALLING_BEARER_TOKEN}` };

async function fetchNearbyFoodWaste(lat, lng, radius = 5) {
  const key = `nearby:${lat}:${lng}:${radius}`;
  if (cache.has(key)) return cache.get(key);

  const url = `${BASE_URL}${FOOD_WASTE_URL}?geo=${lat},${lng}&radius=${radius}`;
  const res = await axios.get(url, { headers: AUTH_HEADER });
  cache.set(key, res.data);
  return res.data;
}

async function fetchNearbyFoodWasteGeo(geo, radius = 5) {
  const key = `nearby:${geo}:${radius}`;
  if (cache.has(key)) return cache.get(key);

  const url = `${BASE_URL}${FOOD_WASTE_URL}?geo=${encodeURIComponent(geo)}&radius=${radius}`;
  const res = await axios.get(url, { headers: AUTH_HEADER });
  cache.set(key, res.data);
  return res.data;
}

async function fetchStoreFoodWaste(storeId) {
  const key = `store:${storeId}`;
  if (cache.has(key)) return cache.get(key);

  const url = `${BASE_URL}${FOOD_WASTE_URL}/${storeId}`;
  const res = await axios.get(url, { headers: AUTH_HEADER });
  cache.set(key, res.data);
  return res.data;
}

module.exports = {
  fetchNearbyFoodWaste,
  fetchNearbyFoodWasteGeo,
  fetchStoreFoodWaste
};
