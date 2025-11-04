"use client";

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-20 sm:py-32 bg-black-rich">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Clean. Minimal.
            <span className="block text-emerald-caribbean mt-2">
              Beautifully Simple
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Desktop-optimized UI with keyboard shortcuts. One row per project, inline editing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Screenshot 1 */}
          <div className="group relative rounded-xl overflow-hidden border border-teal-bangladesh/20 bg-teal-bangladesh/5 p-4 hover:border-emerald-caribbean/50 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-teal-bangladesh/20 to-teal-mountain/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">📊</div>
                <p className="text-neutral-400 text-sm">
                  Main Projects View
                </p>
                <p className="text-neutral-500 text-xs mt-2">
                  [Screenshot placeholder]
                </p>
              </div>
            </div>
            <p className="mt-4 font-semibold text-sm">
              One-Row Projects
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              See all active projects at a glance with real-time timers and earnings.
            </p>
          </div>

          {/* Screenshot 2 */}
          <div className="group relative rounded-xl overflow-hidden border border-teal-bangladesh/20 bg-teal-bangladesh/5 p-4 hover:border-emerald-caribbean/50 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-teal-bangladesh/20 to-teal-mountain/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">💰</div>
                <p className="text-neutral-400 text-sm">
                  Billing Details
                </p>
                <p className="text-neutral-500 text-xs mt-2">
                  [Screenshot placeholder]
                </p>
              </div>
            </div>
            <p className="mt-4 font-semibold text-sm">
              Smart Billing
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              Support for hourly, daily, fixed-price, and per-item rate types.
            </p>
          </div>

          {/* Screenshot 3 */}
          <div className="group relative rounded-xl overflow-hidden border border-teal-bangladesh/20 bg-teal-bangladesh/5 p-4 hover:border-emerald-caribbean/50 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-teal-bangladesh/20 to-teal-mountain/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">📝</div>
                <p className="text-neutral-400 text-sm">
                  Notes & Details
                </p>
                <p className="text-neutral-500 text-xs mt-2">
                  [Screenshot placeholder]
                </p>
              </div>
            </div>
            <p className="mt-4 font-semibold text-sm">
              Tabbed Notes
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              Multiple notes tabs per project. Inline editing everywhere.
            </p>
          </div>

          {/* Screenshot 4 */}
          <div className="group relative rounded-xl overflow-hidden border border-teal-bangladesh/20 bg-teal-bangladesh/5 p-4 hover:border-emerald-caribbean/50 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-teal-bangladesh/20 to-teal-mountain/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">⏱️</div>
                <p className="text-neutral-400 text-sm">
                  Timer Sessions
                </p>
                <p className="text-neutral-500 text-xs mt-2">
                  [Screenshot placeholder]
                </p>
              </div>
            </div>
            <p className="mt-4 font-semibold text-sm">
              Timer History
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              Full session history with timestamps and optional session notes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
