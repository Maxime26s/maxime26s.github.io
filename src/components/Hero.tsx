import React from "react";

function Hero() {
  let title = "Maxime Simard";
  let subtitle1 = "Finissant en Génie Informatique";
  let subtitle2 = "Étudiant à la Maîtrise en Informatique (IA)";
  let description =
    "Je suis passionné de programmation et j'aime relever des défis. J'adore concevoir des programmes utiles qui automatisent des tâches et transformer des concepts en programmes.";
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-left max-w-xl">
        <h1 className="text-6xl leading-none font-bold text-gray-800">
          {title}
        </h1>
        <h2 className="text-3xl leading-loose font-medium text-gray-600">
          {subtitle1}
        </h2>
        <p className="text-lg leading-snug text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default Hero;
