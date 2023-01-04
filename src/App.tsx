import { Hero } from "./sections/Hero";
import { Experiences } from "./sections/Experiences";
import { Recommendations } from "./sections/Recommendations";

export function App() {
  return (
    <div className="bg-[url(grainy-gradient.svg)] bg-fixed">
      <Hero />
      <Experiences />
      <Recommendations />
    </div>
  );
}
