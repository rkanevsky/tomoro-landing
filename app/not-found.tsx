import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-rich">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-emerald-caribbean mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">Page not found</p>
        <p className="text-neutral-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="rounded-lg bg-emerald-caribbean px-6 py-2 font-semibold text-black-rich hover:bg-emerald-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
