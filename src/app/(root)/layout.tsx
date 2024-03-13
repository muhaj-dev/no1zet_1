import SideNav from "@/components/side-nav";
import TopNav from "@/components/top-nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex">
      <aside className="w-64 px-6 h-screen hidden lg:block bg-muted border">
        <SideNav />
      </aside>
      <div className="flex-1">
        <nav className="h-20 border-b flex items-center">
          <TopNav />
        </nav>
        <main className="">
          <ScrollArea className="h-[calc(100vh-5rem)] w-full px-10">
            {children}
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
