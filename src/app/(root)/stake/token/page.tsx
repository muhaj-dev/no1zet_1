import { DashboardLogo, StakeIcon } from "@/components/svgs";
import { Button, buttonVariants } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import React from "react";

export interface Props {}

export default function Page(props: Props) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="bg-muted p-6 rounded-xl">
        <div className="space-x-6 flex items-center mb-12">
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="22.5"
              cy="22.5"
              r="22.5"
              fill="#AA6C39"
              fill-opacity="0.4"
            />
            <circle cx="22.4999" cy="22.5" r="17.161" fill="#AA6C39" />
            <path
              d="M31.3252 13.6373V16.4736C31.3252 18.6183 29.886 20.423 27.9241 20.972V16.8231H24.0837C24.7011 14.9728 26.4452 13.6373 28.4979 13.6373H31.3233H31.3252Z"
              fill="white"
            />
            <path
              d="M21.7809 27.2315C21.1901 29.1293 19.4233 30.5085 17.3346 30.5085H14.5073V27.6742C14.5073 25.6624 15.7742 23.9508 17.5486 23.2897V27.2315H21.7809Z"
              fill="white"
            />
            <path
              d="M21.9911 18.3106V21.1449H19.1639C18.5958 21.1449 18.0504 21.0442 17.5486 20.8561C15.7742 20.197 14.5073 18.4834 14.5073 16.4736V13.6373H17.3346C19.3892 13.6373 21.1333 14.9728 21.7506 16.8231C21.9078 17.2904 21.9911 17.79 21.9911 18.3106Z"
              fill="white"
            />
            <path
              d="M31.3251 27.6741V30.5084H28.4979C26.411 30.5084 24.6442 29.1292 24.0534 27.2315C23.9152 26.7907 23.8413 26.3215 23.8413 25.8371V23.0009H26.6686C27.1022 23.0009 27.5245 23.0597 27.9241 23.1737C29.8859 23.7227 31.3251 25.5293 31.3251 27.6741Z"
              fill="white"
            />
          </svg>

          <h1 className="text-3xl font-semibold">N01ZET Staking</h1>
        </div>

        <div className="grid grid-cols-2 gap-24">
          {/* Available in wallet side pannel */}
          <div className="">
            <div className="">
              <h2 className="font-serif text-base font-semibold mb-1">
                Available in wallet
              </h2>
              <div className="flex justify-between items-center">
                <p className="text-lg">0.00</p>
                <Button variant="link"> Max</Button>
              </div>
            </div>
            <div className="my-9 flex items-center justify-between space-x-1">
              <Button variant="outline" size="icon">
                <MinusIcon />
              </Button>
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "outline",
                  className:
                    "flex-1 hover:bg-transparent bg-transparent border border-outline",
                })}
              >
                0
              </div>
              <Button variant="outline" size="icon">
                <PlusIcon />
              </Button>
            </div>
            <Button className="w-full">Stake</Button>
          </div>

          {/* Total Staked side pannel */}
          <div className="">
            <div className="">
              <h2 className="font-serif text-base font-semibold mb-1">
                Total Staked
              </h2>
              <div className="flex justify-between items-center">
                <p className="text-lg">0.00</p>
                <Button variant="link"> Max</Button>
              </div>
            </div>
            <div className="my-9 flex items-center justify-between space-x-1">
              <Button variant="outline" size="icon">
                <MinusIcon />
              </Button>
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "outline",
                  className:
                    "flex-1 hover:bg-transparent bg-transparent border border-outline",
                })}
              >
                0
              </div>
              <Button variant="outline" size="icon">
                <PlusIcon />
              </Button>
            </div>
            <Button className="w-full">Unstake</Button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-9">
          <p>Pending rewards: 0.00</p>
          <Button>
            Claim{" "}
            <div className="ml-5">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12.5L3 7.5L4.4 6.05L7 8.65V0.5H9V8.65L11.6 6.05L13 7.5L8 12.5ZM0 16.5V11.5H2V14.5H14V11.5H16V16.5H0Z"
                  fill="white"
                />
              </svg>
            </div>
          </Button>
        </div>
      </div>
      <div className="bg-muted  p-6"></div>
    </div>
  );
}
