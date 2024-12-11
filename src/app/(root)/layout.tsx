import Navbar from "@/components/global/navbar";
import React from "react";

const AppAlyout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default AppAlyout;
