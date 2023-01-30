import React from "react";
import Image from "next/image";
import { certificates, skillBadges, socials } from "../constants";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section id="skills" className="bg-blue-100">
      <div className="InnerSection">
        <div className="lg:grid grid-cols-2 justify-center items-center auto-rows-fr">
          <h2>
            Skills<span>.</span>
          </h2>
          <div className="">
            <div className="justify-items-center items-center grid grid-cols-3 grid-rows-4 gap-4">
              {skillBadges.map((skillBadge) => (
                <Image
                  key={skillBadge.name}
                  src={skillBadge.src}
                  alt={skillBadge.alt}
                  width={65}
                  height={100}
                  className="lg:w-20"
                />
              ))}
            </div>
          </div>
          <h2 className="col-start-2 sm:mt-8">
            Certs<span>.</span>
          </h2>
          <div className="col-start-1 row-start-2">
            <div className="justify-items-center items-start grid grid-cols-2 gap-4">
              {certificates.map((certificate) => (
                <>
                  <div>
                    <h3 key={certificate.name} className="font-bold p-2">
                      {certificate.title}
                    </h3>
                    <div className="flex">
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
                          className="h-6 mt-1"
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
                          className="h-6 mt-1"
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
                      className="pt-2"
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
