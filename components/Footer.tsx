import React from "react";
import Image from "next/image";
import { socials } from "../constants";


type Props = {};

const currentYear = new Date().getFullYear();

const Footer = (props: Props) => {
  return (
    <section id="footer" className="">
      <div className="InnerSection">
        <div className="flex justify-evenly">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.name != "email" ? "_blank" : "_self"}
              rel="noreferrer"
            >
              <Image
                key={social.name}
                src={social.src}
                alt={social.alt}
                width={35}
                height={35}
              />
            </a>
          ))}
        </div>
        <div className="h-0.5 w-full bg-white"></div>
        <p className="text-xs"> © Stuart Bartlett {currentYear}</p>
      </div>
    </section>
  );
};

export default Footer;
