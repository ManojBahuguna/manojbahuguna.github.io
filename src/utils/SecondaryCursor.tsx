import { useEffect, useState } from "react";

const THROTTLE_MS = 50;
const SIZE = 20;
const HALF_SIZE = SIZE / 2;
export function SecondaryCursor() {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    let lastSetTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastSetTime <= THROTTLE_MS) return;
      setPosition({ x: e.pageX - HALF_SIZE, y: e.pageY - HALF_SIZE });
      lastSetTime = currentTime;
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={
        "absolute bg-black rounded-full drop-shadow-2xl shadow-[0_0_40px_40px_#000] blur-3xl " +
        "transition-transform will-change-transform ease-out duration-1000 "
      }
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
        width: SIZE,
        height: SIZE,
      }}
    />
  );
}
