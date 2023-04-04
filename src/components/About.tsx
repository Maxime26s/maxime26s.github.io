import React from "react";
import ListItem from "./ListItem";
import MaximeSimardImage from "../assets/images/maxime-simard.png";

function About() {
  return (
    <div className="flex items-start justify-center h-auto py-28">
      <div
        id="about"
        style={{
          display: "block",
          position: "relative",
          top: "-100px",
          visibility: "hidden",
        }}
      />
      <div className="text-left max-w-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">À propos</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Bonjour! Je suis Maxime Simard, un passionné de développement logiciel
          et de jeux vidéo. J'ai commencé à m'intéresser à la programmation en
          2012 lorsque je tentais de créer mes propres jeux avec RPG Maker ou
          Roblox Studio. J'ai ensuite développer un intérêt en programmation
          suffisant pour en faire au Cégep!
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Aujoud'hui, je suis finissant en Génie Informatique à l'UQAC et je
          commence ma Maîtrise en Informatique (Intelligence Artificielle). Tout
          au long de mon parcours, j'ai eu l'occasion de m'impliquer dans des
          activités étudiantes, autant en tant que participant qu'en tant
          qu'organisateur. J'ai donc plusieurs "GameJam" à mon actif, dont
          plusieurs 1ère places!
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Récemment, j'ai commencé à m'intéresser au développement d'application
          web ainsi qu'à la création d'outil pour assister au développement de
          jeux vidéo.
        </p>
      </div>
      <div>
        <img
          src={MaximeSimardImage}
          alt="My Image"
          className="rounded-md mt-14 ml-16 w-[30vw] aspect-square max-w-xs max-h-xs"
          style={{ boxShadow: "10px 10px 0px 0px #3B82F6" }}
        />
      </div>
    </div>
  );
}

export default About;
