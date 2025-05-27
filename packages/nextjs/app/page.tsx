"use client";

import Link from "next/link";
import type { NextPage } from "next";
import {
  BugAntIcon,
  CodeBracketIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { data: checkedInCount, isLoading } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  return (
    <div className="flex flex-col bg-gradient-to-b dark:from-black dark:to-gray-900 from-gray-100 to-gray-200 min-h-screen">
      {/* Hero Section */}
      <div className="bg-hero py-20 px-4 text-center relative overflow-hidden flex items-center justify-center">
        <div className="max-w-4xl mx-auto relative z-10 animate-fadeIn">
          <div className="relative">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="relative text-center">
                <h1 className="text-6xl sm:text-7xl font-black text-white mb-2 animate-slide-up tracking-tight">
                  <span className="drop-shadow-md">Welcome to Batch</span>
                </h1>

                {/* 16 with lightning circle */}
                <div className="relative inline-block my-4">
                  <div className="circle-lightning inline-flex items-center justify-center w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-black/30 dark:bg-white/5 backdrop-blur-sm shadow-md dark:shadow-md">
                    <span className="text-[8rem] sm:text-[10rem] font-black bg-gradient-to-r from-primary via-secondary to-primary text-transparent bg-clip-text bg-[length:200%_100%] animate-gradient-x leading-none drop-shadow-md">
                      16
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xl max-w-2xl mx-auto text-white font-medium mb-10 animate-slide-up animation-delay-700 drop-shadow-md bg-black/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                Join a community of innovators creating the future of web3. Learn, build, and collaborate with
                like-minded developers pushing the boundaries of what&apos;s possible.
              </p>

              {/* Builder Counter Card */}
              <div className="card-lightning inline-block dark:bg-gray-900/70 bg-gray-800/70 px-8 py-5 rounded-xl backdrop-blur-sm animate-slide-up animation-delay-1000 shadow-md">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-secondary/50 to-primary/40 dark:from-secondary/30 dark:to-primary/30 rounded-full shadow-glow-md transition-all duration-300">
                    <UserGroupIcon className="h-8 w-8 text-white dark:text-secondary transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium text-secondary dark:text-secondary text-white">
                      Builder Community
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-2xl text-white dark:text-white">
                        {isLoading ? (
                          <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                          <span>{checkedInCount?.toString()}</span>
                        )}
                      </span>
                      <span className="text-gray-200 dark:text-gray-300">builders checked in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full py-12 px-4 sm:px-8 dark:bg-black dark:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(30,30,30,0.3)_100%)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(240,240,240,0.5)_100%)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What is Batch 16?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="dark:bg-gray-900/80 bg-white p-6 rounded-2xl shadow-md dark:hover:shadow-[0_0_25px_rgba(79,70,229,0.35)] hover:shadow-[0_0_25px_rgba(79,70,229,0.15)] transition-all duration-300 dark:border-gray-800 border-gray-200 hover:border-secondary backdrop-blur-sm">
              <div className="icon-container p-3 bg-gradient-to-br from-secondary/30 to-primary/30 dark:from-secondary/20 dark:to-primary/20 rounded-xl w-fit mb-4 shadow-glow-sm dark:shadow-glow-lg">
                <RocketLaunchIcon className="h-10 w-10 text-primary dark:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Learning Expedition</h3>
              <p>
                An immersive journey into Ethereum development. Perfect for developers looking to level up their web3
                skills.
              </p>
            </div>

            <div className="dark:bg-gray-900/80 bg-white p-6 rounded-2xl shadow-md dark:hover:shadow-[0_0_25px_rgba(79,70,229,0.35)] hover:shadow-[0_0_25px_rgba(79,70,229,0.15)] transition-all duration-300 dark:border-gray-800 border-gray-200 hover:border-secondary backdrop-blur-sm">
              <div className="icon-container p-3 bg-gradient-to-br from-secondary/30 to-primary/30 dark:from-secondary/20 dark:to-primary/20 rounded-xl w-fit mb-4 shadow-glow-sm dark:shadow-glow-lg">
                <UserGroupIcon className="h-10 w-10 text-primary dark:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p>
                Join a supportive network of builders, mentors, and experts who are passionate about web3 technology.
              </p>
            </div>

            <div className="dark:bg-gray-900/80 bg-white p-6 rounded-2xl shadow-md dark:hover:shadow-[0_0_25px_rgba(79,70,229,0.35)] hover:shadow-[0_0_25px_rgba(79,70,229,0.15)] transition-all duration-300 dark:border-gray-800 border-gray-200 hover:border-secondary backdrop-blur-sm">
              <div className="icon-container p-3 bg-gradient-to-br from-secondary/30 to-primary/30 dark:from-secondary/20 dark:to-primary/20 rounded-xl w-fit mb-4 shadow-glow-sm dark:shadow-glow-lg">
                <CodeBracketIcon className="h-10 w-10 text-primary dark:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hands-on Building</h3>
              <p>
                Create real projects using Ethereum, Solidity, and modern front-end frameworks to build your portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="w-full py-12 px-4 sm:px-8 dark:bg-[#101010] dark:bg-[linear-gradient(to_right,rgba(20,20,20,0.8),rgba(0,0,0,0.8),rgba(20,20,20,0.8))] bg-[linear-gradient(to_right,rgba(240,240,240,0.8),rgba(255,255,255,0.8),rgba(240,240,240,0.8))] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Explore Our Tools</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 from-white to-gray-100 p-8 rounded-2xl shadow-md dark:hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.2)] transition-all duration-300 dark:border-gray-700 border-gray-200 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-secondary/30 to-primary/30 dark:from-secondary/20 dark:to-primary/20 rounded-full shadow-glow-sm dark:shadow-glow-lg transition-all duration-300">
                  <BugAntIcon className="h-8 w-8 text-primary dark:text-secondary transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold">Debug Contracts</h3>
              </div>
              <p className="mb-6">
                Interact with your smart contracts directly from the UI. Test functions, monitor events, and debug with
                ease.
              </p>
              <Link
                href="/debug"
                passHref
                className="btn btn-secondary hover:scale-105 transition-transform duration-300 shadow-glow-sm dark:shadow-glow-md"
              >
                Open Debug Console
              </Link>
            </div>

            <div className="bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 from-white to-gray-100 p-8 rounded-2xl shadow-md dark:hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.2)] transition-all duration-300 dark:border-gray-700 border-gray-200 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-secondary/30 to-primary/30 dark:from-secondary/20 dark:to-primary/20 rounded-full shadow-glow-sm dark:shadow-glow-lg transition-all duration-300">
                  <MagnifyingGlassIcon className="h-8 w-8 text-primary dark:text-secondary transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold">Block Explorer</h3>
              </div>
              <p className="mb-6">
                Examine transactions, blocks, and contract interactions on your local blockchain environment.
              </p>
              <Link
                href="/blockexplorer"
                passHref
                className="btn btn-secondary hover:scale-105 transition-transform duration-300 shadow-glow-sm dark:shadow-glow-md"
              >
                Explore Blockchain
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Builders Section */}
      <div className="w-full py-12 px-4 sm:px-8 dark:bg-gradient-to-b dark:from-black dark:to-gray-900 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Meet Our Builders</h2>
          <p className="text-xl mb-8">Discover the talented developers who are part of Batch 16</p>

          <Link
            href="/builders"
            passHref
            className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-300 shadow-glow-sm dark:shadow-glow-md group"
          >
            <span>View Builder Profiles</span>
            <UserGroupIcon className="h-5 w-5 ml-2 group-hover:animate-pulse text-white dark:text-primary-content transition-colors duration-300" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 px-4 sm:px-8 dark:bg-black/90 bg-gray-100/90 backdrop-blur-sm border-t dark:border-gray-800 border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary dark:text-secondary">Batch 16 BuidlGuidl</h3>
            <p className="dark:text-gray-300 text-gray-600">
              Join a community of innovators creating the future of web3.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <h3 className="text-xl font-bold mb-4 text-primary dark:text-secondary">Resources</h3>
            <div className="flex gap-6">
              <a
                href="https://scaffoldeth.io"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-300 text-gray-600 hover:text-primary dark:hover:text-secondary transition-colors"
              >
                Scaffold-ETH 2
              </a>
              <a
                href="https://buidlguidl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-300 text-gray-600 hover:text-primary dark:hover:text-secondary transition-colors"
              >
                BuidlGuidl
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
