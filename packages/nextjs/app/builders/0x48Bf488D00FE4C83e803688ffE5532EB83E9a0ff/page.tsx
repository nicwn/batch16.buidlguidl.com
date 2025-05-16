"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NextPage } from "next";
import { useTheme } from "next-themes";
import { Address } from "~~/components/scaffold-eth";

const BUILDER_ADDRESS = "0x48Bf488D00FE4C83e803688ffE5532EB83E9a0ff";

// SVG icons as inline components
const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="14"
    height="14"
    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity fill-current"
  >
    <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mr-3"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mr-3"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const BlueskyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-3">
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.194 14.968h-8.388c-.943 0-1.71-.767-1.71-1.71v-6.517c0-.943.767-1.71 1.71-1.71h8.388c.943 0 1.71.767 1.71 1.71v6.517c0 .943-.767 1.71-1.71 1.71z" />
    <path d="M15.381 9.023l-4.762 2.381 4.762 2.381z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mr-3"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const ProfilePage: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  useEffect(() => {
    setIsVisible(true);
    setMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(BUILDER_ADDRESS)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans">
      <div
        className={`w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-md shadow-secondary ${
          isDarkMode ? "bg-base-100" : "bg-white"
        } transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} transition-all duration-700`}
      >
        {/* Header with pattern */}
        <div className="relative">
          <div className="h-36 bg-[#5DA2D5] overflow-hidden relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,white_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            </div>
          </div>

          {/* Avatar */}
          <div className="absolute left-0 right-0 -bottom-16 flex justify-center">
            <div className="p-1 bg-[#F79E02] rounded-full shadow-md shadow-secondary group">
              <div className="p-1 bg-base-100 rounded-full overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                <div className="w-32 h-32 rounded-full overflow-hidden relative">
                  <Image
                    src="https://raw2.seadn.io/ethereum/0x282bdd42f4eb70e7a9d9f40c8fea0825b7f68c5d/df0277aac96b0879b6c98ace789500e4.png"
                    alt="Nicholas Wang"
                    fill
                    sizes="(max-width: 128px) 100vw, 128px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 px-8 pb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Nicholas Wang</h1>
            <div className="flex justify-center">
              <span className="px-3 py-1 text-sm rounded-full bg-[#5DA2D5] inline-block mb-4 text-white">
                LEGO Ideas Creator
              </span>
            </div>
            <p className="text-lg mb-6 max-w-xs mx-auto">
              I am Nick Wang. My claim to fame was the creation LEGO Ideas, I moved from NYC to Tokyo and led a small
              team to make fan created LEGO sets a reality.
            </p>

            {/* Address display */}
            <div className="bg-base-200 rounded-lg p-3 mb-6 shadow-md shadow-secondary break-all relative">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-accent block text-left mb-1">Ethereum Address</span>
                  <Address address={BUILDER_ADDRESS} format="short" />
                </div>
                <button onClick={handleCopy} className="text-accent hover:text-[#F79E02] transition-colors">
                  {copied ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-6">
            <div className="divider before:bg-[#5DA2D5] after:bg-[#5DA2D5]">Skills</div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="badge badge-outline p-3">Solidity</span>
              <span className="badge badge-outline p-3">TypeScript</span>
              <span className="badge badge-outline p-3">Next.js</span>
              <span className="badge badge-outline p-3">Python</span>
              <span className="badge badge-outline p-3">SQL</span>
            </div>
          </div>

          {/* Connect Section */}
          <div className="divider before:bg-[#5DA2D5] after:bg-[#5DA2D5]">Connect</div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <a
              href="https://bsky.app/profile/nicwn.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 rounded-lg bg-base-200 hover:bg-[#5DA2D5] hover:text-white transition-all duration-300 transform hover:scale-105 group"
            >
              <BlueskyIcon />
              <span className="font-medium">Bluesky</span>
              <ExternalLinkIcon />
            </a>
            <a
              href="https://linkedin.com/in/nickwang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 rounded-lg bg-base-200 hover:bg-[#5DA2D5] hover:text-white transition-all duration-300 transform hover:scale-105 group"
            >
              <LinkedInIcon />
              <span className="font-medium">LinkedIn</span>
              <ExternalLinkIcon />
            </a>
            <a
              href="https://x.com/nicwn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 rounded-lg bg-base-200 hover:bg-[#5DA2D5] hover:text-white transition-all duration-300 transform hover:scale-105 group"
            >
              <TwitterIcon />
              <span className="font-medium">X</span>
              <ExternalLinkIcon />
            </a>
            <a
              href="https://github.com/nicwn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 rounded-lg bg-base-200 hover:bg-[#5DA2D5] hover:text-white transition-all duration-300 transform hover:scale-105 group"
            >
              <GithubIcon />
              <span className="font-medium">GitHub</span>
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
