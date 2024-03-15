import React, { PropsWithChildren } from "react";
import Header from "./_components/header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <section>{children}</section>
    </div>
  );
}
