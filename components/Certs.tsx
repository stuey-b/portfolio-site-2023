import React from 'react'
import Image from "next/image";
import { certificates, socials, skillBadges } from "../constants";

type Props = {}

const Certs = (props: Props) => {
  return (
    <section id='certs'>
      <div className="InnerSection">
    <h2>Certs<span className="FullStop">.</span></h2>
      <div className="grid grid-cols-2 justify-items-center items-center auto-rows-fr gap-4 xl:gap-y-12">
        {certificates.map((certificate) => (
          <>
            <div key={certificate.name}>
              <h3>
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
                width={150}
                className="xl:w-64"
              
              />
            </a>
          </>
        ))}
      </div>

    </div>

    </section>

    
  )
}

export default Certs