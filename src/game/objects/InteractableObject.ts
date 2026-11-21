import { GameObject } from "./GameObject";

export abstract class InteractableObject extends GameObject {
  public locked: boolean;
  public interactionRange = 20;

  get actionArea() {
    return {
      x: this.x - this.interactionRange,
      y: this.y - this.interactionRange,
      width: this.width + this.interactionRange * 2,
      height: this.height + this.interactionRange * 2,
    };
  }

  abstract interact(): void;

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
