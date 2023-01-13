export function getGrainsSvg(seed = 0) {
  const svgSize = 100;
  const viewboxSize = 50;
  const baseFrequency = 2.5;
  const numOctaves = 2;
  return `url("data:image/svg+xml,%3Csvg width='${svgSize}' height='${svgSize}' viewBox='0 0 ${viewboxSize} ${viewboxSize}' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence seed='${seed}' baseFrequency='${baseFrequency}' numOctaves='${numOctaves}' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E%0A")`;
}
