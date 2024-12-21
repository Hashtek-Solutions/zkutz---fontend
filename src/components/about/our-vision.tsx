import React from "react";
import Image from "next/image";

const OurVision = () => {
  return (
    <div className="mx-auto w-full flex flex-col lg:flex-row ">
      <div className="flex-1 space-y-6 lg:pr-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Our Vision
        </h2>
        <p className="text-base sm:text-lg font-light">
          At ZkutZ, our mission is to build a community where grooming becomes
          effortless and rewarding for customers, while salon owners enjoy
          simplified management and growth opportunities.
        </p>
        <p className="text-base sm:text-lg font-light">
          Join us today and experience the future of salon bookings and
          management.
        </p>
      </div>
      <div className="flex-1 flex justify-center mt-8 lg:mt-0">
        <div className="relative aspect-square md:aspect-square max-w-[500px] w-full rounded-[50px] border border-gray-600 overflow-hidden">
          <Image
            src="/about-img (1).png"
            alt="About Zktuz"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
