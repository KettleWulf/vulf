import { GameObject } from "../objects/GameObject";

export const room1: GameObject[] = [
  new GameObject("floor", 0, 0, 800, 600, 0x64513d, false),

  new GameObject("wall-north", 0, 0, 800, 200, 0x654321, true),

  new GameObject("wall-south", 0, 550, 800, 50, 0x654321, true),

  new GameObject("wall-east", 750, 0, 50, 600, 0x654321, true),

  new GameObject("wall-west", 0, 0, 50, 600, 0x654321, true),
];
