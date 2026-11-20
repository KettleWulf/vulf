import type { GameObject } from "../types";

export const room1: GameObject[] = [
  {
    id: "floor",
    x: 0,
    y: 0,
    width: 800,
    height: 600,
    color: 0x64513d,
    collidable: false,
  },
  {
    id: "wall-north",
    x: 0,
    y: 0,
    width: 800,
    height: 200,
    color: 0x654321,
    collidable: true,
  },
  {
    id: "wall-south",
    x: 0,
    y: 550,
    width: 800,
    height: 50,
    color: 0x654321,
    collidable: true,
  },
  {
    id: "wall-east",
    x: 750,
    y: 0,
    width: 50,
    height: 600,
    color: 0x654321,
    collidable: true,
  },
  {
    id: "wall-west",
    x: 0,
    y: 0,
    width: 50,
    height: 600,
    color: 0x654321,
    collidable: true,
  },
];
