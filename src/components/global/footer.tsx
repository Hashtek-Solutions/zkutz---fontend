import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import AppLogo from "./app-logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const sections = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "#" },
      { name: "About", href: "#" },
      { name: "Services", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms and Conditions", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Call us on", href: "#" },
      { name: "(+1) 234 567 890", href: "#" },
      { name: "Email us", href: "#" },
      { name: "fH1H2@example.com", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="py-8 sm:py-10">
      <div className="container px-4 sm:px-6 lg:px-8">
        <footer>
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <AppLogo />
                </span>
                <p className="mt-4 sm:mt-6 text-sm text-muted-foreground">
                  Subscribe for updates and exclusive offers
                </p>
              </div>
              <div className="flex max-w-md items-center">
                <Input
                  className="rounded-full p-4 sm:p-6 border-gray-500"
                  placeholder="Enter your email"
                />
                <Button className="rounded-full p-2 sm:p-4 h-full">
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 sm:mb-6 font-medium uppercase">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 sm:mt-20 flex flex-col justify-between gap-4 border-t pt-6 sm:pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>Copyright 2024, ZKUTZ, All rights reserved.</p>

            <ul className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 text-white">
              <li className="font-medium hover:text-primary">
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="size-5 sm:size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#" aria-label="Facebook">
                  <FaFacebook className="size-5 sm:size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#" aria-label="Twitter">
                  <FaTwitter className="size-5 sm:size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin className="size-5 sm:size-6" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;

