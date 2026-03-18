import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  JsonLd,
  websiteSchema,
  organizationSchema,
  softwareAppSchema,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Bible Scholar Kids — The Bible, Made Fun for Kids",
  description:
    "Bible Scholar Kids is an interactive Bible learning app with 163 episodes, 10,000+ quiz questions, illustrated stories, and a pet lamb companion. Designed for kids ages 6-12. COPPA compliant, ad-free, and parent-approved. Perfect for families and Sunday School.",
  alternates: {
    canonical: "https://biblescholarkids.com",
  },
};

const testimonials = [
  {
    quote:
      "My daughter asks to play this every morning before school. She\u2019s memorized more Bible verses in two months than in two years of Sunday school.",
    name: "Sarah M.",
    role: "Mom of 3",
    initial: "S",
    color: "#E8622A",
  },
  {
    quote:
      "Finally a Bible app that actually teaches, not just entertains. The quiz variety keeps my son engaged in a way flashcards never could.",
    name: "David R.",
    role: "Children\u2019s Pastor",
    initial: "D",
    color: "#5ECBA1",
  },
  {
    quote:
      "The lamb companion is genius. My kids compete over who can evolve their Shepherd faster. Bible study has become their favorite activity.",
    name: "Maria L.",
    role: "Homeschool Mom",
    initial: "M",
    color: "#FFB347",
  },
];

const features = [
  { title: "163 Episodes, 21 Seasons", desc: "The full Bible narrative from Genesis to Revelation", icon: "book" },
  { title: "5 Quiz Types", desc: "Multiple choice, true/false, fill-in-blank, verse ordering, image matching", icon: "star" },
  { title: "Shepherd Companion", desc: "A pet lamb that evolves through 5 stages with 27 customizable accessories", icon: "heart" },
  { title: "6 Bible Translations", desc: "English (KJV), Spanish, French, Portuguese, Chinese, Arabic", icon: "lang" },
  { title: "Verse Memorization", desc: "Spaced repetition system for learning Bible verses by heart", icon: "sun" },
  { title: "Daily Missions & Streaks", desc: "New challenges every day to build consistent Bible study habits", icon: "cal" },
  { title: "Prayer Journal", desc: "A private place for kids to write prayers in 5 categories", icon: "doc" },
  { title: "Parent Dashboard", desc: "Track progress, review quiz answers, set daily time limits", icon: "shield" },
];

const safetyFeatures = [
  { title: "No ads. Ever.", desc: "Your child will never see an advertisement in this app." },
  { title: "No stranger contact.", desc: "There are no social features connecting your child with unknown users." },
  { title: "Parent-gated controls.", desc: "Settings and purchases are protected behind a math problem verification \u2014 no accidental buys." },
  { title: "COPPA compliant.", desc: "We don\u2019t collect personal information from children. All data stays on the device." },
  { title: "Time limits you control.", desc: "Set daily play limits of 15, 30, 45, or 60 minutes from the parent dashboard." },
  { title: "Review every answer.", desc: "The parent dashboard shows exactly which questions your child got right and wrong, with explanations." },
];

const plans = [
  { name: "Free", price: "$0", period: "forever", features: ["First 10 episodes only", "5 hearts (lives) per day", "Basic daily verse", "1 quiz type (multiple choice)"], cta: "Get Started Free", highlighted: false },
  { name: "Monthly", price: "$4.99", period: "/month", features: ["All 163 episodes unlocked", "Unlimited hearts", "All 5 quiz types", "Verse memorization tools"], cta: "Start Free Trial", highlighted: false },
  { name: "Yearly", price: "$49.99", period: "/year", features: ["Everything in Monthly", "Shepherd companion evolution", "Prayer journal & streaks", "Save vs monthly billing"], cta: "Best Value \u2014 Save More", highlighted: true },
  { name: "Family", price: "$79.99", period: "/year", features: ["Everything in Yearly", "Up to 5 kid profiles", "Individual progress tracking", "Parent dashboard analytics"], cta: "Get Family Plan", highlighted: false },
];

const FeatureIcon = ({ type }: { type: string }) => {
  const paths: Record<string, string> = {
    book: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    star: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
    heart: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    lang: "M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802",
    sun: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
    cal: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
    doc: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    shield: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  };
  return (
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d={paths[type] || paths.book} />
      </svg>
    </div>
  );
};

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0 text-[#5ECBA1]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const SafetyIcon = () => (
  <div className="w-10 h-10 rounded-full bg-[#5ECBA1]/10 flex items-center justify-center flex-shrink-0">
    <svg className="w-5 h-5 text-[#5ECBA1]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
);


export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={softwareAppSchema} />

      {/* Hero */}
      <section className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-dark leading-tight">
                The Bible, Made <span className="text-primary">Fun</span> for Kids
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg">
                An interactive Bible learning adventure with quizzes, stories,
                and a pet lamb companion. For ages 6&ndash;12.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#" className="inline-flex items-center gap-3 bg-dark text-white px-6 py-3 rounded-xl hover:bg-dark/90 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                  <div className="text-left"><div className="text-[10px] opacity-80">Download on the</div><div className="text-sm font-semibold -mt-0.5">App Store</div></div>
                </Link>
                <Link href="#" className="inline-flex items-center gap-3 bg-dark text-white px-6 py-3 rounded-xl hover:bg-dark/90 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-2.11 1.24-2.5-2.5 2.5-2.5 2.11 1.38zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" /></svg>
                  <div className="text-left"><div className="text-[10px] opacity-80">GET IT ON</div><div className="text-sm font-semibold -mt-0.5">Google Play</div></div>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[280px] h-[560px] bg-dark rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-cream rounded-[2.25rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-dark rounded-b-2xl z-10" />
                  <Image
                    src="/screenshots/hero.png"
                    alt="Bible Scholar Kids app"
                    fill
                    className="object-cover object-top"
                    sizes="280px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Quote */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-2xl lg:text-3xl font-bold text-dark italic leading-relaxed">
            &ldquo;Train up a child in the way he should go: and when he is old, he will not depart from it.&rdquo;
          </p>
          <p className="mt-4 text-primary font-semibold">&mdash; Proverbs 22:6 (KJV)</p>
          <p className="mt-6 text-muted leading-relaxed max-w-2xl mx-auto">
            In a world full of distractions, our children need the Word of God more than ever. Bible Scholar Kids helps plant the seeds of Scripture in young hearts &mdash; so they grow rooted in faith.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-dark/5 py-8 px-6 grid grid-cols-3 divide-x divide-dark/10">
            <div className="text-center"><p className="text-3xl font-bold text-dark">50,000+</p><p className="text-sm text-muted mt-1">Kids Learning</p></div>
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center gap-1"><p className="text-3xl font-bold text-dark">4.9</p><svg className="w-5 h-5 text-[#FFB347] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg></div>
              <p className="text-sm text-muted mt-1">Rating</p>
            </div>
            <div className="text-center"><p className="text-3xl font-bold text-dark">10,000+</p><p className="text-sm text-muted mt-1">Questions</p></div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark">Bible Learning, One Adventure at a Time</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">Four simple steps to make Bible study your child&apos;s favorite activity.</p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            {[
              { num: 1, icon: "heart", title: "Meet Your Lamb", desc: "Kids name their own lamb companion, Shepherd, who guides them through every Bible story. He grows, evolves, and celebrates with them." },
              { num: 2, icon: "book", title: "Explore Bible Stories", desc: "163 illustrated episodes covering the entire Bible \u2014 from Creation to Revelation. Each story is told in kid-friendly language with beautiful illustrations." },
              { num: 3, icon: "star", title: "Take Fun Quizzes", desc: "5 different question types keep things interesting: multiple choice, true/false, fill-in-the-blank, verse ordering, and image matching." },
              { num: 4, icon: "star", title: "Grow Together", desc: "Earn XP, level up through 50 levels, unlock 23 achievement badges, and watch Shepherd evolve from a baby lamb to a golden Shepherd King." },
            ].map((step, i) => (
              <div key={step.num} className="flex flex-col items-center relative">
                <div className="w-12 h-12 rounded-full bg-primary text-white text-lg font-bold flex items-center justify-center">{step.num}</div>
                {i < 3 && <div className="hidden md:block absolute top-6 -right-4 text-dark/20"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></div>}
                <div className="mt-4"><FeatureIcon type={step.icon} /></div>
                <h3 className="mt-4 font-bold text-dark text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#F2EDE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark">Everything Your Child Needs to Love the Bible</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">Packed with features designed to make Bible learning engaging, educational, and fun.</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 text-left hover:shadow-md transition-shadow border border-dark/5">
                <FeatureIcon type={f.icon} />
                <h3 className="mt-4 font-bold text-dark">{f.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sunday School Teachers */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark">Perfect for Sunday School Teachers</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">Bible Scholar Kids isn&apos;t just for home &mdash; it&apos;s a powerful tool for Sunday School classes, children&apos;s ministry, and Bible study groups.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "shield", title: "Lesson Reinforcement", desc: "Use Bible Scholar Kids quizzes after your Sunday School lesson to reinforce what children just learned. The app covers all 163 episodes across the full Bible narrative \u2014 there\u2019s always a matching quiz." },
              { icon: "star", title: "Weekly Challenges", desc: "Set up weekly Bible challenges for your class. Kids can complete episodes at home during the week and share their badges and progress on Sunday. It turns Bible study into something they look forward to." },
              { icon: "heart", title: "Group Activities", desc: "Project the app on a screen and run quizzes as a group activity. Split into teams and let children compete \u2014 the illustrated stories make great discussion starters before diving into questions." },
              { icon: "book", title: "Verse Memorization Programs", desc: "Our built-in verse memorization tool uses spaced repetition \u2014 the same method used by the best language learning apps. Assign weekly memory verses and let the app handle the practice schedule." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 text-left border border-dark/5">
                <div className="flex items-start gap-4">
                  <FeatureIcon type={item.icon} />
                  <div>
                    <h3 className="font-bold text-dark text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-2xl p-8 border border-dark/5 text-center">
            <h3 className="font-bold text-dark text-lg">Bulk Pricing for Churches</h3>
            <p className="mt-2 text-sm text-muted">Planning to use Bible Scholar Kids across your entire children&apos;s ministry? Contact us at <a href="mailto:hello@biblescholarkids.com" className="text-primary hover:underline">hello@biblescholarkids.com</a> for group licensing and special church pricing.</p>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark">Designed with Parents in Mind</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">Built from the ground up to be the safest Bible app for children.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            {safetyFeatures.map((f) => (
              <div key={f.title} className="flex items-start gap-4 text-left">
                <SafetyIcon />
                <div><h3 className="font-bold text-dark">{f.title}</h3><p className="mt-1 text-sm text-muted leading-relaxed">{f.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F2EDE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark">What Parents Are Saying</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">Join thousands of families who are making Bible learning their child&apos;s favorite activity.</p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 text-left">
                <div className="flex gap-1">{[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5 text-[#FFB347] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                <p className="mt-4 text-dark text-sm italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full text-white text-sm font-bold flex items-center justify-center" style={{ backgroundColor: t.color }}>{t.initial}</div>
                  <div><p className="font-semibold text-dark text-sm">{t.name}</p><p className="text-muted text-sm">{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark">Start Free. Upgrade When You&apos;re Ready.</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">Try 10 episodes free &mdash; no credit card required. Upgrade to unlock all 163 episodes and premium features.</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 flex flex-col text-left relative ${plan.highlighted ? "border-2 border-primary shadow-lg bg-white" : "bg-white border border-dark/10"}`}>
                {plan.highlighted && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>}
                <p className="font-bold text-dark text-lg">{plan.name}</p>
                <p className="mt-2"><span className="text-4xl font-bold text-dark">{plan.price}</span><span className="text-muted text-sm ml-1">{plan.period}</span></p>
                <ul className="mt-6 space-y-3 flex-1">{plan.features.map((f) => (<li key={f} className="flex items-start gap-2"><CheckIcon /><span className="text-sm text-dark">{f}</span></li>))}</ul>
                <button className={`mt-8 w-full py-3 rounded-full font-semibold text-sm transition-colors ${plan.highlighted ? "bg-primary text-white hover:bg-orange-700" : "border border-primary text-primary hover:bg-primary/5"}`}>{plan.cta}</button>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted max-w-2xl mx-auto">Subscriptions are managed through the App Store or Google Play. Cancel anytime from your device settings. Free trial available for new subscribers.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cream to-[#E8F5E9]/30 rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark">Start Your Child&apos;s Bible Adventure Today</h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">Join thousands of families making Bible learning fun, safe, and meaningful.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="#" className="inline-flex items-center gap-3 bg-dark text-white px-6 py-3 rounded-xl hover:bg-dark/90 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                <div className="text-left"><div className="text-[10px] opacity-80">Download on the</div><div className="text-sm font-semibold -mt-0.5">App Store</div></div>
              </Link>
              <Link href="#" className="inline-flex items-center gap-3 bg-dark text-white px-6 py-3 rounded-xl hover:bg-dark/90 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-2.11 1.24-2.5-2.5 2.5-2.5 2.11 1.38zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" /></svg>
                <div className="text-left"><div className="text-[10px] opacity-80">GET IT ON</div><div className="text-sm font-semibold -mt-0.5">Google Play</div></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
