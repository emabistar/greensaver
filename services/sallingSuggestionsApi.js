const axios = require('axios');

const BASE_URL = 'https://api.sallinggroup.com';
const SUGG_PATH = '/v1-beta/product-suggestions';
const AUTH_HEADER = { Authorization: `Bearer ${process.env.SALLING_BEARER_TOKEN}` };

module.exports = {
  async fetchRelevantProducts(query) {
    const url = `${BASE_URL}${SUGG_PATH}/relevant-products?query=${encodeURIComponent(query)}`;
    const res = await axios.get(url, { headers: AUTH_HEADER });
    return res.data;
  },

  async fetchSimilarProducts(productId) {
    const url = `${BASE_URL}${SUGG_PATH}/similar-products?productId=${productId}`;
    const res = await axios.get(url, { headers: AUTH_HEADER });
    return res.data;
  },

  async fetchFrequentlyBoughtTogether(productId) {
    const url = `${BASE_URL}${SUGG_PATH}/frequently-bought-together?productId=${productId}`;
    const res = await axios.get(url, { headers: AUTH_HEADER });
    return res.data;
  }
};
