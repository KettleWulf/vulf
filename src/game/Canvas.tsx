import { Application, Graphics } from "pixi.js";
import { useEffect, useRef } from "react";
import { room1 } from "./rooms/room1";

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

      const player = new Graphics();
      player.rect(0, 0, 30, 30);
      player.fill(0x00ff00);

      player.position.set(400, 300);

      app.stage.addChild(player);

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
        const speed = 3 * ticker.deltaTime;

        if (keys.has("w")) {
          player.y -= speed;
        }

        if (keys.has("s")) {
          player.y += speed;
        }

        if (keys.has("a")) {
          player.x -= speed;
        }

        if (keys.has("d")) {
          player.x += speed;
        }
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
