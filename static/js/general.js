// Shorter function for getting an element
function $(elem) {
    return document.getElementById(elem);
};

// Takes a random item from an array or a random char from a string
function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

// A collection of characters to access
const lib = {
    special_characters: "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/",
    numbers: '0123456789',
    alphabet_lowercase: 'abcdefghijklmnopqrstuvwxyz',
    alphabet_uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

// Handle theme
var toggle = document.querySelector(".switch input");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
}
if (storedTheme === 'dark') {
    toggle.checked = true;
}

toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};