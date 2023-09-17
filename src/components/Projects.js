import { CodeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { projects } from "../data";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeProject, setActiveProject] = useState(null); // To track the active project

  const filterProjects = (category) => {
    if (category === "ALL") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.categories.includes(category)
      );
      setFilteredProjects(filtered);
    }
    setActiveCategory(category);
  };

  const toggleProjectDetails = (project) => {
    // Toggle the project details visibility
    if (activeProject === project) {
      setActiveProject(null);
    } else {
      setActiveProject(project);
    }
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My coding projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            "As a developer, my coding projects showcase my ability to tackle complex challenges, implement innovative solutions, and deliver exceptional user experiences that leave a lasting impact."
          </p>
        </div>
        <div className="flex mb-4">
          {/* Add category buttons here */}
          <button
            onClick={() => filterProjects("RUBY/RAILS")}
            className={`${
              activeCategory === "RUBY/RAILS"
                ? "bg-green-500 text-white"
                : "bg-gray-800 text-gray-400"
            } text-base mr-4 py-2 px-4 rounded`}
          >
            RUBY/RAILS
          </button>
          <button
            onClick={() => filterProjects("REACT-JS")}
            className={`${
              activeCategory === "REACT-JS"
                ? "bg-green-500 text-white"
                : "bg-gray-800 text-gray-400"
            } text-base mr-4 py-2 px-4 rounded`}
          >
            REACT-JS
          </button>
          <button
            onClick={() => filterProjects("JAVASCRIPT")}
            className={`${
              activeCategory === "JAVASCRIPT"
                ? "bg-green-500 text-white"
                : "bg-gray-800 text-gray-400"
            } text-base mr-4 py-2 px-4 rounded`}
          >
            JAVASCRIPT
          </button>
          <button
            onClick={() => filterProjects("ALL")}
            className={`${
              activeCategory === "ALL"
                ? "bg-green-500 text-white"
                : "bg-gray-800 text-gray-400"
            } text-base py-2 px-4 rounded`}
          >
            ALL
          </button>
        </div>
        <div className="flex flex-wrap -m-4">
          {filteredProjects.map((project) => (
            <div
              className={`sm:w-1/2 w-100 p-4 project-card`}
              key={project.title}
              onClick={() => toggleProjectDetails(project)}
            >
              {/* Project card content */}
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 project-details">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h2>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
