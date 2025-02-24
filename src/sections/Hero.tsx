const linkedinHref = "https://linkedin.com/in/BahugunaManoj";
const contactHref = "#contact";

function PrintDetails() {
  return (
    <div className="hidden print:block text-gray-200 text-sm">
      <div className="text-xl">
        <a href="https://monob.in" rel="noreferrer" target="_blank">
          monob.in
        </a>
      </div>

      <div>
        <a href={linkedinHref} rel="noreferrer" target="_blank">
          {linkedinHref.replace("https://", "")}
        </a>
      </div>

      <div>
        <a href="mailto:manojbahugunamanoj@gmail.com">
          ManojBahugunaManoj@gmail.com
        </a>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="bg-red bg-opacity-60 md:bg-opacity-70 LargeCursor">
      <div className="container text-center sm:text-left py-24 sm:py-32">
        <h1 className="FontFancy font-extrabold text-5xl sm:text-7xl md:text-8xl text-white print:text-4xl print:sm:text-4xl print:md:text-4xl">
          Manoj <span className="text-[.75em] print:text-4xl">Bahuguna</span>
        </h1>

        <p className="text-xl sm:text-4xl sm:font-light sm:max-w-lg text-lightPrimary mt-4 sm:mt-6 print:hidden">
          Engineering an <strong className="font-semibold">awe</strong>spiring
          future for all
        </p>

        <div className="inline-flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-12 sm:text-lg print:hidden">
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

        <PrintDetails />
      </div>
    </div>
  );
}
