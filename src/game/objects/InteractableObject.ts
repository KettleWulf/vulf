import { GameObject } from "./GameObject";

export class InteractableObject extends GameObject {
  public locked: boolean;
  public interactionRange = 20;

  get actionArea() {
    return {
      x: this.x - this.interactionRange,
      y: this.y - this.interactionRange,
      width: this.interactionRange * 2,
      height: this.interactionRange * 2,
    };
  }

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
