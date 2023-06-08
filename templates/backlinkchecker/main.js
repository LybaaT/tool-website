const outputElement = document.getElementById('backlinkDiv');

function getBackLinks(url) {
  var url = document.getElementById("input").value;
  fetch('/api/backlinkchecker?url=' + url).then((response) => {
    response.json().then((obj) => {
      outputElement.innerText = 
          obj.map(([link, text]) => `${link}: "${text}"`).join("\n");
    })
  })
}