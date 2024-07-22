const removeFromArray = function (array, ...values) {
  return array.filter((el) => !values.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
