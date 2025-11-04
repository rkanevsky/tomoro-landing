"use client";

import { useState } from "react";

export default function Pricing() {
  const [showTrialInfo, setShowTrialInfo] = useState(false);

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-black-rich">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Simple, Honest
            <span className="block text-emerald-caribbean mt-2">
              Lifetime Pricing
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            One-time purchase. No subscriptions. No surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Early Bird Price */}
          <div className="relative rounded-xl border border-emerald-caribbean/50 bg-gradient-to-br from-teal-bangladesh/20 to-teal-mountain/10 p-8 hover:border-emerald-caribbean transition-all duration-300">
            <div className="absolute -top-4 left-6 bg-black-rich px-3 py-1 rounded-full">
              <span className="text-xs font-semibold text-emerald-caribbean">
                EARLY BIRD
              </span>
            </div>

            <div className="mt-6">
              <p className="text-neutral-400 text-sm">Available for first</p>
              <p className="text-2xl font-bold text-emerald-caribbean">
                100 licenses
              </p>
            </div>

            <div className="mt-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">$69</span>
                <span className="text-neutral-400">one-time</span>
              </div>
              <p className="text-xs text-neutral-500 mt-2">
                Covers all future updates forever
              </p>
            </div>

            <button className="mt-8 w-full rounded-lg bg-emerald-caribbean px-6 py-3 font-semibold text-black-rich hover:bg-emerald-light transition-all duration-200 transform hover:scale-105">
              Get Early Bird Price
            </button>

            <p className="mt-4 text-center text-xs text-neutral-500">
              No credit card for trial.
              <br />
              License key required.
            </p>
          </div>

          {/* Regular Price */}
          <div className="relative rounded-xl border border-teal-bangladesh/20 bg-teal-bangladesh/5 p-8 hover:border-emerald-caribbean/50 transition-all duration-300">
            <div className="absolute -top-4 left-6 bg-black-rich px-3 py-1 rounded-full">
              <span className="text-xs font-semibold text-neutral-400">
                REGULAR
              </span>
            </div>

            <div className="mt-6">
              <p className="text-neutral-400 text-sm">After early bird runs out</p>
              <p className="text-2xl font-bold text-neutral-100">
                100+ licenses
              </p>
            </div>

            <div className="mt-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-neutral-400">one-time</span>
              </div>
              <p className="text-xs text-neutral-500 mt-2">
                Covers all future updates forever
              </p>
            </div>

            <button className="mt-8 w-full rounded-lg border border-neutral-600 px-6 py-3 font-semibold text-neutral-100 hover:border-emerald-caribbean hover:bg-emerald-caribbean/5 transition-colors">
              Purchase License
            </button>

            <p className="mt-4 text-center text-xs text-neutral-500">
              No subscription. No surprise charges.
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="mt-16 rounded-xl border border-teal-bangladesh/20 bg-teal-bangladesh/5 p-8">
          <h3 className="text-xl font-semibold mb-6">What You Get</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "14-day free trial (license key included)",
              "All features unlocked",
              "Free updates forever",
              "One-time payment, lifetime access",
              "Multi-currency support (10+ currencies)",
              "Desktop-first experience",
              "Local storage only (your data, your control)",
              "Automatic backups (7 rotating backups)",
              "CSV export for all projects",
              "17 keyboard shortcuts",
              "License key activation",
              "Professional support",
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="h-5 w-5 text-emerald-caribbean flex-shrink-0">
                  ✓
                </span>
                <span className="text-neutral-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Trial Info */}
        <div className="mt-12 rounded-xl border border-teal-bangladesh/30 bg-teal-bangladesh/10 p-8">
          <button
            onClick={() => setShowTrialInfo(!showTrialInfo)}
            className="flex w-full items-center justify-between text-lg font-semibold hover:text-emerald-caribbean transition-colors"
          >
            <span>How does the 14-day trial work?</span>
            <span className={`transition-transform ${showTrialInfo ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>
          {showTrialInfo && (
            <div className="mt-4 space-y-3 border-t border-teal-bangladesh/20 pt-4 text-neutral-400">
              <p>
                <span className="font-semibold text-neutral-100">1. Download App</span>
                <br />
                Get the Tomoro desktop app for Windows (macOS/Linux coming soon).
              </p>
              <p>
                <span className="font-semibold text-neutral-100">
                  2. Start Trial
                </span>
                <br />
                Trial is baked into the app. Generates a trial license key automatically.
                No credit card needed.
              </p>
              <p>
                <span className="font-semibold text-neutral-100">
                  3. Purchase License
                </span>
                <br />
                Before trial expires, purchase a license key from Lemon Squeezy.
                Instant delivery to your email.
              </p>
              <p>
                <span className="font-semibold text-neutral-100">
                  4. Activate License
                </span>
                <br />
                Enter your license key in the app. Lifetime access unlocked.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
