import React from "react";
import Image from "next/image";
import { certificates, skillBadges, socials } from "../constants";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section id="skills" className="">
      <div className="InnerSection">
        <div className="flex flex-col gap-y-8 xl:grid xl:grid-cols-2 auto-rows-fr">
          
          <div className="flex flex-col gap-8">
          <h2>
            Skills<span className="FullStop">.</span>
          </h2>
            <div className="justify-items-center items-center grid grid-cols-3 grid-rows-4 auto-rows-fr gap-4">
              {skillBadges.map((skillBadge) => (
                <Image
                  key={skillBadge.name}
                  src={skillBadge.src}
                  alt={skillBadge.alt}
                  width={50}
                  height={100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
