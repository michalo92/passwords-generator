const btn = document.querySelector(".btn-passwords");
const container = document.querySelector(".passwords-container");

const lettersString = "zxcvbnmlkjhgfdsaqwertyuiop1234567890";
const lettersAndNumbers = [...lettersString];

let passwordsToGenerate = 1;
const passwordsCountInput = document.getElementById("passwords-count");
passwordsCountInput.addEventListener("change", function (e) {
  container.textContent = "";
  if (e.target.value < 1 || e.target.value >= 9999 || e.target.value == "") {
    document.querySelector(".invalid-input-count").classList.remove("hidden");
    this.classList.add("invalid");
    passwordsToGenerate = "";
  } else {
    this.classList.remove("invalid");
    document.querySelector(".invalid-input-count").classList.add("hidden");
    passwordsToGenerate = e.target.value;
  }
});

let passwordLength = 8;
const passwordsCharsInput = document.getElementById("passwords-chars");
passwordsCharsInput.addEventListener("change", function (e) {
  container.textContent = "";
  if (e.target.value < 4 || e.target.value > 20 || e.target.value === "") {
    document.querySelector(".invalid-input-chars").classList.remove("hidden");
    this.classList.add("invalid");
    passwordLength = "";
  } else {
    this.classList.remove("invalid");
    document.querySelector(".invalid-input-chars").classList.add("hidden");
    passwordLength = e.target.value;
  }
});

let counter = 0;
btn.addEventListener("click", function () {
  container.textContent = "";
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

function passwordElement(item = "") {
  const haslo = document.createElement("div");
  haslo.classList.add("password");
  const joinPassword = item.join("");
  container.appendChild(haslo).innerHTML = `
  
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

function readyToCopy() {
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

document
  .getElementById("passwords-count")
  .addEventListener("click", function (e) {
    e.target.value = "";
  });
document
  .getElementById("passwords-chars")
  .addEventListener("click", function (e) {
    e.target.value = "";
  });
