const copyMsgEl = document.querySelector(".copy-msg");
const iTagEl = document.querySelector(".result i");
const resultEl = document.querySelector(".result");
const passwordGenerateEl = document.querySelector(".password-generate");
const tosterEl = document.querySelector(".toster");

const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ".",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "~",
  "-",
  "_",
  ".",
];

function insertTosterMsg() {
  tosterEl.insertAdjacentHTML(
    "beforeend",
    "<p>Password cannot be generated!!!</p>"
  );
  setTimeout(() => {
    tosterEl.lastElementChild.remove();
  }, 1000);
}

function genetatePassword(
  passwordLength,
  isUppercase,
  isLowercase,
  isNumbers,
  isSymbols
) {
  let symbolsPool = [];
  if (isUppercase) symbolsPool = [...symbolsPool, ...upperCase];
  if (isLowercase) symbolsPool = [...symbolsPool, ...lowercase];
  if (isNumbers) symbolsPool = [...symbolsPool, ...numbers];
  if (isSymbols) symbolsPool = [...symbolsPool, ...symbols];
  if (!symbolsPool.length) {
    insertTosterMsg();
    return;
  }
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += symbolsPool[Math.floor(Math.random() * symbolsPool.length)];
  }
  return password;
}

function insertCopyMsg(msg) {
  for (const ele of resultEl.getElementsByTagName("span")) {
    ele.remove();
  }
  resultEl.insertAdjacentHTML(
    "beforeend",
    `<span class="copy-msg">${msg}</span>`
  );
  const spnaEl = resultEl.lastElementChild;
  setTimeout(() => spnaEl.remove(), 1000);
}

iTagEl.addEventListener("mouseover", (e) => {
  insertCopyMsg("copy text");
});

iTagEl.addEventListener("click", (e) => {
  insertCopyMsg("copied");
  navigator.clipboard.writeText(
    resultEl.getElementsByTagName("p")[0].textContent
  );
});

passwordGenerateEl.addEventListener("click", (e) => {
  const passwordLength = document.getElementById("length");
  const isUppercase = document.getElementById("uppercase");
  const isLowercase = document.getElementById("lowercase");
  const isNumbers = document.getElementById("numbers");
  const isSymbols = document.getElementById("symbols");

  const password = genetatePassword(
    +passwordLength.value,
    isUppercase.checked,
    isLowercase.checked,
    isNumbers.checked,
    isSymbols.checked
  );
  if (password) {
    for (ele of resultEl.getElementsByTagName("p")) {
      ele.remove();
    }
    resultEl.insertAdjacentHTML("afterbegin", `<p>${password}</p>`);
  }
  passwordLength.value = 6;
  isUppercase.checked = false;
  isLowercase.checked = false;
  isNumbers.checked = false;
  isSymbols.checked = false;
});
