import Image from "next/image";
import { cn } from "@/lib/utils";
import { FeatureCard } from "./feature-card";

interface FeatureSectionProps {
  title: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  className?: string;
  imageOnLeft?: boolean;
}

export function FeatureSection({
  title,
  features,
  imageSrc,
  imageAlt,
  className,
  imageOnLeft = false,
}: FeatureSectionProps) {
  return (
    <div
      className={cn("relative mx-auto w-full px-4 py-8 md:py-16", className)}
    >
      <div className="relative flex flex-col lg:flex-row">
        <div
          className={cn(
            "relative w-full flex flex-col lg:flex-row",
            imageOnLeft ? "lg:flex-row-reverse" : ""
          )}
        >
          <div className="flex-1 mb-8 lg:mb-0">
            <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:w-[90%] border rounded-[50px] overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center lg:justify-start">
            <div
              className={cn(
                "w-full max-w-[500px] lg:max-w-none",
                imageOnLeft ? "lg:pr-8" : "lg:pl-8"
              )}
            >
              <FeatureCard title={title} features={features} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
