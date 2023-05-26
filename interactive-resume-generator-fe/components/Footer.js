import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResources";

export default function Footer() {
  const { user } = useAuth();
  const { loading } = useResource();

  return (
    <>
      {user && !loading ? (
        <footer className="footer">
          <span>Let's Connect!</span>
          <br></br>
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
        </footer>
      ) : (
        <footer className="footer">
          <span>Scroll up to start!</span>
        </footer>
      )}
    </>
  );
}
