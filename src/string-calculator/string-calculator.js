const {
  computeSum,
  negativeValuePresentInArray,
  parseInput,
  checkForAplabets,
  changeTONumber,
} = require("../../helper/string-calculator-function/string-calculator-helper");
function add(userInput) {
  // Returns 0 if the input is an empty string
  if (!userInput || !userInput.length) return 0;
  //parsing the userInput
  let inputArray = parseInput(userInput);
  const alphabets = checkForAplabets(inputArray);
  if (alphabets.length) {
    throw new Error(`alphabets are not allowed ${alphabets.join(", ")}`);
  }
  // check for validity of the userInput
  const negativeNumbers = negativeValuePresentInArray(inputArray);
  if (negativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );
  }
  inputArray = changeTONumber(inputArray);
  // returns sumation of all the values
  return computeSum(inputArray);
}
module.exports = add;
