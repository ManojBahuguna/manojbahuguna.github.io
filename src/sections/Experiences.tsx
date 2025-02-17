const experiencesData = [
  {
    image: "orgs/cruise.png",
    title: "Senior Software Engineer - AI",
    company: "Cruise LLC",
    duration: "2024 - 2025",
    labels: [
      "Full-Stack",
      "Architecture",
      "React.js",
      "Node.js",
      "Typescript",
      "GraphQL",
      "PostgreSQL",
      "Prisma",
      "tRPC",
      "Data Visualization",
      "Tailwind CSS",
      "BigQuery",
      "Docker",
      "Three.js",
      "GCP",
    ],
    descriptions: [
      "Developed DataExplorer, a sophisticated platform for visualizing and analyzing data from diverse sources, featuring pivot tables, dynamic filtering, sorting, aggregations, grouping, conditional formatting, custom cell rendering, and interactive charting.",
      "Developed a docs editor with markdown support, real-time preview, and embedded React components to enhance document creation and collaboration.",
      "Engineered a GIF export feature to generate animations from time-series data visualizations, enhancing data storytelling capabilities.",
      "Packaged Data Explorer as a reusable library, enabling seamless integration across multiple projects and improving development efficiency.",
      "Implemented a File Explorer feature for managing and browsing documentation efficiently within the platform.",
      "Collaborated across teams to define new feature requirements, resolve critical bugs, and provide ongoing technical support to improve system stability and user experience.",
    ],
  },
  {
    image: "orgs/datapeace.jpg",
    title: "Chief Technology Officer (Fractional CTO)",
    company: "DataPeace AI Technologies",
    duration: "2024 - present",
    labels: [
      "Leadership",
      "Product Management",
      "Research",
      "AI",
      "Computer Vision",
      "Full-Stack",
      "Architecture",
      "Next.js",
      "React.js",
      "Node.js",
      "Typescript",
      "LLMs",
      "PostgreSQL",
      "GraphQL",
    ],
    descriptions: [
      "Spearheaded innovation by brainstorming, researching, and prototyping new product ideas, successfully leading one from concept to production launch.",
      "Led development for a text and audio-based AI agent using LLMs, Text-To-Speech (TTS), Automatic Speech Recognition (ASR), RAG, Web Scraping, and more.",
      "Mentored and led the tech team, managed the product roadmap, and collaborated with stakeholders to align the tech with business goals.",
    ],
  },
  {
    image: "orgs/cimet.jpg",
    title: "Senior Software Engineer",
    company: "CIMET",
    duration: "2023 - 2024",
    labels: [
      "AI",
      "Full-Stack",
      "Architecture",
      "Next.js",
      "React.js",
      "Node.js",
      "Typescript",
      "LLMs",
      "PostgreSQL",
      "GraphQL",
      "TTS (Text to speech)",
      "ASR (Automatic speech recognition)",
    ],
    descriptions: [
      "Managed and mentored an international tech team, conducting code reviews and establishing best development practices and processes.",
      "Developed text and audio-based AI agent using technologies like Large Language Models (LLM), Text-To-Speech (TTS), Automatic Speech Recognition (ASR) and more.",
      "Architected and managed web applications for plans comparison utilizing Next.js, React, Node.js, PostgreSQL, Elasticsearch, Docker, and other cutting-edge technologies.",
    ],
  },
  {
    image: "orgs/flytbase.webp",
    title: "Senior Software Engineer",
    company: "FlytBase",
    duration: "2023",
    labels: [
      "Full-Stack",
      "Architecture",
      "Angular",
      "Node.js",
      "Typescript",
      "MongoDB",
      "AWS",
      "CSS",
      "Drones",
    ],
    descriptions: [
      "Worked on revamp of frontend and backend architecture to improve scalability, user experience and developer experience.",
      "Built POCs using different technologies including WebSockets, MQTT, Angular and more to help with the architecture decisions.",
      "Guided the team toward following best development practices to build more resilient products.",
    ],
  },
  {
    image: "orgs/cruise.png",
    title: "Full-Stack Engineer",
    company: "Cruise LLC",
    duration: "2022",
    labels: [
      "Full-Stack",
      "React.js",
      "Node.js",
      "Typescript",
      "GraphQL",
      "PostgreSQL",
      "Prisma",
      "Data Visualization",
      "Tailwind CSS",
      "BigQuery",
      "CSS",
    ],
    descriptions: [
      "Worked on a web application to monitor and diagnose various events that occur when an autonomous vehicle is on the road.",
      "Got appreciated by the team for my productivity, ability to learn fast, collaboration with others, planning ahead, and ensuring good development experience by following the best coding standards.",
      "Collaborated with different teams to collect feedback and requirements for introducing new features to the application.",
    ],
  },
  {
    image: "orgs/datapeace.jpg",
    title: "Senior Software Engineer",
    company: "DataPeace AI Technologies",
    duration: "2018 - 2022",
    labels: [
      "Frontend",
      "IoT",
      "Research",
      "Prototyping",
      "React.js",
      "Typescript",
      "Next.js",
      "CSS",
      "Node.js",
      "Azure",
      "DevOps",
      "AWS",
      "Raspberry PI",
      "Gstreamer",
      "AI",
      "Sensors",
      "UI/UX",
    ],
    descriptions: [
      "Performed diverse activities during front-end and full-stack development, IoT, research, and prototyping.",
      "Managed and mentored a front-end team of up to 10 members. Led IoT projects and researched and created quick prototypes for new features and products.",
      "Helped the company explore and expand to new domains. Created prototypes on IoT, AI, ML, Bluetooth, human detection sensors, image processing, video processing, and computer vision to introduce new products or features to existing products.",
    ],
  },
  {
    image: "orgs/blueant.jfif",
    title: "Web Developer",
    company: "BlueAnt Digital Intelligence",
    duration: "2017 - 2018",
    labels: [
      "Frontend",
      "Javascript",
      "CSS",
      "Creative Programming",
      "Wordpress",
      "PHP",
      "MySQL",
      "UI/UX",
      "HTML Canvas",
      "Three.js",
      "Matter.js",
      "CSS Animations",
    ],
    descriptions: [
      "Developed beautiful portfolio microsites involving creative programming and working on responsiveness, 3D model rendering on the web, HTML canvas, and physics engines.",
      "Revamped the UI/UX of an existing WordPress site, precisely following the designs while ensuring responsiveness, animations, SEO guidelines, and performance.",
      "Improved the site performance, optimizing caching, architecture, and DB queries to improve the site's initial load time and overall experience.",
    ],
  },
  {
    image: "orgs/mousebelly.jfif",
    title: "Technical Co-Founder",
    company: "Mousebelly",
    duration: "2016 - 2017",
    labels: [
      "IoT",
      "Full-Stack",
      "Arduino",
      "Sensors",
      "Electronics",
      "Node.js",
      "Angular.js",
      "Javascript",
      "Java",
      "Websockets",
      "HTML Canvas",
      "Drones",
    ],
    descriptions: [
      "Built an Arduino-based quadcopter drone. Developed a Java application to remotely control the drone via Bluetooth and a web application to remotely control it from the web, using AngularJS 1, Node.js, and Socket.IO.",
      "Worked on sensors for the quadcopter drone, including the accelerometer, gyro, barometer (pressure sensor for height), GPS, and Bluetooth and GSM modules.",
      "Developed a tool that used Google Geolocation APIs to plot coordinates for the working radius of delivery persons on the map.",
    ],
  },
];

function ExperienceItem({
  experience,
}: {
  experience: (typeof experiencesData)[number];
}) {
  const { image, title, company, duration, labels, descriptions } = experience;

  return (
    <div className="relative whitespace-pre-wrap sm:flex gap-4 items-start">
      <div className="hidden sm:block w-px h-full absolute top-0 left-10 bg-darkSecondary shadow" />

      <div className="relative inline-block rounded-full overflow-hidden p-4 bg-white flex-shrink-0">
        <img
          className="block w-12 h-12 object-contain"
          src={image}
          alt={company}
        />
      </div>

      <div className="relative inline-grid gap-6">
        <div className="text-gray-200">
          <h2>{title}</h2>
          <h3 className="font-semibold sm:text-xl text-gray-100">{company}</h3>
          <p className="text-sm text-gray-400">{duration}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 flex-1 flex-shrink-0">
          {labels.map((label) => (
            <h4
              className="bg-darkPrimary bg-opacity-50 text-gray-300 py-px sm:py-1 px-2 sm:px-4 rounded text-xs sm:text-sm"
              key={label}
            >
              {label}
            </h4>
          ))}
        </div>

        <ul>
          {descriptions.map((text) => (
            <li
              key={text}
              className="text-gray-300 font-light text-sm sm:text-base max-w-2xl mb-3 sm:list-disc"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experiences() {
  return (
    <div id="Experiences" className="bg-darkPrimary bg-opacity-80">
      <div className="container py-24 sm:py-32">
        <h2 className="text-white mb-20">
          <small className="uppercase">The amazing </small>
          <span className="FontFancy text-3xl sm:text-5xl font-bold block">
            Experiences
          </span>
          <small className="uppercase"> I have had</small>
        </h2>

        <div className="grid gap-20">
          {experiencesData.map((experience) => (
            <ExperienceItem
              key={experience.title + experience.company + experience.duration}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
