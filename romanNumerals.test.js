import { test, expect } from "vitest";

function romanNumerals(number) {
  let result = "";
  for (let i = 0; i < number; i++) {
    result += "I";
  }

  return result;
}

test("1 in roman numerals is I", () => {
  expect(romanNumerals(1)).toBe("I");
});

test("2 in roman numerals is II", () => {
  expect(romanNumerals(2)).toBe("II");
});

test("3 in roman numerals is III", () => {
  expect(romanNumerals(3)).toBe("III");
});

test("4 in roman numerals is IV", () => {
  expect(romanNumerals(4)).toBe("IV");
});
