import { InteractableObject } from "./InteractableObject";
import type { Player } from "./Player";

export class Passage extends InteractableObject {
  public locked: boolean;
  public requiredItemId: string;

  constructor(
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
    collidable: boolean,
    locked: boolean,
    requiredItemId: string,
  ) {
    super(id, x, y, width, height, color, collidable);

    this.locked = locked;
    this.requiredItemId = requiredItemId;
  }

  interact(player: Player): void {
    if (player.inventory.includes(this.requiredItemId)) {
      this.locked = false;
    }
  }
}
