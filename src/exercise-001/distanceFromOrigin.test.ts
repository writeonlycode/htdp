import { expect, test } from "vitest";
import { distanceFromOrigin } from "./distanceFromOrigin";

test("the distance of point (3,4) from the origin should be 5", () => {
  expect(distanceFromOrigin(3, 4)).toBe(5);
});
