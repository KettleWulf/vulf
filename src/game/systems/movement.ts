import { isColliding, type Rect } from "./collisions";

export const tryMove = (
  nextOnAxis: number,
  axis: "x" | "y",
  player: Rect,
  obstacles: Rect[],
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

  if (!collides) {
    player[axis] = nextOnAxis;
  }
};
