function computeSum(nums) {
  return nums.reduce((sum, curr) => sum + curr, 0);
}
function negativeValuePresentInArray(nums) {
  const negativeNumberArray = nums.filter((num) => num < 0);
  if (!negativeNumberArray.length) return negativeNumberArray;
  else return negativeNumberArray;
}
function checkForAplabets(nums) {
  let alphabets = [];
  for (const char of nums) {
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      alphabets.push(char);
    }
  }
  return alphabets;
}
function changeTONumber(nums) {
  return nums.map((num) => Number(num));
}
function parseInput(userInput) {
  let numbersStr = userInput;
  let delimiter = ",";
  // Check if the string starts with "//[delimiter]\n"
  const customDelimiterMatch = userInput.match(/^\/\/(.+)\n/);
  if (customDelimiterMatch) {
    delimiter = customDelimiterMatch[1]; // Extract delimiter
    numbersStr = userInput.slice(customDelimiterMatch[0].length); // Remove delimiter declaration
  }

  return numbersStr
    .split(delimiter)
    .map((str) => str.trim()) // Trim spaces/newlines
    .filter((str) => str !== ""); // Remove empty values
}
module.exports = {
  computeSum,
  negativeValuePresentInArray,
  parseInput,
  checkForAplabets,
  changeTONumber,
};
