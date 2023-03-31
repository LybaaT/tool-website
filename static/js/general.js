// Shorter function
function $(elem) {
    return document.getElementById(elem);
};

// Takes a random item from an array or a random char from a string
function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

const lib = {
    special_characters: "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/",
    numbers: '0123456789',
    alphabet_lowercase: 'abcdefghijklmnopqrstuvwxyz',
    alphabet_uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}