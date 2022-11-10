// Variables to Store HTML Elements
let steveImgE1 = document.getElementById("steveP");
let alexImgEl = document.getElementById("alexP");
let fishbtnEl = document.getElementById("button-fish");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("numCod");
let numSalmonEl = document.getElementById("numSal");
let numTropicalE1 = document.getElementById("numTro");
let numPufferEl = document.getElementById("numPuf");

// Event listener
steveImgE1.addEventListener("click", selectSteve);

function selectSteve() {
  document.body.style.borderColor = `red`;
}
