import React from "react";
import Image from "next/image";
import { certificates, skillBadges, socials } from "../constants";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section id="skills" className="">
      <div className="InnerSection">
        <div className="flex flex-col gap-y-16 xl:grid xl:grid-cols-2 auto-rows-fr gap-24">
          
          <div className="flex flex-col gap-8">
          <h2>
            Skills<span>.</span>
          </h2>
            <div className="justify-items-center items-center grid grid-cols-3 grid-rows-4 auto-rows-fr gap-4">
              {skillBadges.map((skillBadge) => (
                <Image
                  key={skillBadge.name}
                  src={skillBadge.src}
                  alt={skillBadge.alt}
                  width={65}
                  height={100}
                  className=""
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
          <h2>
            Certs<span>.</span>
          </h2>
            <div className="grid grid-cols-2 justify-items-center items-center auto-rows-fr gap-4 xl:gap-y-12">
              {certificates.map((certificate) => (
                <>
                  <div key={certificate.name}>
                    <h3 className="font-bold xl:text-xl">
                      {certificate.title}
                    </h3>
                    <div className="flex xl:gap-4">
                      <a
                        href={certificate.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/footer-icons/external-site-icon.svg"
                          alt="certificate-icon"
                          width={50}
                          height={50}
                          className="h-6 mt-4 xl:mt-6 xl:h-10"
                        />
                      </a>
                      <a
                        href={certificate.cert}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/footer-icons/diploma.svg"
                          alt="certificate-icon"
                          width={50}
                          height={50}
                          className="h-6 mt-4 xl:mt-6 xl:h-10"
                        />
                      </a>
                    </div>
                  </div>
                  <a href={certificate.href} target="_blank" rel="noreferrer">
                    <Image
                      src={certificate.src}
                      alt={certificate.alt}
                      height={10}
                      width={200}
                      className="xl:w-64"
                    
                    />
                  </a>
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
