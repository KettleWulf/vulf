export const setKeys = (signal: AbortSignal) => {
  const keys = new Set<string>();

  const handleKeyDown = (event: KeyboardEvent) => {
    keys.add(event.key.toLowerCase());
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    keys.delete(event.key.toLowerCase());
  };

  window.addEventListener("keydown", handleKeyDown, { signal });
  window.addEventListener("keyup", handleKeyUp, { signal });

  window.addEventListener("blur", () => keys.clear(), { signal });

  return keys;
};
