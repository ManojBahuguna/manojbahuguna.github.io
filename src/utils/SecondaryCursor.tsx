import { useEffect, useState } from "react";

const THROTTLE_MS = 50;
export function SecondaryCursor() {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    let lastSetTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastSetTime <= THROTTLE_MS) return;
      setPosition({ x: e.pageX, y: e.pageY });
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
        "w-px h-px absolute rounded-full shadow-[0_0_160px_56px_#0008] md:shadow-[0_0_240px_112px_#000a] " +
        "transition-transform will-change-transform ease-out duration-[2s] "
      }
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
    />
  );
}
