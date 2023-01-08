import { MouseEvent, useRef, useState } from "react";

/* ref: https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56 */
function clamp(input: number, min: number, max: number): number {
  return input < min ? min : input > max ? max : input;
}
function mapRange(
  current: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
): number {
  const mapped: number =
    ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  return clamp(mapped, out_min, out_max);
}

type MouseData = { x: number; y: number; width: number; height: number };
function getTransform({ x, y, width, height }: MouseData, factor = 8) {
  const rotateY = mapRange(x, 0, width, -factor, factor);
  const rotateX = -mapRange(y, 0, height, -factor, factor);

  return `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

export function useFollowCursor() {
  const [mouseData, setMouseData] = useState<MouseData | null>(null);

  const lastMousePosSetTime = useRef<number | null>(null);
  const handleContainerMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const THROTTLE_MS = 50;
    const currentTime = Date.now();
    const prevTime = lastMousePosSetTime.current;

    if (prevTime && currentTime - prevTime <= THROTTLE_MS) return;

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    setMouseData({ x: e.clientX - left, y: e.clientY - top, width, height });
    lastMousePosSetTime.current = currentTime;
  };

  return {
    handleContainerMouseMove,
    className:
      "will-change-transform duration-[2.5s] ease-out transition-transform Preserve3D",
    style: mouseData ? { transform: getTransform(mouseData) } : undefined,
  };
}
