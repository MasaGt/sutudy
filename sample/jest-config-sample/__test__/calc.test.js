import { add, subtract } from "../src/calc";

test("add test", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract test", () => {
  expect(subtract(5, 1)).toBe(4);
});
