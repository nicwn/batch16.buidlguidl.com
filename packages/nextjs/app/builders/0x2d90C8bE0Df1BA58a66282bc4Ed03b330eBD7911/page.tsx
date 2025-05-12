"use client";

import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import { IconType } from "react-icons";
// Properly import icons
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Address } from "~~/components/scaffold-eth";

// Skills array - defined outside component to avoid recreation on each render
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

// Social links data - defined outside component to avoid recreation on each render
type SocialLink = {
  href: string;
  ariaLabel: string;
  icon: IconType;
  size?: string;
};

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/Josetic224",
    ariaLabel: "GitHub Profile",
    icon: FaGithub,
    size: "24px",
  },
  {
    href: "https://x.com/yoseph_Eth",
    ariaLabel: "X Profile",
    icon: SiX,
    size: "20px",
  },
  {
    href: "https://www.linkedin.com/in/joseph-ochiagha-749853317",
    ariaLabel: "LinkedIn Profile",
    icon: FaLinkedin,
    size: "24px",
  },
];

const JosephOchiaghaProfile: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 py-0 px-4 overflow-hidden">
      {/* This page sets body to overflow-hidden via a layout effect */}

      {/* Card container */}
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-xl overflow-hidden opacity-100">
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
                      src="/builders/oliveCartoon.webp"
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

                <div className="mt-2 flex items-center justify-center">
                  <Address address="0x2d90C8bE0Df1BA58a66282bc4Ed03b330eBD7911" format="short" size="sm" />
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
                  <FaCode size="16px" color="#B794F4" /> {/* Using size and color instead of className */}
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
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-200 hover:bg-blue-500 hover:text-white"
                      aria-label={link.ariaLabel}
                    >
                      <Icon size={link.size} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JosephOchiaghaProfile;
