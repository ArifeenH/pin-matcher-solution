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
