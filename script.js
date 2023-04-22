const btn = document.querySelector(".btn-passwords");
const password = document.querySelector(".password");

const lettersString = "zxcvbnmlkjhgfdsaqwertyuiop1234567890";
const lettersAndNumbers = [...lettersString];
let passwordsToGenerate = 50;
let passwordLength = 8;
let counter = 0;
btn.addEventListener("click", function () {
  for (let i = 0; i < passwordsToGenerate; i++) {
    let passwordArray = [];
    for (let x = 0; x < passwordLength; x++) {
      counter = Math.floor(Math.random() * lettersString.length);
      Math.floor(Math.random() * 2) === 0
        ? passwordArray.push(lettersAndNumbers[counter].toUpperCase())
        : passwordArray.push(lettersAndNumbers[counter]);
    }
    const haslo = document.createElement("p");
    haslo.classList.add("password");
    document.body.appendChild(haslo).textContent = passwordArray.join("");
  }
});

document.querySelector(".copy-btn").addEventListener("click", function () {
  console.log("copy");
});
