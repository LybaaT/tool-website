const form = document.querySelector('#citation-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const author = form.author.value;
  const title = form.title.value;
  const date = form.date.value;
  const publisher = form.publisher.value;
  const style = form.style.value;
  const url = form.url.value;
  
  let citation;
  
  if (style === 'mla') {
    citation = `${author}. "${title}." ${publisher}, ${date}. ${url}.`;
  } else if (style === 'apa') {
    citation = `${author} (${date}). ${title}. ${publisher}. ${url}.`;
  }
  
  textOutput.value = citation;
});