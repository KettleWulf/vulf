export class GameObject {
  public id: string;
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public color: number;
  public collidable: boolean;

  constructor(
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
    collidable: boolean = false,
  ) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.collidable = collidable;
  }
}
