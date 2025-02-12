const {
  computeSum,
} = require("../../../helper/string-calculator-function/string-calculator-helper"); // Adjust path as needed

describe("computeSum", () => {
  test("returns the sum of multiple positive numbers", () => {
    expect(computeSum([1, 2, 3, 4, 5])).toBe(15);
  });
});
