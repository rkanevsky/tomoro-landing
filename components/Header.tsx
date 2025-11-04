"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teal-bangladesh/20 bg-black-rich/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-emerald-caribbean flex items-center justify-center font-bold text-black-rich">
              T
            </div>
            <span className="hidden text-xl font-semibold text-neutral-100 sm:inline">
              Tomoro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm text-neutral-400 hover:text-emerald-caribbean transition-colors"
            >
              Features
            </Link>
            <Link
              href="#screenshots"
              className="text-sm text-neutral-400 hover:text-emerald-caribbean transition-colors"
            >
              Screenshots
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-neutral-400 hover:text-emerald-caribbean transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm text-neutral-400 hover:text-emerald-caribbean transition-colors"
            >
              FAQ
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-block rounded-lg bg-emerald-caribbean px-6 py-2 text-sm font-semibold text-black-rich hover:bg-emerald-light transition-colors">
              Start Trial
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-neutral-400 hover:text-emerald-caribbean"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-teal-bangladesh/20 py-4 md:hidden">
            <div className="space-y-3">
              <Link
                href="#features"
                className="block text-sm text-neutral-400 hover:text-emerald-caribbean transition-colors"
              >
                Features
              </Link>
              <Link
                href="#screenshots"
                className="block text-sm text-neutral-400 hover:text-emerald-caribbean transition-colors"
              >
                Screenshots
              </Link>
              <Link
                href="#pricing"
                className="block text-sm text-neutral-400 hover:text-emerald-caribbean transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="block text-sm text-neutral-400 hover:text-emerald-caribbean transition-colors"
              >
                FAQ
              </Link>
              <button className="w-full rounded-lg bg-emerald-caribbean px-4 py-2 text-sm font-semibold text-black-rich hover:bg-emerald-light transition-colors">
                Start Trial
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
