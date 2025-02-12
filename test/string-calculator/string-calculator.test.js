const add = require("../../src/string-calculator/string-calculator");
test("returns 0 when the user input is empty string", () => {
  expect(add("")).toBe(0);
});
test("returns sumation of string with multiple input value", () => {
  expect(add("1,2,3")).toBe(6);
});
test("returns sumation of string with delimetre like , and \n", () => {
  expect(add("1,2,\n3")).toBe(6);
});
test("throws an errror if the userInput contains negative value", () => {
  try {
    add("1,-2,\n3");
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe("negative numbers not allowed -2");
  }
});
test("returns sumation of string with delimetre and starting with //", () => {
  expect(add("//;\n1;2")).toBe(3);
});
