import { isNumber } from "../src/validates";

describe("isNumber", () => {
  test("Verify isNumber method returns true", () => {
    expect(isNumber(1)).toBe(true);
  });

  test("Verify isNumber method throws is not number", () => {
    expect(() => isNumber("a")).toThrow("a is not a number");
  });

  test("Verify isNumber method throws error must be exist", () => {
    expect(() => isNumber(undefined)).toThrow("number must be exist");
  });
});
