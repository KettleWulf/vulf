import { Application, Graphics } from "pixi.js";
import { useEffect, useRef } from "react";
import { room1 } from "./rooms/room1";
import { tryMove } from "./systems/collisions";
import { Player } from "./objects/Player";

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

      room1.forEach((object) => {
        const graphic = new Graphics();

        graphic.rect(0, 0, object.width, object.height);
        graphic.fill(object.color);

        graphic.position.set(object.x, object.y);

        app.stage.addChild(graphic);
      });

      const obstacles = room1.filter((object) => object.collidable);

      const player = new Player("player", 400, 300, 30, 30, 0x00ff00, true);
      const playerGraphic = new Graphics();
      playerGraphic.rect(0, 0, player.width, player.height);
      playerGraphic.fill(player.color);
      playerGraphic.position.set(player.x, player.y);

      app.stage.addChild(playerGraphic);

      const keys = new Set<string>();

      const handleKeyDown = (event: KeyboardEvent) => {
        keys.add(event.key.toLowerCase());
      };

      const handleKeyUp = (event: KeyboardEvent) => {
        keys.delete(event.key.toLowerCase());
      };

      window.addEventListener("keydown", handleKeyDown, {
        signal: controller.signal,
      });

      window.addEventListener("keyup", handleKeyUp, {
        signal: controller.signal,
      });

      app.ticker.add((ticker) => {
        const speed = player.speed * ticker.deltaTime;

        if (keys.has("w")) {
          tryMove(player.y - speed, "y", player, obstacles);
        }

        if (keys.has("s")) {
          tryMove(player.y + speed, "y", player, obstacles);
        }

        if (keys.has("a")) {
          tryMove(player.x - speed, "x", player, obstacles);
        }

        if (keys.has("d")) {
          tryMove(player.x + speed, "x", player, obstacles);
        }

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
