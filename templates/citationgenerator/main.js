const form = document.getElementById('citation-form');

const source = document.getElementById('source');

const url = document.getElementById('urlContainer');
// Hide URL container by default
url.style.display = 'none';

const outputArea = document.getElementById('outputArea');

source.onchange = () => {
	if (source.value === 'webpage') {
		url.style.display = 'block';
	} else if (source.value !== 'webpage') {
		// Hide URL option if source is not "Webpage"
		url.style.display = 'none';
	}
};

form.onsubmit = (event) => {
    event.preventDefault();

    const author = form.author.value;
    const title = form.title.value;
    const date = form.date.value;
    const publisher = form.publisher.value;
    const style = form.style.value;
    const url = form.url.value;

    let citation;

	// Generate citation format depending on style
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

	// Add to References container
    const li = document.createElement('li');
    li.textContent = citation;
    outputArea.appendChild(li);

    form.reset();
};

// Copy Citation button
function copyReferences() {
	// Get all references
    const references = document.querySelectorAll('#outputArea li');

    let text = '';
    for (let li of references) {
		// Newline at the end to make add next items in a new row
        text += li.textContent + '\n';
    }
    navigator.clipboard.writeText(text);
    alert('References copied to clipboard!');
}