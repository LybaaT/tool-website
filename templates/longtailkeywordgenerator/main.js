const axios = require('axios');

const API_KEY = 'your-api-key';
const SEED_KEYWORD = 'your-seed-keyword';

const url = 'https://api.keyword.io/v1/search';

const params = {
  api_key: API_KEY,
  keyword: SEED_KEYWORD,
  language: 'en',
  location: 'us',
  results: 10
};

axios.get(url, { params })
  .then(response => {
    const longtailKeywords = response.data;
    const outputList = document.getElementById('outputList');
    longtailKeywords.forEach(keyword => {
      const listItem = document.createElement('li');
      listItem.textContent = keyword;
      outputList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.log(error);
  });