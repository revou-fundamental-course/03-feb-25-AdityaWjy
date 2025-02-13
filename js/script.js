// Read input field value on console
let input = document.getElementById("input");

input.addEventListener("input", function () {
  console.log(this.value);
});

// create variable temperature
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let reamur = document.getElementById("reamur");
let kelvin = document.getElementById("kelvin");

// set default value to 0
fahrenheit.innerText = "0";
reamur.innerText = "0";
kelvin.innerText = "0";

// conversion methods
conversion = () => {
  let celsius = parseFloat(input.value);

  if (isNaN(celsius)) {
    celsius = 0;
  }

  // conversion logic
  fahrenheit = (celsius * 9) / 5 + 32;
  reamur = (celsius * 4) / 5;
  kelvin = parseInt(celsius) + 273.15;

  // show result
  document.getElementById("fahrenheit").innerHTML = fahrenheit;
  document.getElementById("reamur").innerHTML = reamur;
  document.getElementById("kelvin").innerHTML = kelvin;
};

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
