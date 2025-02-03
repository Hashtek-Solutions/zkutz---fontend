import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <Card className="relative rounded-[2rem] p-1 sm:p-8 md:p-12 pb-0 lg:pb-12">
      <CardHeader>
        <CardTitle className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl md:leading-[60px] lg:leading-[70px]">
          Ready to Get Started?
        </CardTitle>
        <CardDescription className="mt-4 text-base font-light text-white sm:text-lg">
          Together, lets make every salon visit efficient, enjoyable{" "}
          <br className="hidden md:inline" /> and rewarding with ZkutZ.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2 sm:mt-6">
        <div>
          <h2 className="text-xl font-semibold sm:text-2xl">For Customers</h2>
          <div className="mt-3 flex gap-4 flex-row sm:items-start">
            <div className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white p-2 px-3 text-black w-fit">
              <Image
                src="/playstore-icon.svg"
                alt="Google Play"
                width={25}
                height={25}
              />
              <div>
                <p className="text-[10px] font-semibold leading-4">GET IT ON</p>
                <p className="text-[15px] font-semibold leading-4">
                  Google Play
                </p>
              </div>
            </div>
            <div className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white p-2 px-3 text-black w-fit">
              <Image
                src="/apple-icon.svg"
                alt="App Store"
                width={25}
                height={25}
              />
              <div>
                <p className="text-[10px] font-semibold leading-4">
                  Download on the
                </p>
                <p className="text-[15px] font-semibold leading-4">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-2 sm:mt-6 flex-col items-start gap-3">
        <h2 className="text-xl font-semibold sm:text-2xl">For Salon Owners</h2>
        <Link href={"/contact"}>
          <Button
            className="border border-gray-500 px-6 py-4 sm:px-8 sm:py-6"
            variant="ghost"
          >
            Contact Us
          </Button>
        </Link>
      </CardFooter>
      <div className="mt-8 flex justify-center lg:absolute lg:bottom-0 lg:right-8 xl:right-28">
        <Image
          src="/mobile.png"
          alt="Mobile App Preview"
          width={550}
          height={550}
          className="max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-full"
        />
      </div>
    </Card>
  );
};

export default CTA;
