import { Hero } from "./sections/Hero";
import { Experiences } from "./sections/Experiences";
import { Recommendations } from "./sections/Recommendations";
import { SecondaryCursor } from "./utils/SecondaryCursor";
import { Contact } from "./sections/Contact";

export function App() {
  return (
    <div className="bg-[url(/grainy-gradient.svg)]">
      <SecondaryCursor />
      <div className="relative z-20 bg-[url(/grainy-gradient.svg)]">
        <Hero />
        <Experiences />
        <Recommendations />
        <Contact />
      </div>
    </div>
  );
}
