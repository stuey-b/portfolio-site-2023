import React from "react";
import { projects } from "../constants";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section id="projects" className="">
      <div className="InnerSection">
        <h2>
          Projects<span className="FullStop">.</span>
        </h2>
        
        <div className="grid grid-cols-1 gap-3 md:gap-8 auto-rows-fr md:text-base xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col justify-between p-4 gap-y-4 border-white border-4 rounded-tr-3xl rounded-bl-3xl">
              <h3 >{project.title}</h3>
              <p>{project.desc}</p>
              <ul className="flex font-light text-xs items-center justify-around mx-4 md:mx-16 xl:mx-0">
                <li>{project.tech[0]}</li>
                <li>{project.tech[1]}</li>
                <li>{project.tech[2]}</li>
                <a href={project.href}target="_blank" rel="noreferrer">
                <Image
                  src={project.src}
                  alt={project.title}
                  width={20}
                  height={30}
                />
              </a>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
