// Counter
function tickUp() {
  let Counter = Number(document.getElementById("counter").textContent);
  document.getElementById("counter").textContent = Counter + 1;
}

function tickDown() {
  let Counter = Number(document.getElementById("counter").textContent);
  document.getElementById("counter").textContent = Counter - 1;
}

// For Loop
function runForLoop() {
  let Counter = Number(document.getElementById("counter").textContent);
  let Result = [];

  for (let i = 0; i <= Counter; i++) {
    Result.push(i);
  }

  document.getElementById("forLoopResult").textContent = Result.join(", ");
}

// Conditional For Loop
function showOddNumbers() {
  let Counter = Number(document.getElementById("counter").textContent);
  let Result = [];

  for (let i = 1; i <= Counter; i += 2) {
    Result.push(i);
  }

  document.getElementById("oddNumberResult").textContent = Result.join(", ");
}

// Array
function addMultiplesToArray() {
  let Counter = Number(document.getElementById("counter").textContent);
  let Result = [];

  for (let i = Counter; i >= 5; i--) {
    if (i % 5 === 0) {
      Result.push(i);
    }
  }

  console.log(Result);
}

// Car Print
function printCarObject() {
  let Type = document.getElementById("carType").value;
  let MPG = document.getElementById("carMPG").value;
  let Color = document.getElementById("carColor").value;

  console.log({ cType: Type, cMPG: MPG, cColor: Color });
}

// Load Car
function loadCar(n) {
  let Car = null;

  if (n === 1) Car = carObject1;
  if (n === 2) Car = carObject2;
  if (n === 3) Car = carObject3;

  document.getElementById("carType").value = Car.cType;
  document.getElementById("carMPG").value = Car.cMPG;
  document.getElementById("carColor").value = Car.cColor;
}

// Color Change
function changeColor(n) {
  let P = document.getElementById("styleParagraph");

  if (n === 1) P.style.color = "red";
  if (n === 2) P.style.color = "green";
  if (n === 3) P.style.color = "blue";
}
