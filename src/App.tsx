import { Hero } from "./sections/Hero";
import { Experiences } from "./sections/Experiences";

export function App() {
  return (
    <div className="bg-[url(grainy-gradient.svg)] bg-fixed">
      <Hero />
      <Experiences />
    </div>
  );
}
