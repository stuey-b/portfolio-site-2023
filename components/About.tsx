import React from "react";
import Image from "next/image";
import { certificates } from "../constants/constants";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about" className="bg-teal-100">
      <div className="InnerSection">
        <h2>
          About Me<span>.</span>
        </h2>
        <div className=" flex flex-col justify-center items-center gap-8">
          <Image
            className=" border-8 border-white rounded-3xl"
            src="/profile-pic.JPG"
            alt="profile-pic"
            width={200}
            height={200}
          />
          <p>
            In 2022, I made the decision to become a developer. I was ready for
            a new challenge at the age of 35. <br />
            Nervous? Naturally. Excited? TOTALLY!
          </p>
          <p>
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
          <p>
            I&apos;m currently building up my portfolio, feel free to check out
            my projects{" "}
            <a href="#projects">
              <strong>HERE.</strong>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
