function rot13(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let asciiNum = str[i].charCodeAt();
    let rotatedAsciiNum;
    if (asciiNum >= 65 && asciiNum <= 90) { // Uppercase letters
      rotatedAsciiNum = asciiNum + 13;
      if (rotatedAsciiNum > 90) {
        rotatedAsciiNum -= 26; // Wrap around if beyond 'Z'
      }
    } else if (asciiNum >= 97 && asciiNum <= 122) { // Lowercase letters
      rotatedAsciiNum = asciiNum + 13;
      if (rotatedAsciiNum > 122) {
        rotatedAsciiNum -= 26; // Wrap around if beyond 'z'
      }
    } else {
      rotatedAsciiNum = asciiNum; // Non-alphabetic characters remain unchanged
    }
    result += String.fromCharCode(rotatedAsciiNum);
  }
  return result;
}

function applyROT13() {
  let inputText = document.getElementById('inputText').value;
  let outputText = rot13(inputText);
  document.getElementById('outputText').innerText = outputText;
}
