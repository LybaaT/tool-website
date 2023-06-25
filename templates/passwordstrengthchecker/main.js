    // Calculate entropy of the password
    const entropy = characterPool.length ** passwordLength;

    const resp = entropyResponse(entropy);
    $('entropyLevel').style.borderLeft = `5px solid ${resp.color}`;
    $('entropyLevel').innerText = resp.text;

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
