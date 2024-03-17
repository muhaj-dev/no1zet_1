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
      <div className="grid grid-cols-2 h-fit gap-5">
        <div className="bg-muted rounded-xl p-6">
          <StakingOverview
            info
            overview="Total Staking"
            figure="250,000.000 N01zet"
          />
        </div>
        <div className="bg-muted rounded-xl p-6">
          <StakingOverview
            info
            figure="134577.09% ARP"
            overview="Estimated Reward"
          />
        </div>

        <div className="col-span-full bg-muted p-6 rounded-xl">
          <div className="col-span-full mb-6">
            <h4 className="text-lg font-semibold">Staking Summary</h4>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="">
              <StakingOverview overview="N01ZET Price" figure="$0.0988" />
            </div>

            <div className="">
              <StakingOverview info overview="Daily Rewards" figure="1232435" />
            </div>
            <div className="">
              <StakingOverview
                info
                overview="Total Supply"
                figure="7,000,000,000.00"
              />
            </div>

            <div className="">
              <StakingOverview overview="Interest period" figure="8 Months" />
            </div>
            <div className="">
              <StakingOverview
                overview="Stake start date"
                figure="29-11-2023"
              />
            </div>
            <div className="">
              <StakingOverview
                info
                overview="Stake End date"
                figure="29-11-2023"
              />
            </div>
          </div>
          <Button className="mt-8">
            Audit
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
    </div>
  );
}

function StakingOverview({
  overview,
  figure,
  info,
}: {
  overview: string;
  figure: string;
  info?: boolean;
}) {
  return (
    <>
      <div className="space-x-1 mb-2 flex items-center">
        <p className="text-xs font-normal">{overview}</p>
        {info && (
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.65625 7.25C5.65625 7.32459 5.62662 7.39613 5.57388 7.44887C5.52113 7.50162 5.44959 7.53125 5.375 7.53125C5.20095 7.53125 5.03403 7.46211 4.91096 7.33904C4.78789 7.21597 4.71875 7.04905 4.71875 6.875V5C4.71875 4.97514 4.70888 4.95129 4.69129 4.93371C4.67371 4.91613 4.64987 4.90625 4.625 4.90625C4.55041 4.90625 4.47887 4.87662 4.42613 4.82387C4.37338 4.77113 4.34375 4.69959 4.34375 4.625C4.34375 4.55041 4.37338 4.47887 4.42613 4.42613C4.47887 4.37338 4.55041 4.34375 4.625 4.34375C4.79905 4.34375 4.96597 4.41289 5.08904 4.53596C5.21211 4.65903 5.28125 4.82595 5.28125 5V6.875C5.28125 6.89986 5.29113 6.92371 5.30871 6.94129C5.32629 6.95887 5.35014 6.96875 5.375 6.96875C5.44959 6.96875 5.52113 6.99838 5.57388 7.05113C5.62662 7.10387 5.65625 7.17541 5.65625 7.25ZM4.8125 3.40625C4.90521 3.40625 4.99584 3.37876 5.07293 3.32725C5.15001 3.27574 5.21009 3.20254 5.24557 3.11688C5.28105 3.03123 5.29033 2.93698 5.27224 2.84605C5.25416 2.75512 5.20951 2.6716 5.14396 2.60604C5.0784 2.54049 4.99488 2.49584 4.90395 2.47776C4.81302 2.45967 4.71877 2.46895 4.63312 2.50443C4.54747 2.53991 4.47426 2.59999 4.42275 2.67708C4.37124 2.75416 4.34375 2.84479 4.34375 2.9375C4.34375 3.06182 4.39314 3.18105 4.48105 3.26896C4.56895 3.35686 4.68818 3.40625 4.8125 3.40625ZM9.78125 5C9.78125 5.94564 9.50084 6.87005 8.97547 7.65632C8.4501 8.44259 7.70337 9.05542 6.82971 9.4173C5.95605 9.77918 4.9947 9.87387 4.06723 9.68938C3.13975 9.50489 2.28782 9.04952 1.61915 8.38085C0.950478 7.71218 0.495108 6.86025 0.310623 5.93278C0.126137 5.0053 0.220822 4.04395 0.582703 3.1703C0.944585 2.29664 1.55741 1.54991 2.34368 1.02454C3.12995 0.499165 4.05436 0.21875 5 0.21875C6.26761 0.220239 7.48288 0.724454 8.37921 1.62079C9.27555 2.51713 9.77976 3.73239 9.78125 5ZM9.21875 5C9.21875 4.16561 8.97133 3.34996 8.50776 2.65619C8.0442 1.96242 7.38532 1.42169 6.61445 1.10238C5.84357 0.783076 4.99532 0.699531 4.17696 0.862312C3.35861 1.02509 2.6069 1.42689 2.0169 2.01689C1.42689 2.6069 1.0251 3.35861 0.862314 4.17696C0.699533 4.99532 0.783078 5.84357 1.10239 6.61445C1.42169 7.38532 1.96242 8.0442 2.65619 8.50776C3.34996 8.97132 4.16561 9.21875 5 9.21875C6.1185 9.21751 7.19084 8.77264 7.98174 7.98174C8.77264 7.19084 9.21751 6.1185 9.21875 5Z"
              fill="#ABABAB"
            />
          </svg>
        )}
      </div>

      <h4 className="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
        {figure}
      </h4>
    </>
  );
}
