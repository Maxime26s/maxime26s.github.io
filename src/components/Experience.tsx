import React, { useState } from "react";
import ListItem from "./ListItem";
import { Transition } from "@headlessui/react";

type Experience = {
  id: number;
  shortTitle: string;
  title: string;
  location: string;
  years: string;
  description: string[];
};

type ExperienceProps = {
  id: string;
  title: string;
  experiences: Experience[];
};

function setValueWithDelay(
  setter: (value: any) => void,
  duration: number,
  currentValue: any,
  newValue: any
) {
  setter(currentValue);
  setTimeout(() => {
    setter(newValue);
  }, duration);
}

function Experience({ id, title, experiences }: ExperienceProps) {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    experiences[0]
  );

  const [transition, setTransition] = useState<boolean>(false);

  const handleExperienceClick = (experience: Experience) => {
    setValueWithDelay(setTransition, 300, true, false);
    setValueWithDelay(
      setSelectedExperience,
      200,
      selectedExperience,
      experience
    );
  };

  return (
    <div className="flex justify-center min-h-[35vh] h-auto py-10">
      <div
        id={id}
        style={{
          display: "block",
          position: "relative",
          top: "-100px",
          visibility: "hidden",
        }}
      />
      <div className="text-left w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <div className="flex w-full">
          <div className="w-2/6">
            <ul className="list-none">
              {experiences
                .sort((a, b) => a.id - b.id)
                .map((experience) => (
                  <li key={experience.id}>
                    <button
                      className={`text-lg font-bold text-gray-800 hover:text-blue-600 focus:outline-none py-2 px-4 transition-all duration-300 ease-in-out border-l-4 ${
                        experience.id === selectedExperience.id
                          ? "border-blue-600 bg-blue-100"
                          : "border-slate-400"
                      }`}
                      onClick={() => handleExperienceClick(experience)}
                    >
                      {experience.shortTitle}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <Transition
            show={!transition}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="w-full"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedExperience.title}
              </h2>
              <p className="text-lg font-medium text-gray-600 mb-2">
                {selectedExperience.location}
              </p>
              <p className="text-lg font-medium text-gray-600 mb-4">
                {selectedExperience.years}
              </p>
              <ul className="list-disc list-inside text-gray-700">
                {selectedExperience.description.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
}

export default Experience;
