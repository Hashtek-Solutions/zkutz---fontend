import React from "react";
import MaxWidthContainer from "@/components/max-width-container";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-bg-image flex min-h-screen w-full items-center justify-center">
      <MaxWidthContainer>
        <div className="mx-auto max-w-screen-lg text-center">
          <h1 className="text-4xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] sm:leading-tight md:leading-tight lg:leading-[80px] xl:leading-[90px]">
            Effortless Salon Bookings for Customers and Owners!
          </h1>
        </div>
        <div className="mx-auto mt-4 max-w-md text-center text-base sm:text-lg font-light sm:mt-6 md:mt-8">
          Discover the ultimate app for reducing wait times and managing
          bookings with ease.
        </div>
        <div className="mt-6 flex  items-center justify-center gap-4 flex-row sm:mt-8">
          <DownloadButton
            icon="/playstore-icon.svg"
            alt="Google Play"
            topText="GET IT ON"
            bottomText="Google Play"
          />
          <DownloadButton
            icon="/apple-icon.svg"
            alt="App Store"
            topText="Download on the"
            bottomText="App Store"
          />
        </div>
      </MaxWidthContainer>
    </section>
  );
};

interface DownloadButtonProps {
  icon: string;
  alt: string;
  topText: string;
  bottomText: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  icon,
  alt,
  topText,
  bottomText,
}) => {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white p-2 px-3 text-black">
      <Image src={icon} alt={alt} width={25} height={25} />
      <div>
        <p className="text-[10px] font-semibold leading-4">{topText}</p>
        <p className="text-[16px] font-semibold leading-4">{bottomText}</p>
      </div>
    </div>
  );
};

export default Hero;
