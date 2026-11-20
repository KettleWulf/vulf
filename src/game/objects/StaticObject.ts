import { GameObject } from "./GameObject";

export class StaticObject extends GameObject {
  public collidable: boolean;
  constructor(
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
    collidable: boolean,
  ) {
    super(id, x, y, width, height, color);
    this.collidable = collidable;
  }
}
