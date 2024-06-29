const links = [
  { title: "LinkedIn", href: "https://linkedin.com/in/BahugunaManoj" },
  { title: "Github", href: "https://github.com/ManojBahuguna" },
  { title: "CodePen", href: "https://codepen.io/ManojBahuguna" },
  { title: "Toptal", href: "https://toptal.com/resume/manoj-bahuguna" },
];

export function Contact() {
  return (
    <div
      id="contact"
      className="bg-red bg-opacity-60 md:bg-opacity-70 LargeCursor"
    >
      <div className="container py-24 sm:py-32 pb-32 sm:pb-48">
        <h2 className="text-white mb-20">
          <small className="uppercase">Ways to </small>
          <span className="FontFancy text-3xl sm:text-5xl font-bold block">
            Connect
          </span>
          <small className="uppercase"> with me</small>
        </h2>

        <ul className="grid gap-2 text-accent place-items-start my-12">
          {links.map(({ title, href }) => (
            <li key={title}>
              <a
                className="text-xl sm:text-3xl block bg-accent text-white font-light py-2 px-6 rounded-sm transition-transform hover:translate-x-1"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {title} &#8599;
              </a>
            </li>
          ))}
        </ul>

        <div>
          <p>
            <a
              className="inline-block sm:text-2xl text-lightPrimary hover:text-white my-2 underline decoration-dotted decoration-4 break-all"
              href="mailto:manojbahugunamanoj@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              manojbahugunamanoj@gmail.com
            </a>
          </p>

          <p className="text-white text-opacity-70 text-sm sm:text-lg my-4">
            India
          </p>
        </div>
      </div>
    </div>
  );
}
