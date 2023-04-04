import React from "react";
import LinkedIn from "./icons/LinkedIn";
import GitHub from "./icons/GitHub";
import Mail from "./icons/Mail";

function Contact() {
  const linkedInUrl = "https://www.linkedin.com/in/maxime-simard-940945198/";
  const gitHubUrl = "https://github.com/Maxime26s";
  const emailAddress = "maxime.simard8@uqac.ca";

  return (
    <div className="fixed z-50 bottom-0 w-full text-center py-8 bg-white">
      {/*<h2 className="text-2xl font-bold text-gray-800 mb-8">Me Contacter</h2>*/}
      <div className="flex justify-center space-x-6">
        <a
          className="w-7 h-7"
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          className="w-7 h-7"
          href={gitHubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
        <a className="w-7 h-7" href={`mailto:${emailAddress}`}>
          <Mail />
        </a>
      </div>
    </div>
  );
}

export default Contact;
