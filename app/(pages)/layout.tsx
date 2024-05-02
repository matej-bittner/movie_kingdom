import React, { ReactNode, Suspense } from "react";
import Header from "@/components/Header";
import Loading from "@/app/(pages)/(root)/all-movies/loading";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default RootLayout;
