const {
  computeSum,
} = require("../../helper/string-calculator-function/string-calculator-helper");
const { delimiter } = require("../../constant/string-constant");
function add(userInput) {
  // Returns 0 if the input is an empty string
  if (!userInput || !userInput.length) return 0;
  // Split numbers and convert to integers
  const numArray = userInput.split(delimiter).map(Number);
  return computeSum(numArray);
}
module.exports = add;
