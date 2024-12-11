import Image from "next/image";
import React from "react";

const data = [
  {
    title: "Discover",
    description: "Find salons in your area and view their\n availability.",
  },
  {
    title: "Book",
    description: "Choose a time slot and book your appointment\n instantly.",
  },
  {
    title: "Relax",
    description: "Enjoy hassle-free grooming while we\n handle the rest.",
  },
];

const Discover = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      {/* Heading */}
      <div className="flex justify-center items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight sm:leading-tight md:leading-[70px]">
          Exceptional Grooming,
          <br className="hidden sm:inline" />
          Tailored for You
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {data.map((item, index) => (
          <DiscoverCard key={index} index={index + 1} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Discover;

const DiscoverCard = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gradient-to-t from-[#86A49A80] to-black rounded-full">
        <Image src={`/dc${index}.png`} alt={title} width={30} height={30} />
      </div>
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-semibold">
          {index}. {title}
        </h3>
        <p className="text-sm font-light max-w-xs mt-2">{description}</p>
      </div>
    </div>
  );
};
