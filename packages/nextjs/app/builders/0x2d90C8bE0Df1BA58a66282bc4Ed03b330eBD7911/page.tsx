"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
// Properly import icons
import { FaCode, FaEthereum, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";

// Add a eslint-disable comment to ignore TypeScript errors for icon props

export default function BuilderProfile(): React.ReactElement {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills: string[] = [
    "Javascript",
    "Rust",
    "Typescript",
    "Wasm",
    "Solidity",
    "Ethereum",
    "Smart Contracts",
    "Web3",
  ];

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 py-0 px-4 overflow-hidden">
      {/* Card container */}
      <div
        className={`max-w-md w-full bg-gray-800 rounded-xl shadow-xl overflow-hidden ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        {/* Static border */}
        <div className="border border-blue-500 rounded-xl overflow-hidden">
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            {/* Header with simplified background */}
            <div className="relative h-32 overflow-hidden bg-blue-900">
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-800 to-transparent"></div>
            </div>

            {/* Profile content */}
            <div className="relative px-8 pb-6 -mt-16">
              {/* Profile image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-blue-500 rounded-full opacity-50"></div>
                  <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-gray-800">
                    <Image
                      src="/builders/oliveCartoon.png"
                      alt="Joseph Ochiagha"
                      width={128}
                      height={128}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Name and bio */}
              <div className="mt-5 text-center">
                <h1 className="text-2xl font-bold text-white">Joseph Ochiagha</h1>

                <div className="mt-2 flex items-center justify-center gap-2">
                  {}
                  {/* @ts-ignore */}
                  <FaEthereum className="text-blue-400 w-4 h-4" />
                  <span className="text-sm text-gray-300 font-mono">0x2d90...D7911</span>
                  <button
                    className="text-blue-400 hover:text-blue-300 text-xs"
                    onClick={() => copyToClipboard("0x2d90C8bE0Df1BA58a66282bc4Ed03b330eBD7911")}
                    title="Copy full address"
                    aria-label="Copy full Ethereum address"
                    type="button"
                  >
                    [Copy]
                  </button>
                </div>

                <p className="mt-3 text-base font-medium text-purple-300">
                  Smart Contract Dev, In love with Cryptography
                </p>

                <p className="mt-2 text-sm text-gray-300 max-w-sm mx-auto">
                  Exploring the boundaries of blockchain technology and passionate about building secure, efficient
                  smart contracts.
                </p>
              </div>

              {/* Skills chips */}
              <div className="mt-5">
                <div className="flex items-center gap-2 mb-3">
                  {}
                  {/* @ts-ignore */}
                  <FaCode className="text-purple-400 w-4 h-4" />
                  <h2 className="text-base font-semibold text-white">Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-200 border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="mt-6 flex justify-center gap-5">
                <a
                  href="https://github.com/Josetic224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                >
                  {}
                  {/* @ts-ignore */}
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/yoseph_Eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="X Profile"
                >
                  {}
                  {/* @ts-ignore */}
                  <SiX className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joseph-ochiagha-749853317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                >
                  {}
                  {/* @ts-ignore */}
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styling */}
      <style jsx global>{`
        /* Remove scrollbar from the entire document */
        html,
        body {
          overflow: hidden;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 9999px;
          background-color: #2d3748;
          color: #e2e8f0;
          transition: none; /* Remove transition to prevent movement */
        }

        .social-link:hover {
          background-color: #3182ce;
          color: white;
        }
      `}</style>
    </div>
  );
}
