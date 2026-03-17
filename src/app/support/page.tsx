"use client";

import { useState } from "react";

const faqs = [
  { q: "What ages is Bible Scholar Kids designed for?", a: "Bible Scholar Kids is designed for children ages 6\u201312. The content, reading level, and quiz difficulty are all calibrated for this age range." },
  { q: "Is the app safe for my child?", a: "Yes. Bible Scholar Kids has no ads, no social features, no stranger contact, and is COPPA compliant. All data stays on the device. Settings are protected behind a parent gate." },
  { q: "How do I cancel my subscription?", a: "Subscriptions are managed through the App Store (iOS) or Google Play (Android). Go to your device\u2019s subscription settings to cancel anytime." },
  { q: "How do I restore my purchase on a new device?", a: "Open the app on your new device, go to Settings, and tap \u2018Restore Purchases.\u2019 Make sure you\u2019re signed in with the same Apple ID or Google account." },
  { q: "What Bible translations are available?", a: "Bible Scholar Kids includes 6 translations: English (KJV), Spanish, French, Portuguese, Chinese, and Arabic." },
  { q: "How do I access the parent dashboard?", a: "Tap the parent icon in the app\u2019s settings. You\u2019ll need to solve a simple math problem (parent gate) to access the dashboard." },
  { q: "Can multiple children use the app on one device?", a: "Yes! The Family plan supports up to 5 kid profiles, each with their own progress, Shepherd companion, and achievements." },
  { q: "How do I reset my child\u2019s progress?", a: "Go to the Parent Dashboard > Settings > Reset Progress. This will clear all episode progress and quiz history but keep cosmetic items." },
  { q: "Does the app work offline?", a: "Yes. Once episodes are downloaded, your child can play without an internet connection. Daily verses and missions require a brief connection to sync." },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark">How Can We Help?</h1>
          <p className="mt-4 text-muted">Find answers to common questions below, or reach out to our team.</p>
        </div>
      </section>

      {/* Contact Card */}
      <section className="py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 text-center border border-dark/5 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h2 className="mt-4 font-bold text-dark text-lg">Email Us</h2>
            <a href="mailto:support@biblescholarkids.com" className="text-primary hover:underline font-medium">
              support@biblescholarkids.com
            </a>
            <p className="mt-2 text-sm text-muted">We typically respond within 24&ndash;48 hours.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 pb-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-0 divide-y divide-dark/10">
            {faqs.map((faq, i) => (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-medium text-dark pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="pb-5 text-sm text-muted leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
