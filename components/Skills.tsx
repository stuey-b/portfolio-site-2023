import React from "react";
import Image from "next/image";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section className="px-14 flex flex-col justify-center bg-blue-100 h-screen">
      <div className=" flex flex-col justify-center h-2/3 gap-4">
        <h2 className="text-4xl font-black text-slate-800">
          Skills<span className="text-pink-500">.</span>
        </h2>
        <div className=" justify-items-center items-center grid grid-cols-3 grid-rows-4 gap-4">
          <Image
            src="/logos/next-js-logo.svg"
            alt="react-logo"
            width={100}
            height={100}
          />
          <Image
            src="/logos/react-logo.svg"
            alt="react-logo"
            width={100}
            height={100}
          />
          <Image
            src="/logos/tailwind-css-logo.svg"
            alt="tailwind-logo"
            width={100}
            height={100}
          />
          <Image
            src="/logos/typescript-logo.svg"
            alt="typescript-logo"
            width={100}
            height={100}
          />
          <Image
            src="/logos/javascript-logo.svg"
            alt="javascript-logo"
            width={100}
            height={100}
          />
          <Image
            src="/logos/python-logo.svg"
            alt="python-logo"
            width={100}
            height={100}
          />
          <Image
            src="/logos/html-logo.svg"
            alt="html-logo"
            width={100}
            height={100}
          />
          <Image
            src="/logos/css-logo.svg"
            alt="css-logo"
            width={100}
            height={100}
          />
          <Image
            src="/logos/node-js-logo.svg"
            alt="node-js-logo"
            width={100}
            height={100}
          />
          <Image
            src="/logos/express-js-logo.svg"
            alt="express-js-logo"
            width={100}
            height={100}
          />
          <Image
            src="/logos/mongodb-logo.svg"
            alt="mongodb-logo"
            width={100}
            height={100}
          />
          <Image
            src="/logos/github-logo.svg"
            alt="github-logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
