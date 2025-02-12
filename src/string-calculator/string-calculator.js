const {
  computeSum,
  isNegativeValuePresentInArray,
  parseInput,
} = require("../../helper/string-calculator-function/string-calculator-helper");
function add(userInput) {
  // Returns 0 if the input is an empty string
  if (!userInput || !userInput.length) return 0;
  //parsing the userInput
  const inputArray = parseInput(userInput);
  // check for validity of the userInput
  if (isNegativeValuePresentInArray(inputArray)) {
    throw new Error("userInput cannot contain negative value");
  }
  return computeSum(inputArray);
}
module.exports = add;
