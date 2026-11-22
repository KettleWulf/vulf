import type { Passage } from "../objects/Passage";

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const isColliding = (a: Rect, b: Rect): boolean => {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
};

export const tryMove = (
  nextOnAxis: number,
  axis: "x" | "y",
  player: Rect,
  obstacles: Rect[],
  passages: Passage[],
) => {
  const nextPosition: Rect = {
    x: player.x,
    y: player.y,
    width: player.width,
    height: player.height,
  };

  nextPosition[axis] = nextOnAxis;

  const collides = obstacles.some((obstacle) =>
    isColliding(nextPosition, obstacle),
  );

  const passThrough = passages.some(
    (passage) => !passage.locked && isColliding(nextPosition, passage),
  );

  if (!collides || passThrough) {
    player[axis] = nextOnAxis;
  }
};
