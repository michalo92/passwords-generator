const btn = document.querySelector(".btn-passwords");

const lettersString = "zxcvbnmlkjhgfdsaqwertyuiop1234567890";
const lettersAndNumbers = [...lettersString];
let passwordsToGenerate = 5;
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
    passwordElement(passwordArray);
  }
});

function passwordElement(item) {
  const haslo = document.createElement("div");
  haslo.classList.add("password");
  const joinPassword = item.join("");
  document.body.appendChild(haslo).innerHTML = `
  
  <p class="text">${joinPassword}</p>
      <button class="copy-btn tooltip" onmouseout="outFunc()">
        <span class="ph ph-clipboard-text"></span>
        <span class="tooltiptext myTooltip">Copy to clipboard</span>
      </button>`;
  readyToCopy();
}

function outFunc() {
  const tooltip = document.querySelectorAll(".myTooltip");
  tooltip.forEach((e) => (e.textContent = `Copy to clipboard!`));
}

function readyToCopy(joinPassword) {
  const btnCopy = document.querySelectorAll(".copy-btn");
  btnCopy.forEach((e, i) =>
    e.addEventListener("click", function () {
      const textInPassword = document.querySelectorAll(".text");
      const textToCopy = textInPassword[i].textContent;
      navigator.clipboard.writeText(textToCopy);
      const tooltip = document.querySelectorAll(".myTooltip");
      tooltip.forEach((e) => (e.textContent = `Coppied: ${textToCopy}`));
    })
  );
}
