import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

function sum(a: number, b: number): number {
  return a + b;
}

test("adds 2+3 should be equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});

// export default sum;
