const add = require("../../src/string-calculator/string-calculator");
test("returns 0 when the user input is empty string", () => {
  expect(add("")).toBe(0);
});
test("returns sumation of string with multiple input value", () => {
  expect(add("1,2,3")).toBe(6);
});
