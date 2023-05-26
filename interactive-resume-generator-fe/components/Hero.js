import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <header className="hero__header">
        <h1>John Smith</h1>
        <h2>Software Developer</h2>
        <p className=" text-gray-600 max-w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="/ResumeForm">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Create Resume
          </button>
        </a>
        <div className="flex items-center justify-between max-w-[400px] m-auto py-4">
          <div className="rounded-full shadow-lg shadow-gray-600 p-6 m-6 cursor-pointer hover:scale-110 ease-in duration-300 social-bubble">
            <FaLinkedinIn />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-600 p-6 m-6 cursor-pointer hover:scale-110 ease-in duration-300 social-bubble">
            <FaGithub />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-600 p-6 m-6 cursor-pointer hover:scale-110 ease-in duration-300 social-bubble">
            <FaEnvelope />
          </div>
        </div>
        <p> &darr; Scroll &darr;</p>
      </header>
    </>
  );
}
