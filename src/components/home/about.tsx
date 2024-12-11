import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="mx-auto w-full flex flex-col lg:flex-row">
      <div className="flex-1 space-y-6 lg:pr-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Who We Are
        </h2>
        <p className="text-base sm:text-lg font-light">
          At Zktuz, we&apos;re more than just a place to get a haircut -
          we&apos;re a community hub where style meets tradition. With years of
          expertise, a passion for precision, and a commitment to keeping you
          looking your best, we pride ourselves on delivering timeless cuts,
          fresh fades, and top-notch grooming services. From the moment you step
          through our doors, it&apos;s all about you.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-x-14 items-start sm:items-center">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-medium">50K+</h2>
            <p className="text-base sm:text-lg font-light text-muted-foreground">
              Downloads
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-medium">20+</h2>
            <p className="text-base sm:text-lg font-light text-muted-foreground">
              Services
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center mt-8 lg:mt-0">
        <div className="relative aspect-[4/5] w-full max-w-[400px] rounded-[50px] border border-gray-600 overflow-hidden">
          <Image
            src="/who-we-are.jpeg"
            alt="About Zktuz"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
