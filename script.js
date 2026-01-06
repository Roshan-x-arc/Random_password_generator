const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthValue.textContent = lengthSlider.value;

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
  const length = lengthSlider.value;

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}<>?/";

  let characters = "";
  let password = "";

  if (uppercase.checked) characters += upperChars;
  if (lowercase.checked) characters += lowerChars;
  if (numbers.checked) characters += numberChars;
  if (symbols.checked) characters += symbolChars;

  if (characters === "") {
    alert("Select at least one option!");
    return;
  }

  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  if (!passwordField.value) return;

  navigator.clipboard.writeText(passwordField.value);
  alert("Copied to clipboard ✨");
}
