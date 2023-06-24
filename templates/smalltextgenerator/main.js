var inputText = document.getElementById('inputText').innerText;
var outputText = document.getElementById('outputText');
var superscriptText = generateSuperscript(inputText);
outputText.value = superscriptText;

function generateSuperscript(text) {
    var superscript = '';
    for (var i = 0; i < text.length; i++) {
      var charCode = text.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) { // Numbers 0-9
        superscript += String.fromCharCode(charCode + 8304);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters a-z
        superscript += String.fromCharCode(charCode + 12032);
      } else if (charCode >= 65 && charCode <= 90) { // Uppercase letters A-Z
        superscript += String.fromCharCode(charCode + 12064);
      } else {
        superscript += text[i]; // Leave other characters unchanged
      }
    }
    return superscript;
}


outputText.innerText = generateSuperscript();