"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactForm() {
  return (
    <div className=" bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column - Form */}
        <div>
          <h1 className="text-4xl font-serif mb-4">Send Enquiry</h1>
          <p className="text-gray-400 mb-8">
            Have a specific query? Fill out the form below, and we&apos;ll get
            back to you shortly:
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Name
              </label>
              <Input
                id="name"
                placeholder="Type full name here"
                className="bg-zinc-900 rounded-full border-zinc-800 text-white placeholder:text-zinc-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Email"
                className="bg-zinc-900 rounded-full border-zinc-800 text-white placeholder:text-zinc-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <Textarea
                id="message"
                rows={6}
                className="bg-zinc-900 rounded-2xl border-zinc-800 text-white placeholder:text-zinc-500 resize-none"
              />
            </div>

            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
              Send Message
            </Button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-serif">Get In Touch</h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-2xl p-6 flex items-start gap-4 border">
              <Image
                src="/contact-icon (1).png"
                alt="Logo"
                width={50}
                height={50}
                className="w-6 h-5 mt-1"
              />
              <div>
                <p className="text-lg">info@zkutz.com</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 flex items-start gap-4 border">
              <Image
                src="/contact-icon (4).png"
                alt="Logo"
                width={50}
                height={50}
                className="w-5 h-5 mt-1"
              />
              <div>
                <p>Call us on</p>
                <p className="text-lg">(844) 646-8546</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 flex items-start gap-4 border">
            <Image
                src="/contact-icon (2).png"
                alt="Logo"
                width={50}
                height={50}
                className="w-5 h-6 mt-1"
              />
              <div>
                <p className="text-lg">1234 Placeholder Lane</p>
                <p>Faketown, FA 56789</p>
                <p>United States</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 flex items-start gap-4 border">
            <Image
                src="/contact-icon (3).png"
                alt="Logo"
                width={50}
                height={50}
                className="w-7 h-6 mt-1"
              />
              <div>
                <p>
                  For app-related queries or assistance, feel free to contact
                  our customer support team:
                </p>
                <p className="text-lg mt-2">info@zkutz.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
