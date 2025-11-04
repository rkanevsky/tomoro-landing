"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-rich">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-emerald-caribbean mb-4">500</h1>
        <p className="text-2xl font-semibold mb-2">Something went wrong</p>
        <p className="text-neutral-400 mb-8">
          An error occurred while processing your request.
        </p>
        <button
          onClick={() => reset()}
          className="rounded-lg bg-emerald-caribbean px-6 py-2 font-semibold text-black-rich hover:bg-emerald-light transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
