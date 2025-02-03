import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            404
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight text-muted-foreground">
            Page not found
          </h2>
        </div>
        {/* <div className="w-full max-w-sm mx-auto">
          <svg
            className="w-full"
            viewBox="0 0 240 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="240" height="120" fill="none" />
            <path
              d="M30 97.5L120 7.5L210 97.5"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="120" cy="97.5" r="7.5" fill="currentColor" />
          </svg>
        </div> */}
        <p className="text-muted-foreground">
          Oops! The page you&apos;re looking for seems to have wandered off.
          Let&apos;s get you back on track.
        </p>
        <Button asChild className="inline-flex items-center">
          <Link href="/">
            <MoveLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
