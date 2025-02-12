const {
  computeSum,
  negativeValuePresentInArray,
  parseInput,
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
    expect(negativeValuePresentInArray([1, 2, 3, 4, 5])).toEqual([]);
  });
  test("returns true since array does not contains any negative value", () => {
    expect(negativeValuePresentInArray([1, 2, -3, 4, 5])).toEqual([-3]);
  });
});

// test to parse userInput
describe("negative value check", () => {
  test("returns the array after parsing the string", () => {
    expect(parseInput("1,\n2,3,4,5")).toEqual([1, 2, 3, 4, 5]);
  });
});
