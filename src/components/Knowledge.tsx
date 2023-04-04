import React, { useState } from "react";
import ListItem from "./ListItem";
import KnowledgeListColumn from "./KnowledgeListColumn";

type Knowledge = {
  id: number;
  title: string;
};

type KnowledgeProps = {
  languages: Knowledge[];
  technologies: Knowledge[];
  softwares: Knowledge[];
};

function Knowledge({ languages, technologies, softwares }: KnowledgeProps) {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div
        id="knowledge"
        style={{
          display: "block",
          position: "relative",
          top: "-100px",
          visibility: "hidden",
        }}
      />
      <div className="flex items-start justify-center h-auto pb-4">
        <div className="text-center w-full max-w-5xl">
          <h2
            className="text-2xl font-bold text-gray-800 mb-4"
            style={{ top: "-250px" }}
          >
            Connaissances
          </h2>
        </div>
      </div>
      <div className="flex space-x-5">
        <div className="w-1/3">
          <KnowledgeListColumn
            title="Langages"
            data={languages}
            numColumns={2}
          />
        </div>
        <div className="w-1/3">
          <KnowledgeListColumn
            title="Technologies"
            data={technologies}
            numColumns={2}
          />
        </div>
        <div className="w-1/3">
          <KnowledgeListColumn
            title="Logiciels"
            data={softwares}
            numColumns={2}
          />
        </div>
      </div>

      {/*}
      <div className="flex">
        <ul className="w-1/4 pr-4 list-none">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Languages</h3>
          {languages
            .slice(0, Math.floor(languages.length / 2) + 1)
            .map((item: Knowledge, index: number) => (
              <ListItem key={item.id}>{item.title}</ListItem>
            ))}
        </ul>
        <ul className="w-1/4 pl-4 list-none">
          <h3 className="text-lg font-bold text-gray-800 mb-2">&nbsp;</h3>
          {languages.slice(Math.floor(languages.length / 2) + 1).map((item) => (
            <ListItem key={item.id}>{item.title}</ListItem>
          ))}
        </ul>
        <ul className="w-1/4 list-none">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Technologies</h3>
          {technologies.map((item) => (
            <ListItem key={item.id}>{item.title}</ListItem>
          ))}
        </ul>
        <ul className="w-1/4 list-none">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Softwares</h3>
          {softwares.map((item) => (
            <ListItem key={item.id}>{item.title}</ListItem>
          ))}
        </ul>
        </div>
        */}
    </div>
  );
}

export default Knowledge;
