const sumAll = function (arg1, arg2) {
  const argNegative = arg1 < 0 || arg2 < 0;
  const nonInteger = !Number.isInteger(arg1) || !Number.isInteger(arg2);
  if (argNegative || nonInteger) {
    return "ERROR";
  }

  let start = 0;
  let end = 0;

  if (arg1 < arg2) {
    start = arg1;
    end = arg2;
  } else {
    start = arg2;
    end = arg1;
  }

  const interval = [];
  for (let i = start; i <= end; i++) {
    interval.push(i);
  }
  return interval.reduce((a, b) => a + b);
};

// Do not edit below this line
module.exports = sumAll;
