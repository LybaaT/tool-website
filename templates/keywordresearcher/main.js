function searchKeywords() {
    const apiKey = 'AIzaSyDZ7I_Had3eUktQUp90QWH5-Giaayvv8Ic';
    const cx = 'f276d7f3fe6a1406d';
    const query = document.getElementById('query').value;
  
    // Build the search request URL
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}&num=10`;
  
    // Send the search request
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Parse the search results and display them in the textarea
        const results = data.items.map((item) => item.title);
        document.getElementById('results').value = results.join('\n');
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('results').value = 'An error occurred. Please try again later.';
      });
  
    // Prevent the form from submitting
    return false;
  }