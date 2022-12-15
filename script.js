// Variables to Store HTML Elements
let steveImgE1 = document.getElementById("steveP");
let alexImgEl = document.getElementById("alexP");
let fishbtnEl = document.getElementById("button-fish");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("numCod");
let numSalmonEl = document.getElementById("numSal");
let numTropicalE1 = document.getElementById("numTro");
let numPufferEl = document.getElementById("numPuf");

// Global Variables
let character = "Steve";

// Event listener
steveImgE1.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
fishbtnEl.addEventListener("click", fishOnce);

function selectSteve() {
  // Update Active Border
  document.body.style.borderColor = `red`;
  steveImgE1.classList.add("active");
  alexImgEl.classList.remove("active");

  // Update character selection Variable
  character = "Steve;";
}

function selectAlex() {
  // Update Active Border
  document.body.style.borderColor = `red`;
  steveImgE1.classList.remove("active");
  alexImgEl.classList.add("active");

  // Update character selection Variable
  character = "Alex;";
}

function fishOnce() {
  if (character === "Steve") {
    let randNum = Math.random();
    console.log(randNum);
  } else {
    alert("Fish with Alex");
  }
}
