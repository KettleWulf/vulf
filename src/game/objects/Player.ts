import { GameObject } from "./GameObject";

export class Player extends GameObject {
  public baseSpeed = 3;
  public speedMultiplier = 1;

  public inventory: string[] = [];

  get speed() {
    return this.baseSpeed * this.speedMultiplier;
  }
}
