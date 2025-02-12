const add = require("../../src/string-calculator/string-calculator");
test("returns 0 when the user input is empty string", () => {
  expect(add("")).toBe(0);
});
