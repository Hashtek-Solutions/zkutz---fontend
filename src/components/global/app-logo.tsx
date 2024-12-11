import Image from "next/image";
import React from "react";

const AppLogo = () => {
  return (
    <a
      href="/"
      className="mr-4 block cursor-pointer py-1.5 text-base  font-semibold"
    >
      <Image src={"/logo.svg"} alt="" width={90} height={50} />
    </a>
  );
};

export default AppLogo;
