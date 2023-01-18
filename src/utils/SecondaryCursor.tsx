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
        "w-px h-px absolute left-0 top-0 z-10 rounded-full blur " +
        "shadow-[12px_16px_32px_10px_#0006] group-active:shadow-[0px_0px_20px_10px_#000f] " +
        "[&:has(+*>.LargeCursor:hover)]:shadow-[0_0_160px_56px_#0008] sm:[&:has(+div>.LargeCursor:hover)]:shadow-[0_0_240px_112px_#000a] [&:has(+*>.LargeCursor:hover)]:duration-[2s] " + // in some sections show large secondary-cursor
        "transition-all will-change-transform ease-out duration-200 "
      }
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
    />
  );
}
