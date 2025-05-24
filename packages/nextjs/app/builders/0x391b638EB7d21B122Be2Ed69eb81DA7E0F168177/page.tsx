import Image from "next/image";
import type { NextPage } from "next";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const walletAddress = "0x391b638EB7d21B122Be2Ed69eb81DA7E0F168177";
const socialLinks = [
  {
    href: "https://github.com/Ebukamoses",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://twitter.com/bukan_moses",
    label: "Twitter",
    icon: <FaTwitter />,
  },
];

const EbukaMosesProfile: NextPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-base-200 to-base-300 px-4 sm:px-8 py-4 sm:py-8">
      <div className="max-w-[400px] w-full bg-gradient-to-r from-gray-[#f5f5f5] via-white to-[#e6e6e6] dark:from-base-100 dark:via-base-200 dark:to-base-100 shadow-md rounded-2xl p-4 sm:p-10 border border-gray-100 dark:border-accent">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Avatar */}
          <div className="relative group">
            <div className="relative w-24 h-24 sm:w-36 sm:h-36 rounded-lg ring-2 ring-white dark:ring-accent ring-offset-4 ring-offset-pink-50 dark:ring-offset-base-300 shadow-md overflow-hidden">
              <Image
                src="/EbukaDvAvatar2.png"
                alt="my picture"
                fill
                // priority
                className="w-full h-full object-cover p-1 rounded-lg"
              />
            </div>
          </div>

          {/* Name */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white">Ebuka Moses</h1>
            <p className="text-sm sm:text-lg text-black bg-clip-text font-medium max-w-md dark:text-white px-2">
              Solidity | Express | Next | React
            </p>
            <p className="text-[12px]">
              I specialize in designing, building, and maintaining decentralized applications (dApps) and
              blockchain-based systems that work with technologies like Ethereum, smart contracts (often using
              Solidity), and distributed ledger protocols to create secure, transparent, and tamper-proof solutions for
              industries.
            </p>
          </div>

          {/* Address container */}
          <div className="flex items-center w-full sm:w-auto bg-base-200 dark:bg-base-300 px-2 sm:px-4 py-2 rounded-xl border border-base-300 dark:border-accent text-xs sm:text-base">
            <div>
              <Address address={walletAddress} format="short" />
            </div>
          </div>
          <hr className="h-[2px] w-full" />
          {/* Social links */}
          <div className="flex flex-col gap-4 w-full sm:w-auto">
            <h2 className="text-center font-bold">Let&apos;s Connect</h2>
            <div className="flex flex-col lg:flex-row items-center gap-2 sm:gap-4">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm normal-case hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-content w-full sm:w-auto"
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbukaMosesProfile;
