import React, { useState } from "react";
import GitHub from "./icons/GitHub";
import External from "./icons/External";

type Project = {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  externalUrl?: string;
};

type ProjectProps = {
  projects: Project[];
};

function Project({ projects }: ProjectProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 8);

  return (
    <div className="py-14">
      <div
        id="projects"
        style={{
          display: "block",
          position: "relative",
          top: "-100px",
          visibility: "hidden",
        }}
      />
      <div className="flex items-start justify-center h-auto pb-2">
        <div className="text-center w-full max-w-5xl">
          <h2
            className="text-2xl font-bold text-gray-800 mb-4"
            style={{ top: "-250px" }}
          >
            Projets
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {visibleProjects.map((project) => (
          <div key={project.id}>
            <div className="max-w-[25rem] min-w-fit max-h-96 rounded overflow-hidden shadow-lg m-4 transition-transform duration-250 ease-in-out transform hover:-translate-y-2">
              <a
                href={
                  project.externalUrl ? project.externalUrl : project.githubUrl
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {/*<img
                className="w-full h-48 object-cover"
                src={project.imageUrl}
                alt={project.name}
        />*/}
                <div className="px-6 py-4">
                  <div className="flex">
                    <div className="font-bold text-xl mb-2 w-4/5 h-14">
                      {project.name}
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 ml-auto"
                      >
                        <GitHub></GitHub>
                      </a>
                    )}
                    {project.externalUrl && (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 ml-auto"
                      >
                        <External></External>
                      </a>
                    )}
                  </div>
                  <p className="text-gray-700 text-base">
                    {project.description}
                  </p>
                </div>
                <div className="px-5 pt-1 pb-2">
                  <div className="flex flex-wrap">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      {!showAll && projects.length > 8 ? (
        <div className="flex justify-center py-4">
          <button
            className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setShowAll(true)}
          >
            Voir Plus
          </button>
        </div>
      ) : (
        <div className="flex justify-center py-4">
          <button
            className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setShowAll(false)}
          >
            Voir Moins
          </button>
        </div>
      )}
    </div>
  );
}

export default Project;
