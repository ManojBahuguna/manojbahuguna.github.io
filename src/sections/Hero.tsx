const linkedinHref = "https://linkedin.com/in/BahugunaManoj";
const contactHref = "#contact";

export function Hero() {
  return (
    <div className="bg-lightSecondary bg-opacity-80">
      <div className="container text-center sm:text-left py-24 sm:py-32">
        <h1 className="font-extrabold text-5xl sm:text-6xl text-darkPrimary">
          Manoj <small>Bahuguna</small>
        </h1>

        <p className="text-xl sm:text-4xl sm:font-light sm:max-w-lg text-darkSecondary mt-4 sm:mt-6">
          Engineering an <strong className="font-semibold">awe</strong>spiring
          future for all
        </p>

        <div className="inline-flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-12 sm:text-lg">
          <a
            href={linkedinHref}
            className="BrandButton sm:py-3"
            rel="noreferrer"
            target="_blank"
          >
            Connect on LinkedIn
          </a>

          <a href={contactHref} className="OutlineButton sm:py-3">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
