const palindromes = function (string) {
  const clearedString = string.replace(/[^A-z0-9]/g, "").toLowerCase();
  const reversedString = clearedString.split("").reverse().join("");
  return clearedString === reversedString ? true : false;
};
// Do not edit below this line
module.exports = palindromes;
