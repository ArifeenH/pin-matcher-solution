function getPin() {
  const generatePinNumber = Math.round(Math.random() * 10000);
  const generatePinString = generatePinNumber + "";
  if (generatePinString.length == 4) {
    return generatePinNumber;
  } else {
    return getPin();
  }
}

function generatePin() {
  const generatedPin = getPin();
  document.getElementById("display-pin").value = generatedPin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("typed-numbers");
  const previousNumber = calcInput.value;
  const newNumber = previousNumber + number;
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    calcInput.value = newNumber;
  }
});

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  const failMessage = document.getElementById("notify-fail");
  const successMessage = document.getElementById("notify-success");
  if (pin == typedNumbers) {
    successMessage.style.display = "block";
    failMessage.style.display = "none";
  } else {
    failMessage.style.display = "block";
    successMessage.style.display = "none";
  }
}
