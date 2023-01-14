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
        "w-px h-px absolute rounded-full shadow-[10px_14px_32px_10px_#0005] group-active:shadow-[0px_0px_20px_10px_#000f] blur " +
        "transition-transform will-change-transform ease-out duration-200 "
      }
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
    />
  );
}
