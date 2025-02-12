const { delimiter } = require("../../constant/string-constant");

function computeSum(nums) {
  return nums.reduce((sum, curr) => sum + curr, 0);
}
function isNegativeValuePresentInArray(nums) {
  const negativeNumberArray = nums.filter((num) => num < 0);
  if (!negativeNumberArray.length) return false;
  else return true;
}
function parseInput(userInput) {
  return userInput
    .split(delimiter)
    .filter((value) => {
      return value.length > 0;
    })
    .map((value) => {
      return Number(value);
    });
}
module.exports = { computeSum, isNegativeValuePresentInArray, parseInput };
