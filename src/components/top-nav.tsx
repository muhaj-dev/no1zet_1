"use client";

import React, { useState } from "react";
import SearchInput from "./search-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Wallet } from "./svgs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import ConnectWallet from "./Wallet";

export interface Props {}

export default function TopNav(props: Props) {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}

function Mobile() {
  return (
    <>
      <div className="flex justify-between px-5 w-full lg:hidden items-center">
        <Image height={22} width={133} alt="logo" src="/logo.svg" />
        <Sheet>
          <SheetTrigger>
            <button>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_357_9516)">
                  <path
                    d="M23.6194 5H1.21937"
                    stroke="#AA6C39"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    opacity="0.5"
                    d="M23.6194 12H1.21937"
                    stroke="#AA6C39"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M23.6194 19H1.21937"
                    stroke="#AA6C39"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_357_9516">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.419373)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="pt-10">Hello world</div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

function Desktop() {
  const [user, setUser] = useState(false);
  const [connect, setConnect] = useState(false);

  const connectWallet = () => {
    console.log("connected");
    setUser(true);
  };

  return (
    <div className="px-10 w-full lg:flex justify-between hidden">
      <SearchInput />
      <div className="flex-1 flex justify-end items-center space-x-9">
        {user ? (
          <>
            <div className="">
              <Badge className="rounded-full">
                <BellIcon className="size-4" />
              </Badge>
            </div>
            <div className="flex">
              <div className="text-right mr-3">
                <h5 className="text-sm font-semibold">21.6 SOL</h5>
                <h5 className="text-xs text-primary">Connected</h5>
              </div>
              <UserAvatar />
            </div>
          </>
        ) : (
          <>
            <ConnectWallet />
          </>
        )}
      </div>
    </div>
  );
}

function UserAvatar() {
  return (
    <Avatar className="rounded-lg">
      <AvatarImage src="/user.png" alt="user avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
