function generate() {
    const text = $('inputText').value;
    const words = text.split(' ').filter((a) => a !== '');
    $('countWords').innerText = words.length;
    $('countChars').innerText = text.length;
}

$('inputText').oninput = generate;
generate();