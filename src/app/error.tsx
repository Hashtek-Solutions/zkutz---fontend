"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RefreshCcw, Home, AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <Alert variant="destructive" className="border-destructive/50">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error.message || "Something went wrong!"}</AlertDescription>
        </Alert>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Oops! An Error Occurred</h1>
          <p className="text-muted-foreground">
            We apologize for the inconvenience. Our team has been notified and is working on a fix.
          </p>
        </div>

        {/* <div className="w-full max-w-sm mx-auto">
          <svg className="w-full" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="120" fill="none" />
            <path
              d="M30 60 L60 30 L90 60 L120 30 L150 60 L180 30 L210 60"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div> */}

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={() => reset()} className="inline-flex items-center">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

