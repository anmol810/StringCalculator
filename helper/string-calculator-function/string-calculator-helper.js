function computeSum(nums) {
  return nums.reduce((sum, curr) => sum + curr, 0);
}
function isNegativeValuePresentInArray(nums) {
  const negativeNumberArray = nums.filter((num) => num < 0);
  if (!negativeNumberArray.length) return false;
  else return true;
}
module.exports = { computeSum, isNegativeValuePresentInArray };
