const generatedPass = document.querySelector("#generatedPass");
const copyBtn = document.querySelector(".copy-button");
const charactersNumber = document.querySelector(".characters-num");
const sliderBar = document.querySelector("#slider");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const generateBtn = document.querySelector("#btn");
const levelsVisualTitle = document.querySelector(".levels-visual h4");
const levelsVisualBlocks = document.querySelectorAll(".levels-visual span");

let length = sliderBar.value;
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = lowerCase.toUpperCase();
let numbers = "0123456789";
let symbols = "'`~!@#$%^&*()_+-=<>{[}],./|";

sliderBar.addEventListener("change", () => {
  charactersNumber.textContent = sliderBar.value;

  //-------------------------------Password Strength -------------------------------//

  //-------------------------------- Only Numbers ----------------------------------//
  if (sliderBar.value <= 10 && numbersCheck.checked) {
    levelsVisualBlocks[0].style.background = "#F64A4A";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualTitle.textContent = "TOO WEAK!";
  }
  if (sliderBar.value > 10 && sliderBar.value <= 15 && numbersCheck.checked) {
    levelsVisualBlocks[0].style.background = "#FB7C58";
    levelsVisualBlocks[1].style.background = "#FB7C58";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualBlocks[1].style.border = "none";
    levelsVisualTitle.textContent = "WEAK";
  }
  if (sliderBar.value > 15 && sliderBar.value <= 18 && numbersCheck.checked) {
    levelsVisualBlocks[0].style.background = "#F8CD65";
    levelsVisualBlocks[1].style.background = "#F8CD65";
    levelsVisualBlocks[2].style.background = "#F8CD65";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualBlocks[1].style.border = "none";
    levelsVisualBlocks[2].style.border = "none";
    levelsVisualTitle.textContent = "MEDIUM";
  }

  //-------------------------------- Only Numbers ----------------------------------//

  //-------------------------------- Only LowerCase String ----------------------------------//
  if (sliderBar.value <= 7 && lowercaseCheck.checked) {
    levelsVisualBlocks[0].style.background = "#F64A4A";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualTitle.textContent = "TOO WEAK!";
  }
  if (sliderBar.value > 7 && sliderBar.value <= 10 && lowercaseCheck.checked) {
    levelsVisualBlocks[0].style.background = "#FB7C58";
    levelsVisualBlocks[1].style.background = "#FB7C58";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualBlocks[1].style.border = "none";
    levelsVisualTitle.textContent = "WEAK";
  }
  if (sliderBar.value > 10 && sliderBar.value <= 15 && lowercaseCheck.checked) {
    levelsVisualBlocks[0].style.background = "#F8CD65";
    levelsVisualBlocks[1].style.background = "#F8CD65";
    levelsVisualBlocks[2].style.background = "#F8CD65";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualBlocks[1].style.border = "none";
    levelsVisualBlocks[2].style.border = "none";
    levelsVisualTitle.textContent = "MEDIUM";
  }
  if (sliderBar.value > 15 && sliderBar.value <= 18 && lowercaseCheck.checked) {
    levelsVisualBlocks[0].style.background = "#A4FFAF";
    levelsVisualBlocks[1].style.background = "#A4FFAF";
    levelsVisualBlocks[2].style.background = "#A4FFAF";
    levelsVisualBlocks[3].style.background = "#A4FFAF";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualBlocks[1].style.border = "none";
    levelsVisualBlocks[2].style.border = "none";
    levelsVisualBlocks[3].style.border = "none";
    levelsVisualTitle.textContent = "STRONG";
  }

  //-------------------------------- Only LowerCase String ----------------------------------//

  //-------------------------------- LowerCase and UpperCase Strings ----------------------------------//

  if (
    sliderBar.value <= 6 &&
    lowercaseCheck.checked &&
    uppercaseCheck.checked
  ) {
    levelsVisualBlocks[0].style.background = "#F64A4A";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualTitle.textContent = "TOO WEAK!";
  }
  if (
    sliderBar.value > 6 &&
    sliderBar.value <= 9 &&
    lowercaseCheck.checked &&
    uppercaseCheck.checked
  ) {
    levelsVisualBlocks[0].style.background = "#FB7C58";
    levelsVisualBlocks[1].style.background = "#FB7C58";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualBlocks[1].style.border = "none";
    levelsVisualTitle.textContent = "WEAK";
  }
  if (
    sliderBar.value > 9 &&
    sliderBar.value <= 14 &&
    lowercaseCheck.checked &&
    uppercaseCheck.checked
  ) {
    levelsVisualBlocks[0].style.background = "#F8CD65";
    levelsVisualBlocks[1].style.background = "#F8CD65";
    levelsVisualBlocks[2].style.background = "#F8CD65";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualBlocks[1].style.border = "none";
    levelsVisualBlocks[2].style.border = "none";
    levelsVisualTitle.textContent = "MEDIUM";
  }
  if (
    sliderBar.value > 14 &&
    sliderBar.value <= 18 &&
    lowercaseCheck.checked &&
    uppercaseCheck.checked
  ) {
    levelsVisualBlocks[0].style.background = "#A4FFAF";
    levelsVisualBlocks[1].style.background = "#A4FFAF";
    levelsVisualBlocks[2].style.background = "#A4FFAF";
    levelsVisualBlocks[3].style.background = "#A4FFAF";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualBlocks[1].style.border = "none";
    levelsVisualBlocks[2].style.border = "none";
    levelsVisualBlocks[3].style.border = "none";
    levelsVisualTitle.textContent = "STRONG";
  }

  //-------------------------------- LowerCase and UpperCase Strings ----------------------------------//

  //------------------------------ LowerCase, UpperCase, numbers and symbol Strings --------------------------------//
  if (
    sliderBar.value <= 5 &&
    lowercaseCheck.checked &&
    uppercaseCheck.checked &&
    numbersCheck.checked &&
    symbolsCheck.checked
  ) {
    levelsVisualBlocks[0].style.background = "#F64A4A";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualTitle.textContent = "TOO WEAK!";
  }
  if (
    sliderBar.value > 5 &&
    sliderBar.value <= 8 &&
    lowercaseCheck.checked &&
    uppercaseCheck.checked &&
    numbersCheck.checked &&
    symbolsCheck.checked
  ) {
    levelsVisualBlocks[0].style.background = "#FB7C58";
    levelsVisualBlocks[1].style.background = "#FB7C58";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualBlocks[1].style.border = "none";
    levelsVisualTitle.textContent = "WEAK";
  }
  if (
    sliderBar.value > 8 &&
    sliderBar.value <= 13 &&
    lowercaseCheck.checked &&
    uppercaseCheck.checked &&
    numbersCheck.checked &&
    symbolsCheck.checked
  ) {
    levelsVisualBlocks[0].style.background = "#F8CD65";
    levelsVisualBlocks[1].style.background = "#F8CD65";
    levelsVisualBlocks[2].style.background = "#F8CD65";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualBlocks[1].style.border = "none";
    levelsVisualBlocks[2].style.border = "none";
    levelsVisualTitle.textContent = "MEDIUM";
  }
  if (
    sliderBar.value > 13 &&
    sliderBar.value <= 18 &&
    lowercaseCheck.checked &&
    uppercaseCheck.checked &&
    numbersCheck.checked &&
    symbolsCheck.checked
  ) {
    levelsVisualBlocks[0].style.background = "#A4FFAF";
    levelsVisualBlocks[1].style.background = "#A4FFAF";
    levelsVisualBlocks[2].style.background = "#A4FFAF";
    levelsVisualBlocks[3].style.background = "#A4FFAF";
    levelsVisualBlocks[0].style.border = "none";
    levelsVisualBlocks[1].style.border = "none";
    levelsVisualBlocks[2].style.border = "none";
    levelsVisualBlocks[3].style.border = "none";
    levelsVisualTitle.textContent = "STRONG";
  }
  //------------------------------ LowerCase, UpperCase, numbers and symbol Strings --------------------------------//
});

function randomPass() {
  generatedPass.classList.remove("empty");
  let allSymbols = "";
  if (uppercaseCheck.checked) {
    allSymbols += upperCase;
  }
  if (lowercaseCheck.checked) {
    allSymbols += lowerCase;
  }
  if (numbersCheck.checked) {
    allSymbols += numbers;
  }
  if (symbolsCheck.checked) {
    allSymbols += symbols;
  }

  if (!uppercaseCheck.checked) {
    allSymbols = allSymbols.replace(upperCase, "");
  }
  if (!lowercaseCheck.checked) {
    allSymbols = allSymbols.replace(lowerCase, "");
  }
  if (!numbersCheck.checked) {
    allSymbols = allSymbols.replace(numbers, "");
  }
  if (!symbolsCheck.checked) {
    allSymbols = allSymbols.replace(symbols, "");
  }

  let pass = "";

  for (let index = 0; index < charactersNumber.textContent; index++) {
    let randomIndex = Math.floor(Math.random() * allSymbols.length);
    pass += allSymbols.charAt(randomIndex);
  }
  generatedPass.textContent = pass;
  if (allSymbols === "") {
    generatedPass.textContent = "Please mark your options";
  }
}

function copyString() {
  navigator.clipboard.writeText(generatedPass.textContent);
}

generateBtn.addEventListener("click", randomPass);
copyBtn.addEventListener("click", copyString);
