import { InteractableObject } from "./InteractableObject";

export class Item extends InteractableObject {
  public itemId: string;

  constructor(
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
    itemId: string,
    locked: boolean,
  ) {
    super(id, x, y, width, height, color, locked);
    this.itemId = itemId;
  }
}
