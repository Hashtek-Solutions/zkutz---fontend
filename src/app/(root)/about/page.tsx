import MaxWidthContainer from "@/components/max-width-container";
import React from "react";

const About = () => {
  return (
    <section className="hero-bg-image flex h-[600px] w-full items-center justify-center">
      <MaxWidthContainer>
        <div className="mx-auto max-w-screen-lg text-center">
          <h1 className="text-4xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] sm:leading-tight md:leading-tight lg:leading-[80px] xl:leading-[90px]">
          Your Grooming, Simplified
          </h1>
        </div>
        <div className="mx-auto mt-4 max-w-5xl text-center text-base sm:text-lg font-light sm:mt-6 md:mt-8">
        At ZkutZ, we believe in redefining the salon experience for both customers and salon owners. Our platform is built to eliminate the hassle of waiting times and disorganized bookings, creating a smooth and stress-freejourney for everyone
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default About;
