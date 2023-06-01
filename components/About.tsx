import React from "react";
import Image from "next/image";
import { certificates } from "../constants";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about" className="">
      <div className="InnerSection">
        <h2>
          About Me<span className="FullStop">.</span>
        </h2>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 items-center ">
          <Image
            className="border-4 border-white rounded-3xl mx-auto lg:w-64"
            src="/profile-pic.JPG"
            alt="profile-pic"
            width={125}
            height={100}
          />
          <div className="flex flex-col gap-y-8">
          <p >
            In 2022 I made the decision to become a developer. I was ready for
            a new challenge and eager to leave behind my life as an English teacher.
            Nervous?&nbsp; Naturally.&nbsp; Excited?&nbsp; TOTALLY!
          </p>
          <p >
            Over the past year, I&apos;ve completed 2 programming bootcamps. I
            started my coding journey with{" "}
            <a href={certificates[1].href} target="_blank" rel="noreferrer">
              <strong>
                {certificates[1].title}
                {". "}
              </strong>
            </a>
            I love Python! It&apos;s a pleasure to read and write. This course
            contained a short front-end section which I really enjoyed, leading
            me to{" "}
            <a href={certificates[0].href} target="_blank" rel="noreferrer">
              <strong>{certificates[0].title}.</strong>
            </a>
          </p>
          <p >
            I&apos;m currently building up my portfolio, feel free to check out
            my projects{" "}
            <a href="#projects">
              <strong>HERE.</strong>
            </a>
          </p>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
