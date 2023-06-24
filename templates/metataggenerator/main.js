const form = document.getElementById('metatag-form');
const outputArea = document.getElementById('outputArea');

form.onsubmit = (event) => {
  event.preventDefault();

  const title = form.title.value;
  const description = form.description.value;
  const keywords = form.keywords.value;
  const index = form.index.value;
  const follow = form.follow.value;
  const content = form.content.value;
  const language = form.lang.value;

  const metaTags = `<meta name="title" content="${title}">
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta name="robots" content="${index},${follow}">
    <meta http-equiv="Content-Type" content="text/html; charset=${content}">
    <meta name="language" content="${language}">`;

  outputArea.value = metaTags;
};