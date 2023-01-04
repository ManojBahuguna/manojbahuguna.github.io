import { Tab } from "@headlessui/react";

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
    currentTitle: "Senior Software Engineer | Cruise",
    content:
      "Manoj is a well-rounded software engineer who can come up with creative solutions to complex problems and execute on them.\nHe's very productive, learns fast, asks good questions and collaborates well with others. I'm super happy to have him on our team!",
  },
  {
    personName: "Lih Chen",
    personImage:
      "https://media.licdn.com/dms/image/C5603AQGc4Z5o86d8kA/profile-displayphoto-shrink_100_100/0/1602918080951?e=1678320000&v=beta&t=btuBxy_FOE_yRnRcLYy_PRIEXSDwlErNXEjwSun_U3U",
    currentTitle: "Senior Software Engineer | Cruise",
    content:
      "Solid coder all around. Not only can he produce a working product, he asks relevant questions to get a better understanding of how the product should behave.\nI've reviewed many of his pull requests, and I noticed that he also plans a bit ahead to accommodate future requests.",
  },
];

function RecommendationPerson({
  selected,
  recommendation: { personName, currentTitle, personImage },
}: {
  selected: boolean;
  recommendation: Pick<
    typeof recommendationsData[number],
    "personName" | "currentTitle" | "personImage"
  >;
}) {
  return (
    <div
      className={
        "rounded-full text-left p-1 pr-6 flex gap-2 items-center bg-darkPrimary transition-all will-change-transform " +
        (selected ? "bg-opacity-100 shadow-lg" : "bg-opacity-30")
      }
    >
      <img
        className="w-8 h-8 md:w-12 md:h-12 rounded-full"
        src={personImage}
        alt={personName}
      />

      <div>
        <h3 className="text-sm md:text-base text-white">{personName}</h3>
        <p className="text-xs text-lightSecondary">{currentTitle}</p>
      </div>
    </div>
  );
}

function RecommendationMessage({
  recommendation: { personName, content },
}: {
  recommendation: typeof recommendationsData[number];
}) {
  return (
    <div className="RecommendationQuote p-6 md:p-8 bg-darkPrimary text-lightPrimary rounded-lg shadow-lg">
      <blockquote className="whitespace-pre-wrap md:text-lg font-light">
        {content}
      </blockquote>
    </div>
  );
}

export function Recommendations() {
  return (
    <div className="bg-darkPrimary bg-opacity-80">
      <div className="container py-24 sm:py-32">
        <h2 className="text-white mb-20">
          <small className="uppercase">I am </small>
          <span className="text-4xl font-bold block">Recommended by</span>
          <small className="uppercase">awesome people</small>
        </h2>

        <Tab.Group>
          <Tab.List className="flex flex-wrap gap-4 my-4">
            {recommendationsData.map((recommendation) => (
              <Tab key={recommendation.personName}>
                {({ selected }) => (
                  <RecommendationPerson
                    selected={selected}
                    recommendation={recommendation}
                  />
                )}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {recommendationsData.map((recommendation) => (
              <Tab.Panel key={recommendation.personName}>
                <RecommendationMessage recommendation={recommendation} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <p className="mt-10 text-white text-opacity-50">
          View all recommendations on my{" "}
          <a
            href="https://linkedin.com/in/bahugunamanoj#recommendations"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            LinkedIn profile
          </a>
          .
        </p>
      </div>
    </div>
  );
}
