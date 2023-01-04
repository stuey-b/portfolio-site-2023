import { time } from "console";
import React from "react";
import Image from "next/image";

type Props = {};

const currentYear = new Date().getFullYear()

const Footer = (props: Props) => {
  return (
    <section className="px-14 flex flex-col justify-center bg-emerald-100 h-screen">
      <div className="flex flex-col justify-center h-1/4 gap-y-8">
        <div className="flex justify-evenly">
          <a href="">
          <Image
          src="/footer-icons/mail-icon.svg"
          alt="mail-icon"
          width={50}
          height={50}
          />
          </a>
          <a href="">
          <Image
          src="/footer-icons/linkedin-icon.svg"
          alt="mail-icon"
          width={50}
          height={50}
          />
          </a>
          <a href="">
          <Image
          src="/footer-icons/github-icon.svg"
          alt="mail-icon"
          width={50}
          height={50}
          />
          </a>
          <a href="">
          <Image
          src="/footer-icons/resume-icon.svg"
          alt="mail-icon"
          width={50}
          height={50}
          />
          </a>
          <a href="">
          <Image
          src="/footer-icons/youtube-icon.svg"
          alt="mail-icon"
          width={50}
          height={50}
          />
          </a>
        </div>
        <div className="h-0.5 w-full rounded-full bg-slate-700"></div>

   
        <p> © Stuart Bartlett {currentYear}</p>
      </div>
    </section>
  );
};

export default Footer;
