import React from "react";
import { projects } from "../constants";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section id="projects" className="bg-teal-100">
      <div className="InnerSection">
        <h2>
          Projects<span>.</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 auto-rows-fr text-sm md:text-base xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col justify-between p-8 gap-y-4 border-slate-800 border-4 rounded-tr-3xl rounded-bl-3xl">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p>{project.desc}</p>
              <ul className="flex gap-x-4 font-light text-sm items-center justify-between">
                <li>{project.tech[0]}</li>
                <li>{project.tech[1]}</li>
                <li>{project.tech[2]}</li>
                <a href={project.href}>
                <Image
                  src={project.src}
                  alt={project.name}
                  width={30}
                  height={50}
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
