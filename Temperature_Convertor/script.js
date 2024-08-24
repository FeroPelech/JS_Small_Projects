const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function computeTemp(e) {
  const currentValue = +e.target.value;

  switch (e.target.name) {
    case "celsius":
      kelvin.value = currentValue + 273.15;
      fahrenheit.value = currentValue * 1.8 + 32;
      break;
    case "fahrenheit":
      kelvin.value = (currentValue - 32) / 1.8 + 273.15;
      celsius.value = (currentValue - 32) / 1.8;

    default:
      break;
  }
}
