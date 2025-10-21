"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { string } from "zod";
interface sponsorsProps {
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    name: "POWERFUL THAILAND",
  },
  {

    name: "POWERFUL THAILAND",
  },
  {

    name: "POWERFUL THAILAND",
  },
  {

    name: "POWERFUL THAILAND",
  },
  {

    name: "POWERFUL THAILAND",
  },
  {

    name: "POWERFUL THAILAND",
  },
  {

    name: "POWERFUL THAILAND",
  },
];

interface sponsorsPropstwo {
  name: string;
}

const sponsorsTwo: sponsorsPropstwo[] = [
  {
    name: "THAILANDING",
  },
  {

    name: "THAILANDING",
  },
  {

    name: "THAILANDING",
  },
  {

    name: "THAILANDING",
  },
  {
    name: "THAILANDING",
  },
  {
    name: "THAILANDING",
  },
  {
    name: "THAILANDING",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">

      {/* Marquee 1st */}

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-5xl font-medium"
            >
              {name}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee 2nd */}

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-5xl font-medium"
            >
              {name}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee 3rd */}

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-5xl font-medium"
            >
              {name}
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
};
