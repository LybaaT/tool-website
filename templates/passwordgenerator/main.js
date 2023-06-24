function generate() {
    let characterPool = '';
    const passwordLength = $('passwordLength').value;

    $('passwordLengthText').innerText = passwordLength;

    // Fill the pool based on what was selected
    if ($('lowercaseCharacters').checked) {
        characterPool += lib.alphabet_lowercase;
    };
    if ($('uppercaseCharacters').checked) {
        characterPool += lib.alphabet_uppercase;
    };
    if ($('numericCharacters').checked) {
        characterPool += lib.numbers;
    };
    if ($('specialCharacters').checked) {
        characterPool += lib.special_characters;
    };

    if (characterPool.length === 0) {
        // No characters in pool
        $('passwordOutput').value = 'No characters selected!';
    } else {
        // Generate the password based on length and the character pool
        let generatedPassword = '';
        for (let i = 0; i < passwordLength; i ++) {
            const char = choice(characterPool)
            generatedPassword += char;
        };
        $('passwordOutput').value = generatedPassword;
    };

    // Calculate entropy of the password
    const entropy = characterPool.length ** passwordLength;

    const resp = entropyResponse(entropy);
    $('entropyLevel').style.borderLeft = `5px solid ${resp.color}`;
    $('entropyLevel').innerText = resp.text;
}

function entropyResponse(entropy) {
    let color = '#000000';
    let text = '';
    if (entropy < 100_000_000) {
        color = '#FF0000';
        text = 'Terrible';
    } else if (entropy < 100_000_000_000_000) {
        color = '#FF8800';
        text = 'Bad';
    } else if (entropy < 100_000_000_000_000_000_000) {
        color = '#FFFF00';
        text = 'Okay';
    } else if (entropy < 100_000_000_000_000_000_000_000_000) {
        color = '#88FF00';
        text = 'Good';
    } else if (entropy < 100_000_000_000_000_000_000_000_000_000_000) {
        color = '#44FF00';
        text = 'Very Good';
    } else {
        color = '#00FFFF';
        text = 'Uncrackable';
    };
    return {
        color: color,
        text: text
    };
}

// Any interaction generates a new password
$('passwordLength').oninput = generate;
$('lowercaseCharacters').oninput = generate;
$('uppercaseCharacters').oninput = generate;
$('numericCharacters').oninput = generate;
$('specialCharacters').oninput = generate;

generate();