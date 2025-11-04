"use client";

const features = [
  {
    icon: "🔒",
    title: "100% Private",
    description: "All data stored locally. No cloud, no tracking, no telemetry.",
  },
  {
    icon: "⏱️",
    title: "Multiple Timers",
    description: "Run timers for multiple projects simultaneously. Survives restart.",
  },
  {
    icon: "💵",
    title: "Smart Billing",
    description:
      "Hourly, daily, fixed-price, or per-item billing. Automatic calculations.",
  },
  {
    icon: "📦",
    title: "Deliverable Tracking",
    description: "Bill by deliverables with unit price × quantity. Track time per item.",
  },
  {
    icon: "🌍",
    title: "Multi-Currency",
    description: "10+ currencies: USD, EUR, GBP, JPY, CNY, CHF, CAD, AUD, ILS, RUB.",
  },
  {
    icon: "💾",
    title: "Auto-Backup",
    description: "Automatic backup on close. Keep last 7 timestamped backups.",
  },
  {
    icon: "📊",
    title: "CSV Export",
    description: "Export all projects to CSV with 14 columns of detailed data.",
  },
  {
    icon: "⌨️",
    title: "Keyboard First",
    description: "17 keyboard shortcuts. Full keyboard navigation. Minimal mouse needed.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-black-rich">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Built for
            <span className="block text-emerald-caribbean mt-2">
              Professional Freelancers
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Everything you need to track time and bill accurately. Nothing you don't.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-teal-bangladesh/20 bg-teal-bangladesh/5 p-6 hover:border-emerald-caribbean/50 hover:bg-teal-bangladesh/10 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-400">{feature.description}</p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-caribbean/0 to-teal-mountain/0 group-hover:from-emerald-caribbean/5 group-hover:to-teal-mountain/5 transition-all duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
