"use client";

import { useState } from "react";
import "./wallet.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
// import ConnectWallet from "./Wallet";

// imports methods relevant to the react framework
import * as React from "react";
// library we use to interact with the solana json rpc api
import * as web3 from "@solana/web3.js";
// allows us access to methods and components which give us access to the solana json rpc api and user's wallet data
import * as walletAdapterReact from "@solana/wallet-adapter-react";
// allows us to choose from the available wallets supported by the wallet adapter
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
// imports a component which can be rendered in the browser
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
// applies the styling to the components which are rendered on the browser
require("@solana/wallet-adapter-react-ui/styles.css");
// imports methods for deriving data from the wallet's data store
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Badge } from "./ui/badge";
import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Wallet } from "./svgs";

const ConnectWallet = () => {
  // allows us to add the wallet account balance to our react function component
  const [balance, setBalance] = React.useState<number | null>(0);
  // we specify which network we want to connect to
  const endpoint = web3.clusterApiUrl("devnet");
  // we specify which wallets we want our wallet adapter to support
  const wallets = [new walletAdapterWallets.PhantomWalletAdapter()];

  // connection context object that is injected into the browser by the wallet
  const { connection } = useConnection();
  // user's public key of the wallet they connected to our application
  const { publicKey } = useWallet();

  // when the status of `connection` or `publicKey` changes, we execute the code block below
  React.useEffect(() => {
    const getInfo = async () => {
      if (connection && publicKey) {
        // we get the account info for the user's wallet data store and set the balance in our application's state
        const info = await connection.getAccountInfo(publicKey);
        setBalance(info!.lamports / web3.LAMPORTS_PER_SOL);
      }
    };
    getInfo();
    // the code above will execute whenever these variables change in any way
  }, [connection, publicKey]);

  const [user, setUser] = useState(false);
  const [connect, setConnect] = useState(false);

  const connectWallet = () => {
    console.log("connected");
    setUser(true);
  };

  return (
    <>
      {/* provides a connection to the solana json rpc api */}
      <walletAdapterReact.ConnectionProvider endpoint={endpoint}>
        {/* makes the wallet adapter available to the entirety of our application (wrapped in this component) */}
        <walletAdapterReact.WalletProvider wallets={wallets}>
          {/* provides components to the wrapped application */}
          <WalletModalProvider>
            <main className="text-white">
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
                  <div className="flex gap-1 ">
                    <WalletMultiButton>Connect </WalletMultiButton>
                      {/* <Wallet className="ml-4" />  */}
                    {/* <WalletMultiButton /> */}
                        
                  </div>
                </>
              )}
            </main>
          </WalletModalProvider>
        </walletAdapterReact.WalletProvider>
      </walletAdapterReact.ConnectionProvider>
    </>
  );
};

export default ConnectWallet;
function UserAvatar() {
  return (
    <Avatar className="rounded-lg">
      <AvatarImage src="/user.png" alt="user avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
