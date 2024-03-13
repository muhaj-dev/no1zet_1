import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";

interface Props {}

interface LinkProps {
  icon?: ReactNode;
  label: string;
}

export default function SideNav(props: Props) {
  const links = [
    {
      label: "dashboard",
    },
    {
      label: "vesting",
    },
    {
      label: "staking",
    },
    {
      label: "stake pool creation",
    },
    {
      label: "settings",
    },
  ];

  return (
    <>
      <div className="h-20 flex items-center">
        <Image height={28} width={170} alt="logo" src="/logo.svg" />
      </div>
      <div className="space-y-5 mt-4">
        {links.map(({ label }) => (
          <LinkComponent label={label} />
        ))}
      </div>
    </>
  );
}

function LinkComponent({ icon, label }: LinkProps) {
  return (
    <Button
      variant="ghost"
      className="hover:cursor-pointer justify-start w-full text-base space-x-4"
    >
      {icon}
      <Link className="capitalize" href={"/"}>
        {label}
      </Link>
    </Button>
  );
}
