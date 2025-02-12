function computeSum(nums) {
  return nums.reduce((sum, curr) => sum + curr, 0);
}
module.exports = { computeSum };
