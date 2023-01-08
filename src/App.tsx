import { Hero } from "./sections/Hero";
import { Experiences } from "./sections/Experiences";
import { Recommendations } from "./sections/Recommendations";
import { SecondaryCursor } from "./utils/SecondaryCursor";

export function App() {
  return (
    <div className="bg-[url(grainy-gradient.svg)] bg-fixed">
      <SecondaryCursor />
      <div className="relative z-20">
        <Hero />
        <Experiences />
        <Recommendations />
      </div>
    </div>
  );
}
