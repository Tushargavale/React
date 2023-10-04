// axiosInstance.js
import axios from 'axios';
const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    authentication:JSON.parse(localStorage.getItem('Token'))
  },
});

module.exports = instance;
