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
  return computeSum(inputArray);
}
module.exports = add;
