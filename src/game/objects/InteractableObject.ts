import { GameObject } from "./GameObject";
import type { Player } from "./Player";

export abstract class InteractableObject extends GameObject {
  public interactionRange = 20;

  get actionArea() {
    return {
      x: this.x - this.interactionRange,
      y: this.y - this.interactionRange,
      width: this.width + this.interactionRange * 2,
      height: this.height + this.interactionRange * 2,
    };
  }

  abstract interact(player: Player): void;

  constructor(
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
    collidable: boolean = false,
  ) {
    super(id, x, y, width, height, color, collidable);
  }
}
