"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black-rich py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-emerald-caribbean blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 h-96 w-96 rounded-full bg-teal-bangladesh blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-caribbean/30 bg-emerald-caribbean/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-caribbean"></span>
            <span className="text-xs font-semibold text-emerald-caribbean">
              Private. Offline. Forever.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Time flies.{" "}
            <span className="bg-gradient-to-r from-emerald-caribbean to-teal-mountain bg-clip-text text-transparent">
              We help you catch it.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in mt-6 text-lg text-neutral-400 delay-100">
            Professional time tracking and billing for solo freelancers.
            <br />
            No cloud. No tracking. No subscriptions.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in delay-200">
            <button className="group rounded-lg bg-emerald-caribbean px-8 py-3 font-semibold text-black-rich hover:bg-emerald-light transition-all duration-200 transform hover:scale-105">
              Start 14-Day Trial Free
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button className="rounded-lg border border-neutral-600 px-8 py-3 font-semibold text-neutral-100 hover:border-emerald-caribbean hover:bg-emerald-caribbean/5 transition-colors">
              See Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col items-center gap-3 text-sm text-neutral-500">
            <div>
              <span className="text-emerald-caribbean font-semibold">No credit card required</span>
              <span className="mx-2">•</span>
              <span>14-day trial included</span>
              <span className="mx-2">•</span>
              <span>License key required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
