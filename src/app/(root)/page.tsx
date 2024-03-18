import ConnectWallet from "@/components/Wallet";
import {
  ClockIcon,
  DashboardLogo,
  GraphIcon,
  MoneyIcon,
  StakeIcon,
} from "@/components/svgs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import * as React from "react";

export interface Props {}

export default function Page(props: Props) {
  const dashboardOverview = [
    {
      overview: "total staked",
      figure: "7.38 SOL",
      icon: <StakeIcon />,
    },
    {
      overview: "Average APR",
      figure: "107%",
      icon: <GraphIcon />,
    },
    {
      overview: "total earning",
      figure: "0.51 SOL",
      icon: <MoneyIcon />,
    },
    {
      overview: "Total duration",
      figure: "64.3 Weeks",
      icon: <ClockIcon />,
    },
  ];

  return (
    <div className="pb-10">
      <div className="flex items-center space-x-4 lg:space-x-8 my-8 lg:my-10">
        <DashboardLogo className="size-8 lg:size-14" />
        <h1 className="text-2xl lg:text-3xl font-semibold">
          Dashboard Overview
        </h1>
      </div>
      <div className="w-full mb-5 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
        {dashboardOverview.map(({ figure, overview, icon }) => (
          <div key={overview} className="py-8 px-6 bg-muted rounded-lg">
            <div className="flex space-x-4 items-center">
              <div className="size-6 lg:size-10 bg-[#674226] items-center justify-center flex rounded-lg">
                {icon}
              </div>
              <div className="space-y-1">
                <h2 className="text-[0.65rem] lg:text-xs font-normal">
                  {overview}
                </h2>
                <h3 className="text-sm lg:text-lg font-semibold">{figure}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 lg:grid-rows-2 gap-5">
        <Vesting />
        <Shedule />
        <Graph />
        <Reward />
      </div>
    </div>
  );
}

function Vesting() {
  return (
    <div className="col-span-full lg:col-span-3 bg-muted rounded-xl p-6">
      <div className="flex justify-between items-center">
        <div>
          <p className=" lg:text-xs text-foreground/70 text-[0.65rem]">
            VESTED SO FAR
          </p>
          <div className="flex space-x-3">
            <h3 className="text-sm lg:text-lg  font-semibold">
              154,189 N01zet
            </h3>
            <Badge className="text-[0.65rem] text-foreground py-0.5 px-1 lg:text-sm">
              64%
            </Badge>
          </div>
        </div>

        <div className="text-right">
          <p className=" lg:text-xs text-foreground/70 text-[0.65rem]">
            TOTAL VESTING
          </p>
          <h3 className="text-sm lg:text-lg  font-semibold">240,000 N01zet</h3>
        </div>
      </div>

      {/* progress bar */}
      <div className="my-5">
        <Progress value={64} />
      </div>

      {/* release */}
      <div className="flex space-x-3">
        <h3 className="text-lg font-semibold">
          130,557 N01zet <span className="font-light">released</span>
        </h3>
        <Badge className="text-[0.65rem] text-foreground py-0.5 px-1 lg:text-sm">
          64%
        </Badge>
      </div>
    </div>
  );
}

function Shedule() {
  const shedules = [
    {
      date: "November 29,2023",
      label: "Contract in place",
    },
    {
      date: "November 29,2023",
      label: "1 month cliff started",
    },
    {
      date: "December 29,2023",
      label: "Cliff started",
    },
    {
      date: "December 29,2023",
      label: "Vesting begin",
    },
  ];

  return (
    <div className="bg-muted col-span-full lg:row-span-full lg:col-start-4 rounded-xl p-6">
      <div className="mb-8">
        <h3 className="text-lg font-semibold">Vesting Schedule</h3>
      </div>
      {shedules.map((schedule) => (
        <Step key={schedule.date} date={schedule.date} label={schedule.label} />
      ))}
    </div>
  );
}

interface StepProps {
  date: string;
  label: string;
}

function Step({ date, label }: StepProps) {
  return (
    <div className="relative my-4">
      <div className="flex items-center space-x-5">
        <div className="size-2 bg-primary rounded-full" />
        <div className="">
          <h4 className="text-xs">{date}</h4>
          <h3 className="text-sm font-semibold">{label}</h3>
        </div>
      </div>
    </div>
  );
}

function Graph() {
  return (
    <div className="bg-muted rounded-xl col-span-full lg:col-span-2">heyy</div>
  );
}
function Reward() {
  return (
    <div className="bg-muted p-5 flex flex-col  col-span-full lg:col-span-1 items-center space-y-10 rounded-xl">
      <div className="space-y-3 flex flex-col items-center">
        <DashboardLogo className="size-14" />
        <h4 className="text-lg font-semibold text-center ">My Rewards</h4>
      </div>
      <div className="flex flex-col items-center ">
        <p className="text-xs font-normal text-center">Unclaimed Rewards</p>

        <p className="text-lg font-semibold text-center  text-primary">
          200 SOL
        </p>
      </div>
      <div className="flex flex-col items-center w-full space-y-3">
        <p className="text-xs font-normal text-center">
          Total claimed Rewards:1000 SOL
        </p>
        <Button className="w-full">Claim Rewards</Button>
      </div>
    </div>
  );
}
