import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResources";

export default function Hero() {
  const { user } = useAuth();
  const { loading } = useResource();

  return (
    <>
      {user && !loading ? (
        <header className="hero__header">
          <h1>{user.username}</h1>
          <h2>Software Developer</h2>
          <p className=" text-gray-600 max-w-[70%]"></p>
          <Link href="/ResumeForm">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Create Resume
            </button>
          </Link>
          <div className="flex items-center justify-between max-w-[400px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-600 p-6 m-6 cursor-pointer hover:scale-110 ease-in duration-300 social-bubble">
              <a href="">
                <FaLinkedinIn />
              </a>
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
      ) : (
        <header className="hero__header">
          <h1>Interactive Resume Generator</h1>
          <h2>Login to start!</h2>
          <p className=" text-gray-600 max-w-[70%]"></p>
          <Link href="/ResumeForm">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Create Resume
            </button>
          </Link>
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
      )}
    </>
  );
}
