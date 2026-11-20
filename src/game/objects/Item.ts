import { GameObject } from "./GameObject";

export class Item extends GameObject {
  public itemId: string;

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
}
