const outputElement = document.getElementById('backlinkDiv');

function getBackLinks() {
  const url = document.getElementById("input").value;
  fetch('/api/backlinkchecker?url=' + url).then((response) => {
    response.json().then((obj) => {
      outputElement.innerHTML = 
          obj.map(([link, text]) => `${link}: "${text}"`).join("<br>");
    })
  })
}
