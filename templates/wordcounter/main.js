function generate() {
    const text = $('inputText').value;
    const words = text.split(' ').filter((a) => a !== '');
    $('countWords').innerText = words.length;
    if ($('countSpaces').checked) {
        $('countChars').innerText = text.length;
    } else {
        $('countChars').innerText = text.replaceAll(' ','').length;
    }
}

$('inputText').oninput = generate;
$('countSpaces').oninput = generate;
generate();