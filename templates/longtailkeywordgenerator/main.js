const axios = require('axios');

const API_KEY = 'zff5YtuhQxVRsMuQiRya';
const SEED_KEYWORD = form.keyword.value;

const url = 'https://api.keyword.io/v1/search';

const params = {
  api_key: API_KEY,
  keyword: SEED_KEYWORD,
  language: 'en',
  location: form.location.value,
  results: form.result.value,
};

axios.get(url, { params })
  .then(response => {
    const longtailKeywords = response.data;
    const outputList = document.getElementById('outputText');
    longtailKeywords.forEach(keyword => {
      const listItem = document.createElement('li');
      listItem.textContent = keyword;
      outputList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.log(error);
  });