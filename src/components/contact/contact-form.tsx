// ContactForm.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";
import { useFormStatus } from "react-dom";
import { sendContactEmail } from "@/actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-white text-black hover:bg-gray-100 rounded-full px-8"
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    const result = await sendContactEmail(formData);

    if (result.success) {
      toast.success("Message sent successfully!");
      formRef.current?.reset();
    } else {
      toast.error(result.error || "Failed to send message");
    }
  }

  return (
    <div className="bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column - Form */}
        <div>
          <h1 className="text-4xl font-serif mb-4">Send Enquiry</h1>
          <p className="text-gray-400 mb-8">
            Have a specific query? Fill out the form below, and we&apos;ll get
            back to you shortly:
          </p>

          <form ref={formRef} action={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
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
                name="email"
                type="email"
                required
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
                name="message"
                required
                rows={6}
                className="bg-zinc-900 rounded-2xl border-zinc-800 text-white placeholder:text-zinc-500 resize-none"
              />
            </div>

            <SubmitButton />
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-serif">Get In Touch</h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-2xl p-6 flex items-start gap-4 border border-zinc-800">
              <Image
                src="/contact-icon (1).png"
                alt="Email icon"
                width={24}
                height={20}
                className="mt-1"
              />
              <div>
                <p className="text-lg">info@zkutz.com</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 flex items-start gap-4 border border-zinc-800">
              <Image
                src="/contact-icon (4).png"
                alt="Phone icon"
                width={20}
                height={20}
                className="mt-1"
              />
              <div>
                <p>Call us on</p>
                <p className="text-lg">(844) 646-8546</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 flex items-start gap-4 border border-zinc-800">
              <Image
                src="/contact-icon (2).png"
                alt="Location icon"
                width={20}
                height={24}
                className="mt-1"
              />
              <div>
                <p className="text-lg">1234 Placeholder Lane</p>
                <p>Faketown, FA 56789</p>
                <p>United States</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 flex items-start gap-4 border border-zinc-800">
              <Image
                src="/contact-icon (3).png"
                alt="Support icon"
                width={28}
                height={24}
                className="mt-1"
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
