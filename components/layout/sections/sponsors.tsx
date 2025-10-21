"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface Sponsor {
  name: string;
}

const sponsors: Sponsor[] = [
  { name: "POWERFUL THAILAND" },
  { name: "POWERFUL THAILAND" },
  { name: "POWERFUL THAILAND" },
  { name: "POWERFUL THAILAND" },
  { name: "POWERFUL THAILAND" },
  { name: "POWERFUL THAILAND" },
];

const sponsorsTwo: Sponsor[] = [
  { name: "THAILANDING" },
  { name: "THAILANDING" },
  { name: "THAILANDING" },
  { name: "THAILANDING" },
  { name: "THAILANDING" },
];

const sponsorsThree: Sponsor[] = [
  { name: "THAILAND OUTSTANDING" },
  { name: "THAILAND OUTSTANDING" },
  { name: "THAILAND OUTSTANDING" },
  { name: "THAILAND OUTSTANDING" },
  { name: "THAILAND OUTSTANDING" },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32 space-y-8">
      
      {/* Marquee 1 */}
      <div className="mx-auto">
        <Marquee className="gap-[3rem]" fade innerClassName="gap-[3rem]" pauseOnHover>
          {sponsors.map(({ name }, i) => (
            <div key={i} className="flex items-center text-xl md:text-5xl font-medium">
              {name}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee 2 */}
      <div className="mx-auto">
        <Marquee className="gap-[3rem]" fade innerClassName="gap-[3rem]" pauseOnHover>
          {sponsorsTwo.map(({ name }, i) => (
            <div key={i} className="flex items-center text-xl md:text-5xl font-medium">
              {name}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee 3 */}
      <div className="mx-auto">
        <Marquee className="gap-[3rem]" fade innerClassName="gap-[3rem]" pauseOnHover>
          {sponsorsThree.map(({ name }, i) => (
            <div key={i} className="flex items-center text-xl md:text-5xl font-medium">
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
