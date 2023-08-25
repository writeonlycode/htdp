/**
 * Takes the coordinates x and y of a point, and returns the point's distance
 * from origin.
 */
export function distanceFromOrigin(x: number, y: number): number {
  return Math.hypot(x, y);
}
