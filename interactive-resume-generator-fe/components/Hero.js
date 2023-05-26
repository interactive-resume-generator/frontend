import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import useResources from "../hooks/useResources"

export default function Hero() {

  const { createResume } = useResources();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resume = new FormData();
    const testData = [
      {
        education: [
          {degree: "BS in CompSci", university: "UCLA", year: "2021"},
        ],
      },
      {
        experience: [
          {
            company: "Amazon",
            position: "Intern, Software Engineer",
            duration: "Jan 2021 - Dec 2021",
          },
          {
            company: "TEKsystems",
            position: "Help Desk Analyst",
            duration: "Jan 2020-Dec 2020",
          },
          {
            company: "Best Buy",
            position: "Geek Squad Consultant",
            duration: "Jan 2016 - Dec 2019",
          },
        ],
      },
      {
        skills: [
          "HTML",
          "CSS",
          "Javascript",
          "React.js",
          "Express",
          "Node.js",
          "MongoDB",
          "VSCode",
          "REST Frameworks",
          "ReactStrap",
          "Next.js",
          "Python",
          "Django",
          "C#",
          "PostgreSQL",
          "API",
        ],
      },
    ];
    resume.append("name", "Ethan's Resume");
    resume.append("data", JSON.stringify(testData));
    resume.append("format", JSON.stringify({things: "stuff"}));

    await createResume(resume);
  }

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
        {/*<Link href="/ResumeForm">*/}
        <button
          type="button"
          onclick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Create Resume
        </button>
        {/*</Link>*/}
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
