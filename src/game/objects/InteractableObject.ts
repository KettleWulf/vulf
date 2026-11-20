import { GameObject } from "./GameObject";

export class Door extends GameObject {
  public locked: boolean;
  constructor(
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
    locked: boolean,
  ) {
    super(id, x, y, width, height, color);
    this.locked = locked;
  }
}
