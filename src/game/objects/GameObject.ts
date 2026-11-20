export class GameObject {
  public id: string;
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public color: number;

  constructor(
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    color: number,
  ) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
}
