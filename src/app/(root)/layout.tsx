import Footer from "@/components/global/footer";
import Download from "@/components/global/cta";
import Navbar from "@/components/global/navbar";
import MaxWidthContainer from "@/components/max-width-container";
import React from "react";

const AppAlyout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <MaxWidthContainer className="mt-36 space-y-36">
        <Download />
        <Footer />
      </MaxWidthContainer>
    </div>
  );
};

export default AppAlyout;
