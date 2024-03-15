"use client";
import { StakeLogo } from "@/components/svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface Props {}

export default function Header(props: Props) {
  const navLinks = [
    {
      label: "Token Staking",
      href: "/stake/token",
    },
    {
      label: "NFT Staking",
      href: "/stake/nft",
    },
  ];

  return (
    <div className="">
      <div className="w-full bg-muted h-28 flex justify-between items-center rounded-xl overflow-hidden">
        <div className="p-6  flex-1">
          <h1 className="text-2xl">
            Earn passive income with{" "}
            <span className="text-primary">staking</span>
          </h1>
          <p className="text-sm text-primary">stake Now!</p>
        </div>
        <div className=" h-full w-[13rem] bg-[#492e1b] ">
          <div className="px-5 bg-[#3a2619] h-full flex items-center w-fit">
            <svg
              width="75"
              height="52"
              viewBox="0 0 75 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="37.161" cy="25.7047" r="25.7047" fill="#674226" />
              <g filter="url(#filter0_d_75_935)">
                <circle cx="37.1614" cy="25.7048" r="19.6053" fill="#AA6C39" />
              </g>
              <path
                d="M47.2433 15.5798V18.82C47.2433 21.2703 45.5991 23.332 43.3578 23.9592V19.2194H38.9705C39.6757 17.1055 41.6682 15.5798 44.0133 15.5798H47.2411H47.2433Z"
                fill="white"
              />
              <path
                d="M36.3396 31.1103C35.6646 33.2784 33.6462 34.854 31.26 34.854H28.03V31.616C28.03 29.3177 29.4773 27.3623 31.5044 26.6071V31.1103H36.3396Z"
                fill="white"
              />
              <path
                d="M36.5798 20.9186V24.1566H33.3498C32.7008 24.1566 32.0777 24.0416 31.5044 23.8267C29.4773 23.0736 28.03 21.116 28.03 18.8199V15.5797H31.26C33.6073 15.5797 35.5997 17.1054 36.305 19.2192C36.4846 19.7531 36.5798 20.3239 36.5798 20.9186Z"
                fill="white"
              />
              <path
                d="M47.2438 31.6159V34.854H44.0139C41.6298 34.854 39.6114 33.2784 38.9364 31.1103C38.7785 30.6068 38.6941 30.0707 38.6941 29.5173V26.2771H41.924C42.4195 26.2771 42.9019 26.3444 43.3584 26.4746C45.5996 27.1018 47.2438 29.1657 47.2438 31.6159Z"
                fill="white"
              />
              <path
                d="M11.0956 23.7195C3.85315 25.2794 1 26.4488 1 28.9298C1 33.6453 17.3848 37.4679 37.5965 37.4679C57.8082 37.4679 74.193 33.6453 74.193 28.9298C74.193 26.084 72.0409 24.6421 62.8655 23.0907"
                stroke="#7E624B"
                stroke-width="0.871345"
              />
              <defs>
                <filter
                  id="filter0_d_75_935"
                  x="12.3281"
                  y="0.871418"
                  width="49.6666"
                  height="49.6667"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.61403" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_75_935"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_75_935"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <nav className="bg-muted my-5 rounded-xl relative h-[74px]">
        <div className="absolute top-6 left-6 flex space-x-[60px]">
          <p className="text-lg font-semibold">Select Staking type:</p>
          {navLinks.map((navlink) => (
            <NavLink key={navlink.label} navlink={navlink} />
          ))}
        </div>
      </nav>
    </div>
  );
}

interface navProps {
  navlink: {
    label: string;
    href: string;
  };
}

function NavLink({ navlink }: navProps) {
  const pathname = usePathname();

  return (
    <div className="h-12 relative">
      <Link
        href={navlink.href}
        className={`text-lg  ${
          pathname === navlink.href ? "text-foreground" : "text-foreground/60"
        }`}
      >
        {navlink.label}
      </Link>

      {pathname === navlink.href && (
        <div className="bg-primary h-0.5 absolute -bottom-1 left-0 right-0" />
      )}
    </div>
  );
}
