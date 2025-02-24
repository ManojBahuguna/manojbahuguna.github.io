import { Hero } from "./sections/Hero";
import { Experiences } from "./sections/Experiences";
import { Recommendations } from "./sections/Recommendations";
import { Contact } from "./sections/Contact";
import { SecondaryCursor } from "./utils/SecondaryCursor";
import { getGrainsSvg } from "./utils/getGrainsSvg";

function CreatorBanner() {
  return (
    <p className="from-[#911c] to-[#114a] bg-gradient-to-b text-white shadow-2xl text-center py-4 font-extralight italic text-opacity-60 hover:text-opacity-100 transition-colors cursor-default print:text-xs print:py-2">
      <span className="hidden print:inline">
        <a href="https://monob.in" className="text-white">
          monob.in
        </a>{" "}
        -{" "}
      </span>
      Designed and developed by <strong>Manoj Bahuguna</strong>.{" "}
      <span className="animate-ping inline-block not-italic">💓</span>
    </p>
  );
}

export function App() {
  return (
    <div className="group" style={{ backgroundImage: getGrainsSvg() }}>
      <SecondaryCursor />
      <div
        className="relative z-20"
        style={{ backgroundImage: getGrainsSvg(1) }}
      >
        <Hero />
        <Experiences />
        <Recommendations />
        <Contact />

        <CreatorBanner />
      </div>
    </div>
  );
}
