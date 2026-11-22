import { Application, Graphics } from "pixi.js";
import { useEffect, useRef } from "react";
import { room1 } from "./rooms/room1";
import { isColliding, tryMove } from "./systems/collisions";
import { Player } from "./objects/Player";
import { setKeys } from "./systems/controls";
import { InteractableObject } from "./objects/InteractableObject";
import type { GameObject } from "./objects/GameObject";
import { Item } from "./objects/Item";
import { Passage } from "./objects/Passage";

export const Canvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const app = new Application();
    let disposed = false;

    const controller = new AbortController();

    const initGame = async () => {
      await app.init({
        width: 800,
        height: 600,
        backgroundColor: 0x242424,
      });

      if (disposed) {
        app.destroy();
        return;
      }

      const graphics = new Map<GameObject, Graphics>();

      room1.forEach((object) => {
        const graphic = new Graphics();

        graphic.rect(0, 0, object.width, object.height);
        graphic.fill(object.color);
        graphic.position.set(object.x, object.y);

        app.stage.addChild(graphic);

        graphics.set(object, graphic);
      });

      const obstacles = room1.filter((object) => object.collidable);
      const interactables = room1.filter(
        (object) => object instanceof InteractableObject,
      );
      const passages = room1.filter((object) => object instanceof Passage);

      const player = new Player("player", 400, 300, 30, 30, 0x00ff00, true);
      const playerGraphic = new Graphics();
      playerGraphic.rect(0, 0, player.width, player.height);
      playerGraphic.fill(player.color);
      playerGraphic.position.set(player.x, player.y);

      app.stage.addChild(playerGraphic);

      const keys = setKeys(controller.signal);

      app.ticker.add((ticker) => {
        const speed = player.speed * ticker.deltaTime;

        if (keys.has("w")) {
          tryMove(player.y - speed, "y", player, obstacles, passages);
        }

        if (keys.has("s")) {
          tryMove(player.y + speed, "y", player, obstacles, passages);
        }

        if (keys.has("a")) {
          tryMove(player.x - speed, "x", player, obstacles, passages);
        }

        if (keys.has("d")) {
          tryMove(player.x + speed, "x", player, obstacles, passages);
        }

        if (keys.has("e")) {
          interactables.forEach((object) => {
            if (isColliding(player, object.actionArea)) {
              object.interact(player);
            }
          });
        }

        room1.forEach((object) => {
          if (object instanceof Item) {
            const graphic = graphics.get(object);

            if (graphic) {
              graphic.visible = !object.collected;
            }
          }
        });

        playerGraphic.position.set(player.x, player.y);
      });

      container.appendChild(app.canvas);
    };

    void initGame();

    return () => {
      disposed = true;
      controller.abort();

      if (app.renderer) {
        app.destroy();
      }
    };
  }, []);

  return <div ref={containerRef} />;
};
