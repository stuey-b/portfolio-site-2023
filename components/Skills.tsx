import React from "react";
import Image from "next/image";
import { certificates, skillBadges, socials } from "../constants";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section className="bg-blue-100">
      <div className="InnerSection">
        <div className="flex flex-col gap-y-4">
          <h2>
            Skills<span>.</span>
          </h2>
          <div className="justify-items-center items-center grid grid-cols-3 grid-rows-4 gap-4 mb-8">
            {skillBadges.map((skillBadge) => (
              <Image
                key={skillBadge.name}
                src={skillBadge.src}
                alt={skillBadge.alt}
                width={65}
                height={100}
              />
            ))}
          </div>
          <div className="flex flex-col gap-y-4">
            <h2>
              Certs<span>.</span>
            </h2>
            <div className="justify-items-center items-center grid grid-cols-2 gap-4">
                {certificates.map((certificate) => (
                  <>
                  <div>
                  <h3
                    key={certificate.name}
                    className="font-bold">
                    {certificate.title}
                  </h3>
                  <a href="">
                
                      <Image

                      src=""
                      alt="certificate-icon"
                      width={50}
                      height={50}
                      
                      />

                  </a>

                  </div>
                  

                  <Image
                      src={certificate.src}
                      alt={certificate.alt}
                      height={10}
                      width={175} />
                      </>

                ))}
                
      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
