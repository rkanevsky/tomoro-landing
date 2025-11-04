"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All your data stays on your computer. No cloud uploads, no servers, no tracking. We can't access your data—only you can.",
  },
  {
    question: "Do I need internet to use Tomoro?",
    answer:
      "No. Tomoro is 100% offline. It works without internet. The only time you need internet is to purchase and download the license key.",
  },
  {
    question: "What if I lose my license key?",
    answer:
      "Don't worry. Your license key is tied to your Lemon Squeezy account. Log in to your account and download it again anytime.",
  },
  {
    question: "Can I use Tomoro on multiple computers?",
    answer:
      "Your license key is perpetual, but the current implementation is single-device. Future versions may support license upgrades for multi-device usage.",
  },
  {
    question: "Will my data work after the trial expires?",
    answer:
      "Yes! Your projects, timers, and notes are always saved locally. The trial period only affects the ability to use the app. After 14 days, you need a valid license key.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We use Lemon Squeezy for payments. They support credit cards, PayPal, and more. Check their site for all payment options.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. The price you see is the price you pay. One-time. No hidden charges, no subscriptions, no surprise fees.",
  },
  {
    question: "Do you plan to add a subscription model?",
    answer:
      "No. Tomoro is designed as a one-time purchase app for solo freelancers. We believe software should be owned, not rented.",
  },
  {
    question: "What happens if I find a bug?",
    answer:
      "Report it! We actively maintain and fix bugs. Updates are free for all license holders. You get lifetime updates for your one-time purchase.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes. Tomoro supports CSV export with 14 columns of project data. Your data is always yours to keep.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-32 bg-black-rich">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Frequently Asked
            <span className="block text-emerald-caribbean mt-2">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Everything you need to know about Tomoro licensing and features.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-teal-bangladesh/20 bg-teal-bangladesh/5 hover:border-emerald-caribbean/50 transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold hover:text-emerald-caribbean transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className={`text-emerald-caribbean transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="border-t border-teal-bangladesh/20 px-6 py-4 text-neutral-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 rounded-xl border border-emerald-caribbean/30 bg-emerald-caribbean/10 p-8 text-center">
          <h3 className="text-xl font-semibold mb-3">Didn't find your answer?</h3>
          <p className="text-neutral-400 mb-6">
            We're here to help. Reach out with any questions.
          </p>
          <button className="rounded-lg bg-emerald-caribbean px-6 py-2 font-semibold text-black-rich hover:bg-emerald-light transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
