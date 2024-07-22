const convertToCelsius = function (fahrenheitTemp) {
  const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
  if (!Number.isInteger(celsiusTemp)) {
    return Number(celsiusTemp.toFixed(1));
  }
  return celsiusTemp;
};

const convertToFahrenheit = function (celsiusTemp) {
  const fahrenheitTemp = celsiusTemp * (9 / 5) + 32;
  if (!Number.isInteger(fahrenheitTemp)) {
    return Number(fahrenheitTemp.toFixed(1));
  }
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
