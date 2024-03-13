"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import {
  DashboardIcon,
  LockIcon,
  SettingsIcon,
  StakeIcon,
  CoinShareIcon,
} from "./svgs";
import { useParams, usePathname } from "next/navigation";

interface Props {}

interface Link {
  icon?: ReactNode;
  label: string;
  href: string;
}

interface LinkProps {
  link: Link;
}

export default function SideNav(props: Props) {
  const links = [
    {
      label: "dashboard",
      icon: <DashboardIcon />,
      href: "/",
    },
    {
      label: "vesting",
      icon: <LockIcon />,
      href: "/vesting",
    },
    {
      label: "staking",
      icon: <StakeIcon />,
      href: "/staking",
    },
    {
      label: "stake pool creation",
      icon: <CoinShareIcon />,
      href: "/stake-pool-creation",
    },
    {
      label: "settings",
      icon: <SettingsIcon />,
      href: "/settings",
    },
  ];

  return (
    <>
      <div className="h-20 flex items-center">
        <Image height={28} width={170} alt="logo" src="/logo.svg" />
      </div>
      <div className="space-y-5 mt-10">
        {links.map((link) => (
          <LinkComponent link={link} key={link.label} />
        ))}
      </div>
    </>
  );
}

function LinkComponent({ link }: LinkProps) {
  const { label, icon, href } = link;

  const pathname = usePathname();

  return (
    <Button
      variant="ghost"
      className={`hover:cursor-pointer justify-start w-full text-base space-x-4 ${
        pathname === href ? "bg-accent/10 text-accent-foreground" : ""
      }`}
    >
      <div className="fill-slate-50">{icon}</div>
      <Link className="capitalize" href={"/"}>
        {label}
      </Link>
    </Button>
  );
}
