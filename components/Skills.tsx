import React from "react";
import Image from "next/image";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section className="bg-blue-100">
      <div className="InnerSection">
        <h2>Skills<span>.</span></h2>
        <div className="justify-items-center items-center grid grid-cols-3 grid-rows-4 gap-4">
          <Image
            src="/logos/next-js-logo.svg"
            alt="next-logo"
            width={75}
            height={100}
          />
          <Image
            src="/logos/react-logo.svg"
            alt="react-logo"
            width={75}
            height={100}
          />
          <Image
            src="/logos/tailwind-css-logo.svg"
            alt="tailwind-logo"
            width={75}
            height={100}
          />
          <Image
            src="/logos/typescript-logo.svg"
            alt="typescript-logo"
            width={75}
            height={100}
          />
          <Image
            src="/logos/javascript-logo.svg"
            alt="javascript-logo"
            width={75}
            height={100}
          />
          <Image
            src="/logos/python-logo.svg"
            alt="python-logo"
            width={75}
            height={100}
          />
          <Image
            src="/logos/html-logo.svg"
            alt="html-logo"
            width={75}
            height={100}
          />
          <Image
            src="/logos/css-logo.svg"
            alt="css-logo"
            width={75}
            height={100}
          />
          <Image
            src="/logos/node-js-logo.svg"
            alt="node-js-logo"
            width={75}
            height={100}
          />
          <Image
            src="/logos/express-js-logo.svg"
            alt="express-js-logo"
            width={75}
            height={100}
          />
          <Image
            src="/logos/mongodb-logo.svg"
            alt="mongodb-logo"
            width={75}
            height={100}
          />
          <Image
            src="/logos/github-logo.svg"
            alt="github-logo"
            width={75}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
