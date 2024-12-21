"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Download App", href: "/" },
  ];

  return (
    <nav className="fixed left-1/2 z-50 top-4 w-[95%] max-w-screen-xs -translate-x-1/2 overflow-hidden rounded-xl border border-gray-700 bg-white/10 bg-opacity-90 px-4 py-2 shadow backdrop-blur-sm backdrop-saturate-150 md:max-w-screen-lg lg:max-w-screen-xl lg:px-8 lg:py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="mr-4 block cursor-pointer py-1.5 text-base font-semibold"
        >
          <Image src="/logo.svg" alt="Logo" width={90} height={50} />
        </Link>
        <div className="hidden lg:block">
          <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-x-2 p-1 text-sm text-white"
              >
                <Link href={item.href} className="flex items-center">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-x-2 p-1 text-sm text-white">
              <Button>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </li>
          </ul>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="relative ml-auto h-8 w-8 rounded-lg text-center align-middle text-xs font-medium uppercase text-white transition-all hover:bg-white/10 focus:bg-white/10 active:bg-white/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-2 py-1 text-lg hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-4">Contact Us</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
