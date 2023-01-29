import React from "react";
import Image from "next/image";
import { certificates, skillBadges, socials } from "../constants/constants";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section id="skills" className="bg-blue-100">
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
                  <a href="">
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
