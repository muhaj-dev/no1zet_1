import * as React from "react";
import SearchInput from "./search-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Wallet } from "./svgs";

export interface Props {}

export default function TopNav(props: Props) {
  const user = false;
  return (
    <div className="px-10 w-full flex justify-between">
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
                <h5 className="text-sm font-semibold">0xCe2d...76a9</h5>
                <h5 className="text-xs text-primary">Connected</h5>
              </div>
              <UserAvatar />
            </div>
          </>
        ) : (
          <>
            <Button>
              Connect
              <Wallet className="ml-4" />
            </Button>
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
