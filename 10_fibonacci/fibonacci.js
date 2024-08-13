const fibonacci = function (n) {
  let count = n;
  if (typeof n === "string") count = parseInt(n);
  if (count < 0) return "OOPS";
  if (count === 1) return 1;

  let pastNum = 0;
  let lastNum = 1;
  let current = 0;

  for (let i = 2; i <= count; i++) {
    current = pastNum + lastNum;
    pastNum = lastNum;
    lastNum = current;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
