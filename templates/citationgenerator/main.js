const form = document.querySelector('#citation-form');

const select = document.querySelector('#source');
const source = document.querySelector('#url');
document.getElementById('url').style.display = 'none';
document.getElementById('url2').style.display = 'none';

select.addEventListener('change', () => {
  if (select.value === 'webpage') {
    document.getElementById('url').style.display = 'inline-block';
    document.getElementById('url2').style.display = 'inline-block';
} else if (select.value !== 'webpage') {
    document.getElementById('url').style.display = 'none';
    document.getElementById('url2').style.display = 'none';
}
});

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
    } else if (style === 'apa7') {
    citation = `${author} (${date}). ${title}. ${publisher}. ${url}.`;
    } else if (style === 'chicago') {
        citation = `${author}. "${title}." ${publisher}, ${date}, ${url}.`;
    } else if (style === 'apa6') {
        citation = `${author} (${date}). ${title}. ${publisher}`;
        if (url) {
            citation += `. Retrieved from ${url}.`;
        } else {
            citation += '.';
        }
    }
    
  
  textOutput.value = citation;
});

function copyText() {
    var outputArea = document.getElementById("textOutput");
    outputArea.select();
    document.execCommand('copy');
  }