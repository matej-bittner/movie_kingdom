import React, { ReactNode } from "react";
import Header from "@/components/Header";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default RootLayout;
