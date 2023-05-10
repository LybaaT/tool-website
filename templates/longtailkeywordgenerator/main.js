
function searchKeywords() {
    const API_KEY = 'zff5YtuhQxVRsMuQiRya';
    const SEED_KEYWORD = document.getElementById('keyword').value;
    const SELECTED_LOCATION = document.getElementById('location').value;
    const NUM_RESULTS = document.getElementById('result').value;
  
    const url = 'https://api.keyword.io/v1/search';
  
    const params = {
      api_key: API_KEY,
      keyword: SEED_KEYWORD,
      language: 'en',
      location: SELECTED_LOCATION,
      results: NUM_RESULTS,
    };
  
    axios.get(url, { params })
      .then(response => {
        const longtailKeywords = response.data;
        const outputList = document.getElementById('outputText');
        outputList.innerHTML = ''; // clear previous results
        longtailKeywords.forEach(keyword => {
          const listItem = document.createElement('li');
          listItem.textContent = keyword;
          outputList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }