import { InteractableObject } from "./InteractableObject";
import type { Player } from "./Player";

export class Item extends InteractableObject {
  public itemId: string;
  public collected: boolean = false;

  constructor(
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
    itemId: string,
  ) {
    super(id, x, y, width, height, color);
    this.itemId = itemId;
  }

  interact(player: Player) {
    this.collected = true;
    player.inventory.push(this.itemId);

    console.log(`Collected item: ${this.itemId}`);
  }
}
