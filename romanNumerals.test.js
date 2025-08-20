import { test, expect } from "vitest";

function romanNumerals(number) {
  let result = "";

  if (number - 5 >= 0) {
    result += "V";
    number -= 5;
  }
  if (number - 4 >= 0) {
    result += "IV";
    number -= 4;
  }

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

test("5 in roman numerals is IV", () => {
  expect(romanNumerals(5)).toBe("V");
});

test("6 in roman numerals is IV", () => {
  expect(romanNumerals(6)).toBe("VI");
});

test("7 in roman numerals is IV", () => {
  expect(romanNumerals(7)).toBe("VII");
});
