import { time } from "console";
import React from "react";
import Image from "next/image";

type Props = {};

const currentYear = new Date().getFullYear()

const Footer = (props: Props) => {
  return (
    <section className="bg-emerald-100">
      <div className="InnerSection">
        <div className="flex justify-evenly">
          <a href="#contact">
          <Image
          src="/footer-icons/mail-icon.svg"
          alt="mail-icon"
          width={50}
          height={50}
          />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/stuart-bartlett1/">
          <Image
          src="/footer-icons/linkedin-icon.svg"
          alt="mail-icon"
          width={50}
          height={50}
          />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/stuey-b">
          <Image
          src="/footer-icons/github-icon.svg"
          alt="mail-icon"
          width={50}
          height={50}
          />
          </a>
          <a target="_blank" rel="noreferrer" href="/sb-cv-2023.pdf">
          <Image
          src="/footer-icons/resume-icon.svg"
          alt="mail-icon"
          width={50}
          height={50}
          />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/CrystalWaveMachine">
          <Image
          src="/footer-icons/youtube-icon.svg"
          alt="mail-icon"
          width={50}
          height={50}
          />
          </a>
        </div>
        <div className="h-0.5 w-full rounded-full bg-slate-900"></div>

   
        <p> © Stuart Bartlett {currentYear}</p>
      </div>
    </section>
  );
};

export default Footer;
