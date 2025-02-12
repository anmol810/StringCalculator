const {
  computeSum,
  isNegativeValuePresentInArray,
} = require("../../../helper/string-calculator-function/string-calculator-helper"); // Adjust path as needed

// test to find the sum of the array
describe("computeSum", () => {
  test("returns the sum of multiple positive numbers", () => {
    expect(computeSum([1, 2, 3, 4, 5])).toBe(15);
  });
});

// test to find the negative value in the array
describe("negative value check", () => {
  test("returns false since array does not contains any negative value", () => {
    expect(isNegativeValuePresentInArray([1, 2, 3, 4, 5])).toBe(false);
  });
  test("returns true since array does not contains any negative value", () => {
    expect(isNegativeValuePresentInArray([1, 2, -3, 4, 5])).toBe(true);
  });
});
