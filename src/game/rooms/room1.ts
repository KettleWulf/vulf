import { GameObject } from "../objects/GameObject";
import { StaticObject } from "../objects/StaticObject";

export const room1: GameObject[] = [
  new StaticObject("floor", 0, 0, 800, 600, 0x64513d, false),

  new StaticObject("wall-north", 0, 0, 800, 200, 0x654321, true),

  new StaticObject("wall-south", 0, 550, 800, 50, 0x654321, true),

  new StaticObject("wall-east", 750, 0, 50, 600, 0x654321, true),

  new StaticObject("wall-west", 0, 0, 50, 600, 0x654321, true),
];
