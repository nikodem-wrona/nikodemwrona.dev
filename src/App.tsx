import React, { useEffect, useRef, useState } from "react";
import "./App.scss";

const PLAYER_SIZE = 40;
const SPEED = 5;

type DirectionKey =
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "w"
  | "a"
  | "s"
  | "d";

const directions: Record<DirectionKey, { x: number; y: number }> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  w: { x: 0, y: -1 },
  s: { x: 0, y: 1 },
  a: { x: -1, y: 0 },
  d: { x: 1, y: 0 },
};

const getInitialPosition = () => ({
  x: window.innerWidth / 2 - PLAYER_SIZE / 2,
  y: window.innerHeight / 2 - PLAYER_SIZE / 2,
});

function App() {
  const [player, setPlayer] = useState(getInitialPosition());
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const keys = useRef<{ [key in DirectionKey]?: boolean }>({});

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      setPlayer((prev) => ({
        x: Math.min(Math.max(prev.x, 0), window.innerWidth - PLAYER_SIZE),
        y: Math.min(Math.max(prev.y, 0), window.innerHeight - PLAYER_SIZE),
      }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key in directions) {
        keys.current[e.key as DirectionKey] = true;
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key in directions) {
        keys.current[e.key as DirectionKey] = false;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    let animationFrame: number;
    const move = () => {
      let dx = 0,
        dy = 0;
      (Object.keys(keys.current) as DirectionKey[]).forEach((key) => {
        if (keys.current[key]) {
          dx += directions[key].x;
          dy += directions[key].y;
        }
      });
      if (dx !== 0 || dy !== 0) {
        setPlayer((prev) => {
          let newX = prev.x + dx * SPEED;
          let newY = prev.y + dy * SPEED;
          // Collision with walls
          newX = Math.max(0, Math.min(newX, windowSize.width - PLAYER_SIZE));
          newY = Math.max(0, Math.min(newY, windowSize.height - PLAYER_SIZE));
          return { x: newX, y: newY };
        });
      }
      animationFrame = requestAnimationFrame(move);
    };
    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
    // eslint-disable-next-line
  }, [windowSize]);

  return (
    <div className="game-area">
      <div
        className="player"
        style={{
          left: player.x,
          top: player.y,
          width: PLAYER_SIZE,
          height: PLAYER_SIZE,
        }}
      />
    </div>
  );
}

export default App;
