import { add } from "./calculator";

describe("String Calculator", () => {
  // Step 1: Basic tests
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  // Step 2: Handle any amount of numbers
  test("should handle any amount of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  // Step 3: Handle new lines between numbers
  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  // Step 4: Support different delimiters
  test("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  // Step 5: Exception for negative numbers
  test("should throw an exception for negative numbers", () => {
    expect(() => add("-1,2")).toThrow("negative numbers not allowed -1");
  });

  test("should show all negative numbers in the exception message", () => {
    expect(() => add("2,-4,3,-5")).toThrow(
      "negative numbers not allowed -4,-5"
    );
  });

  // Step 6: Ignore numbers bigger than 1000
  test("should ignore numbers bigger than 1000", () => {
    expect(add("2,1001")).toBe(2);
  });

  test("should add numbers at the boundary of 1000", () => {
    expect(add("1000,2")).toBe(1002);
  });

  // Step 7: Delimiters of any length
  test("should handle delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  // Step 8: Multiple delimiters
  test("should allow multiple delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  // Step 9: Multiple delimiters with length longer than one char
  test("should handle multiple delimiters with length longer than one character", () => {
    expect(add("//[**][%%]\n1**2%%3")).toBe(6);
  });
});
