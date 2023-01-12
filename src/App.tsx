import { Hero } from "./sections/Hero";
import { Experiences } from "./sections/Experiences";
import { Recommendations } from "./sections/Recommendations";
import { SecondaryCursor } from "./utils/SecondaryCursor";
import { Contact } from "./sections/Contact";

function CreatorBanner() {
  return (
    <p className="from-[#911c] to-[#114a] bg-gradient-to-b text-white shadow-2xl text-center py-4 font-extralight italic text-opacity-60 hover:text-opacity-100 transition-colors cursor-default">
      Designed and developed by <strong>Manoj Bahuguna</strong>.{" "}
      <span className="animate-ping inline-block not-italic">💓</span>
    </p>
  );
}

export function App() {
  return (
    <div className="bg-[url(/grainy-gradient.svg)]">
      <SecondaryCursor />
      <div className="relative z-20 bg-[url(/grainy-gradient.svg)]">
        <Hero />
        <Experiences />
        <Recommendations />
        <Contact />

        <CreatorBanner />
      </div>
    </div>
  );
}
