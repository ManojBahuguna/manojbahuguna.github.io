import { Tab } from "@headlessui/react";
import { useFollowCursor } from "../utils/useFollowCursor";

const recommendationsData = [
  {
    personName: "Vasudev Vashisht",
    personImage:
      "https://media.licdn.com/dms/image/C5603AQHoECVbVfx0jw/profile-displayphoto-shrink_100_100/0/1616763453655?e=1678320000&v=beta&t=5WHKbszgHukUANl1SgLo0chOcT62-Mzn2KER4Q92vSo",
    currentTitle: "Data Scientist at VMware | Ex-MouseBelly",
    content:
      "Manoj is a very strong asset to any team he joins. He has a knack for picking up new technologies easily and is a brilliant problem solver. His tenacity and determination is praiseworthy. Also, he is a great team player and gets along with everyone.\nHis go getter attitude will take him places and set him apart everywhere he goes. I wish him all the best in what he does.",
  },
  {
    personName: "Audrey Li",
    personImage:
      "https://media.licdn.com/dms/image/C5603AQE8rltBsFP6QQ/profile-displayphoto-shrink_100_100/0/1516514879381?e=1678320000&v=beta&t=wIJJ8ObNTkFR41GQxNpd0OZgiJ0PE3-IauuJiV1elto",
    currentTitle: "Software Engineer | Cruise",
    content:
      "Manoj is a well-rounded software engineer who can come up with creative solutions to complex problems and execute on them.\nHe's very productive, learns fast, asks good questions and collaborates well with others. I'm super happy to have him on our team!",
  },
  {
    personName: "Vibhanshu Chaturvedi",
    personImage:
      "https://media.licdn.com/dms/image/C4D03AQFdyjQOF8arCw/profile-displayphoto-shrink_100_100/0/1650812505646?e=1678320000&v=beta&t=fzNdmZtrLr00q3LH-u-GGGbjoELZSWU_NyikiH7-40Y",
    currentTitle: "Software Engineer at OLX | Ex-DataPeace",
    content:
      "He has great understanding of the Javascript ecosystem. It ranges from vanilajs to react to react native to nodejs. Primarily he played the role of Frontend Engineer but has very good grasp on every aspect related to Product creation from the tech perspective. All in all a total nerd with great attention on details and good experience of execution.",
  },
  {
    personName: "Lih Chen",
    personImage:
      "https://media.licdn.com/dms/image/C5603AQGc4Z5o86d8kA/profile-displayphoto-shrink_100_100/0/1602918080951?e=1678320000&v=beta&t=btuBxy_FOE_yRnRcLYy_PRIEXSDwlErNXEjwSun_U3U",
    currentTitle: "Software Engineer | Cruise",
    content:
      "Solid coder all around. Not only can he produce a working product, he asks relevant questions to get a better understanding of how the product should behave.\nI've reviewed many of his pull requests, and I noticed that he also plans a bit ahead to accommodate future requests.",
  },
  {
    personName: "Arjun Jassal",
    personImage:
      "https://media.licdn.com/dms/image/C5603AQES1_fLDDgWFA/profile-displayphoto-shrink_100_100/0/1535116653710?e=1678320000&v=beta&t=UsQq-tX1VD9Yzmbs6QpTLItSxE3CvFC5nFB-OVH5Z_E",
    currentTitle: "Program Lead at Google | Ex-BlueAnt",
    content:
      "I was very impressed with Manoj's work at BlueAnt. During a very short time, he was able to create microsites, models and other web and mobile projects. He was also a team player and an absolute pleasure to work with. Any teams that works with Manoj will be lucky to have him.",
  },
  {
    personName: "Sahil Malhan",
    personImage:
      "https://media.licdn.com/dms/image/C5103AQFd02qX3xE1Tw/profile-displayphoto-shrink_100_100/0/1521972784249?e=1678320000&v=beta&t=tnxFvBQn5wCUuxnbf8KcLGCKC-Zn50cCBGWJZSZoitc",
    currentTitle: "Founder at Tessernaut | Ex-BlueAnt",
    content:
      "It was hard finding a good front end developer for us until we met Manoj. He proved to be bright and sharp which are qualities that you seek in every team member but what struck me was his eagerness to learn new things and tread waters unknown. His abilities as a detail-oriented developer and appetite for knowledge were refreshing to see and for that, he earns my highest recommendation.",
  },
  {
    personName: "Aditya Pranav",
    personImage:
      "https://media.licdn.com/dms/image/C4D03AQEcrufyAMNWTg/profile-displayphoto-shrink_100_100/0/1663252583349?e=1678320000&v=beta&t=LFQVJQbJ2K7ggw0FM8v8R3Fu4d7r1sG2onH_ISuY9f0",
    currentTitle: "Engineering VP at Antino | Ex-MouseBelly",
    content:
      "Manoj is one of the best among all the people I have ever worked with. He was a very productive person, hardworking, broad-minded and forward-thinking individual.\nMost importantly, he's result-oriented, responsible and a technically sound employee and who's always ready to put all his energy and time to get the job done.\nHe has exceptional analytical skill and in-depth knowledge of JavaScript. The desire for proficiency and education makes Manoj a valuable asset to the team. Working with him is a signature of success.",
  },
];

function RecommendationPerson({
  selected,
  recommendation: { personName, currentTitle, personImage },
  minimal, // in list, only show icon in small screens
}: {
  selected: boolean;
  recommendation: Pick<
    typeof recommendationsData[number],
    "personName" | "currentTitle" | "personImage"
  >;
  minimal?: boolean;
}) {
  return (
    <div
      className={
        "rounded-full text-left p-1 flex gap-2 items-center bg-darkSecondary transition-all will-change-transform " +
        (minimal ? "md:pr-6 " : "pr-6 ") +
        (selected
          ? "bg-opacity-100 shadow-lg -translate-y-0.5"
          : "bg-opacity-30")
      }
    >
      <img
        className="w-8 h-8 md:w-12 md:h-12 rounded-full"
        src={personImage}
        alt={personName}
      />

      <div className={minimal ? "hidden md:block" : ""}>
        <h3 className="text-sm md:text-base text-white">{personName}</h3>
        <p className="text-xs text-lightSecondary">{currentTitle}</p>
      </div>
    </div>
  );
}

function RecommendationMessage({
  recommendation,
}: {
  recommendation: typeof recommendationsData[number];
}) {
  return (
    <div
      className="relative pt-8 bg-darkPrimary bg-opacity-80 text-lightPrimary rounded-xl shadow-lg"
      style={{ transform: "translateZ(100px)" }}
    >
      <div
        className="absolute -top-5 sm:left-7"
        style={{ transform: "translateZ(80px)" }}
      >
        <RecommendationPerson selected recommendation={recommendation} />
      </div>

      <div className="RecommendationQuote p-6 md:p-8">
        <blockquote
          className="whitespace-pre-wrap md:text-lg font-light"
          style={{ transform: "translateZ(100px)" }}
        >
          {recommendation.content}
        </blockquote>
      </div>
    </div>
  );
}

export function Recommendations() {
  const followCursor = useFollowCursor();

  return (
    <div
      onMouseMove={followCursor.handleContainerMouseMove}
      className="bg-darkSecondary bg-opacity-70"
    >
      <div className="container py-24 sm:py-32">
        <h2 className="text-white mb-20">
          <small className="uppercase">I am </small>
          <span className="FontFancy text-3xl sm:text-5xl font-bold block">
            Recommended by
          </span>
          <small className="uppercase"> awesome people</small>
        </h2>

        <Tab.Group>
          <Tab.Panels>
            {recommendationsData.map((recommendation) => (
              <Tab.Panel
                className={
                  "bg-darkPrimary bg-opacity-30 shadow rounded-xl " +
                  followCursor.className
                }
                style={followCursor.style}
                key={recommendation.personName}
              >
                <RecommendationMessage recommendation={recommendation} />
              </Tab.Panel>
            ))}
          </Tab.Panels>

          <Tab.List className="flex flex-wrap gap-2 md:gap-4 my-8">
            {recommendationsData.map((recommendation) => (
              <Tab key={recommendation.personName}>
                {({ selected }) => (
                  <RecommendationPerson
                    selected={selected}
                    recommendation={recommendation}
                    minimal
                  />
                )}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>

        <p className="mt-10 text-white text-opacity-50">
          View all recommendations on{" "}
          <a
            href="https://linkedin.com/in/bahugunamanoj#recommendations"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
