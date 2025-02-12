const {
  computeSum,
  negativeValuePresentInArray,
  parseInput,
} = require("../../helper/string-calculator-function/string-calculator-helper");
function add(userInput) {
  // Returns 0 if the input is an empty string
  if (!userInput || !userInput.length) return 0;
  //parsing the userInput
  const inputArray = parseInput(userInput);
  // check for validity of the userInput
  const negativeNumbers = negativeValuePresentInArray(inputArray);
  if (negativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );
  }
  return computeSum(inputArray);
}
module.exports = add;
