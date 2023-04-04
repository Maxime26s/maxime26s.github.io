import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import CV from "../assets/fichiers/CV-avril-2023.pdf";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-gray-900 fixed top-0 left-0 right-0 z-40">
      <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8 z-50">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-white text-lg font-bold">
              Maxime Simard
            </a>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                À propos
              </a>
              <a
                href="#formation"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Formation
              </a>
              <a
                href="#jobs"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Emplois
              </a>
              <a
                href="#experiences"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Experiences
              </a>
              <a
                href="#knowledge"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Connaissances
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projets
              </a>
              <a
                href={CV}
                target="_blank"
                className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Curriculum vitæ
              </a>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
              onClick={handleMobileMenuToggle}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isMobileMenuOpen}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div
            ref={ref}
            className={`fixed inset-0 z-40 top-16 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="bg-gray-900">
              <div className="max-w-7xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-6 lg:px-8">
                <a
                  href="#about"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  À propos
                </a>
                <a
                  href="#formation"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Formation
                </a>
                <a
                  href="#jobs"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Emplois
                </a>
                <a
                  href="#experiences"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Expériences
                </a>
                <a
                  href="#knowledge"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Connaissances
                </a>
                <a
                  href="#projects"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>
                <a
                  href={CV}
                  target="_blank"
                  className="bg-blue-600 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                >
                  Curriculum vitæ
                </a>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
