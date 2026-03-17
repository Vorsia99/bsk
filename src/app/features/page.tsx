"use client";

import { useState } from "react";
import Link from "next/link";

/* ── Shared SVG Icons ─────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill="#E8622A" opacity={0.15} />
      <path d="M6 10.5l2.5 2.5L14 8" stroke="#E8622A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Visual Panels ────────────────────────────────────────────── */

function EpisodesVisual() {
  const seasons = [
    { name: "Beginnings", count: 7, color: "#8B7CC8" },
    { name: "Patriarchs", count: 14, color: "#5ECBA1" },
    { name: "Exodus", count: 10, color: "#E8622A" },
    { name: "Judges & Kings", count: 12, color: "#FFB347" },
    { name: "Prophets", count: 8, color: "#7C6BE0" },
    { name: "Jesus' Birth", count: 6, color: "#FF6B8A" },
    { name: "Jesus' Ministry", count: 14, color: "#3B82F6" },
    { name: "Early Church", count: 10, color: "#10B981" },
  ];
  const max = 14;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-5">
        Season Overview
      </p>
      <div className="space-y-3">
        {seasons.map((s) => (
          <div key={s.name} className="flex items-center gap-3">
            <span className="w-28 shrink-0 text-xs font-medium text-dark text-right">
              {s.name}
            </span>
            <div className="flex-1 h-7 rounded-full bg-cream overflow-hidden">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2 text-[10px] font-bold text-white"
                style={{
                  width: `${(s.count / max) * 100}%`,
                  backgroundColor: s.color,
                }}
              >
                {s.count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuizTypesVisual() {
  const types = [
    {
      name: "Multiple Choice",
      count: "4,200+",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="1" width="7" height="7" rx="1.5" stroke="#E8622A" strokeWidth="1.5" />
          <rect x="10" y="1" width="7" height="7" rx="1.5" stroke="#E8622A" strokeWidth="1.5" />
          <rect x="1" y="10" width="7" height="7" rx="1.5" stroke="#E8622A" strokeWidth="1.5" />
          <rect x="10" y="10" width="7" height="7" rx="1.5" stroke="#E8622A" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      name: "True or False",
      count: "2,800+",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="7.5" stroke="#E8622A" strokeWidth="1.5" />
          <path d="M6 9.5l2 2 4-4.5" stroke="#E8622A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Fill in the Blank",
      count: "1,600+",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 3v12" stroke="#E8622A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 15h8" stroke="#E8622A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 3h4" stroke="#E8622A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Verse Ordering",
      count: "800+",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M6 4h8M6 9h8M6 14h8" stroke="#E8622A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 4h0M3 9h0M3 14h0" stroke="#E8622A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Image Matching",
      count: "600+",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1.5" y="1.5" width="15" height="15" rx="2" stroke="#E8622A" strokeWidth="1.5" />
          <circle cx="6.5" cy="6.5" r="2" stroke="#E8622A" strokeWidth="1.2" />
          <path d="M1.5 13l4-4 3 3 2.5-2.5L16.5 14.5" stroke="#E8622A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
        Quiz Formats
      </p>
      <div className="divide-y divide-cream">
        {types.map((t) => (
          <div key={t.name} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              {t.icon}
            </div>
            <span className="flex-1 text-sm font-medium text-dark">{t.name}</span>
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
              {t.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShepherdEvolution() {
  const stages = [
    { name: "Baby Lamb", range: "Lv 1-10", size: 40 },
    { name: "Little Lamb", range: "Lv 11-25", size: 48 },
    { name: "Woolly Wanderer", range: "Lv 26-50", size: 56 },
    { name: "Flock Leader", range: "Lv 51-100", size: 64 },
    { name: "Shepherd King", range: "Lv 101+", size: 72 },
  ];
  const [selected, setSelected] = useState(0);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-6">
        Evolution Stages
      </p>
      <div className="flex items-end justify-center gap-4">
        {stages.map((stage, i) => (
          <button
            key={stage.name}
            onClick={() => setSelected(i)}
            className={`flex flex-col items-center transition-all duration-200 ${
              selected === i ? "scale-105" : "opacity-60 hover:opacity-80"
            }`}
          >
            <div
              className={`flex items-center justify-center rounded-full bg-cream transition-all duration-200 ${
                selected === i ? "ring-2 ring-primary ring-offset-2" : ""
              }`}
              style={{ width: stage.size, height: stage.size }}
            >
              <svg width={stage.size * 0.6} height={stage.size * 0.6} viewBox="0 0 32 32" fill="none">
                <ellipse cx="16" cy="18" rx="10" ry="8" fill="#F0EDE7" />
                <circle cx="10" cy="15" r="3" fill="#E8E4DC" />
                <circle cx="16" cy="13" r="3" fill="#E8E4DC" />
                <circle cx="22" cy="15" r="3" fill="#E8E4DC" />
                <circle cx="12" cy="19" r="3" fill="#E8E4DC" />
                <circle cx="20" cy="19" r="3" fill="#E8E4DC" />
                <ellipse cx="16" cy="10" rx="5" ry="4.5" fill="#3D3229" />
                <circle cx="14" cy="9.5" r="1" fill="white" />
                <circle cx="18" cy="9.5" r="1" fill="white" />
                <circle cx="14.3" cy="9.5" r="0.5" fill="#1A1208" />
                <circle cx="18.3" cy="9.5" r="0.5" fill="#1A1208" />
                <ellipse cx="10.5" cy="8" rx="2" ry="1" fill="#3D3229" transform="rotate(-20 10.5 8)" />
                <ellipse cx="21.5" cy="8" rx="2" ry="1" fill="#3D3229" transform="rotate(20 21.5 8)" />
                <rect x="11" y="24" width="2" height="4" rx="1" fill="#3D3229" />
                <rect x="19" y="24" width="2" height="4" rx="1" fill="#3D3229" />
              </svg>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="font-semibold text-dark text-sm">{stages[selected].name}</p>
        <p className="text-xs text-muted mt-1">{stages[selected].range}</p>
      </div>
    </div>
  );
}

function DailyMissionsVisual() {
  const missions = [
    { text: "Complete a Quiz", xp: "+15 XP", done: true },
    { text: "Read Today's Verse", xp: "+5 XP", done: true },
    { text: "Say a Prayer", xp: "+10 XP", done: false },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Daily Missions
        </p>
        <span className="text-xs font-semibold text-muted">2/3</span>
      </div>
      <div className="space-y-3">
        {missions.map((m) => (
          <div key={m.text} className="flex items-center gap-3 rounded-xl bg-cream px-4 py-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                m.done ? "bg-safety" : "border-2 border-muted/30"
              }`}
            >
              {m.done && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 6.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span
              className={`flex-1 text-sm font-medium ${
                m.done ? "text-dark line-through opacity-60" : "text-dark"
              }`}
            >
              {m.text}
            </span>
            <span
              className={`text-xs font-semibold ${
                m.done ? "text-safety" : "text-muted"
              }`}
            >
              {m.xp}
            </span>
          </div>
        ))}
      </div>
      {/* XP Progress Bar */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-semibold text-muted uppercase tracking-wider">
            Daily XP
          </span>
          <span className="text-xs font-bold text-primary">20 / 30 XP</span>
        </div>
        <div className="h-2.5 rounded-full bg-cream overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: "60%",
              background: "linear-gradient(90deg, #E8622A, #FFB347)",
            }}
          />
        </div>
      </div>
      {/* Streak Badge */}
      <div className="mt-4 flex justify-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-2 rounded-full">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1C7 1 4 5 4 8a3 3 0 006 0c0-1.5-1-3-1-3s-1 1.5-2 2c0-2 0-4 0-6z"
              fill="#E8622A"
            />
          </svg>
          7 day streak
        </div>
      </div>
    </div>
  );
}

function PrayerJournalVisual() {
  const categories = ["All", "Thank You", "Please Help", "Praise", "Sorry"];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
        Prayer Journal
      </p>
      <div className="flex gap-2 overflow-hidden mb-5">
        {categories.map((c, i) => (
          <span
            key={c}
            className={`shrink-0 text-[11px] font-semibold px-3 py-1.5 rounded-full ${
              i === 0 ? "bg-primary text-white" : "bg-cream text-muted"
            }`}
          >
            {c}
          </span>
        ))}
      </div>
      <div className="space-y-3">
        <div className="rounded-xl border border-cream p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-safety bg-safety/10 px-2 py-0.5 rounded">
              Easy
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
              Thank You
            </span>
          </div>
          <p className="text-sm font-semibold text-dark">Thank You for My Family</p>
          <p className="text-xs text-muted mt-1">Dear God, thank you for my family...</p>
          <div className="flex gap-1 mt-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-2 h-2 rounded-full bg-cream" />
            <span className="w-2 h-2 rounded-full bg-cream" />
            <span className="w-2 h-2 rounded-full bg-cream" />
            <span className="w-2 h-2 rounded-full bg-cream" />
          </div>
        </div>
        <div className="rounded-xl border border-cream p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFB347] bg-[#FFB347]/10 px-2 py-0.5 rounded">
              Medium
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
              Thank You
            </span>
          </div>
          <p className="text-sm font-semibold text-dark">Grateful for Friends</p>
          <p className="text-xs text-muted mt-1">Not started</p>
        </div>
      </div>
    </div>
  );
}

function ParentDashboardVisual() {
  const stats = [
    { label: "Episodes", value: "45/163" },
    { label: "Accuracy", value: "87%" },
    { label: "Streak", value: "12 days" },
    { label: "Time Limit", value: "30 min" },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-5">
        Parent Dashboard
      </p>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-full bg-safety flex items-center justify-center text-white font-bold text-lg">
          S
        </div>
        <div>
          <p className="text-sm font-bold text-dark">Sade</p>
          <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Lv. 3
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-cream p-3 text-center">
            <p className="text-lg font-bold text-dark">{s.value}</p>
            <p className="text-[10px] font-semibold text-muted uppercase tracking-wider mt-0.5">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Safety Section Icons ─────────────────────────────────────── */

function ShieldBanIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="4" y1="4" x2="20" y2="20" />
    </svg>
  );
}

function UsersOffIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4" />
      <circle cx="9" cy="7" r="4" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function FileCheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/* ── Feature Block Data ───────────────────────────────────────── */

const featureBlocks = [
  {
    eyebrow: "01 \u00B7 Episodes",
    headline: (
      <>
        The entire Bible, told as an{" "}
        <span className="text-primary">adventure</span>
      </>
    ),
    body: "Your child follows a winding path through 21 seasons of Bible stories \u2014 from Creation to the Early Church. Each episode includes an illustrated story, a quiz, and fun facts.",
    checklist: [
      "21 seasons covering the entire Bible",
      "163 episodes with 10\u201315 quiz questions each",
      '5 "Did You Know?" facts per episode',
      "Progressive unlock system",
    ],
    visual: <EpisodesVisual />,
  },
  {
    eyebrow: "02 \u00B7 Quiz Types",
    headline: (
      <>
        <span className="text-primary">Five</span> ways to test real understanding
      </>
    ),
    body: "Not just multiple choice! Bible Scholar Kids uses 5 different question types to keep learning fresh and engaging.",
    checklist: [
      "Multiple Choice \u2014 Classic 4-option questions",
      "True or False \u2014 Quick statement verification",
      "Fill in the Blank \u2014 Complete Bible verses",
      "Verse Ordering \u2014 Unscramble verse fragments",
      "Image Matching \u2014 Match illustrations to stories",
    ],
    visual: <QuizTypesVisual />,
  },
  {
    eyebrow: "03 \u00B7 Shepherd Companion",
    headline: (
      <>
        A companion who{" "}
        <span className="text-primary">grows</span> with your child
      </>
    ),
    body: "Every child gets their own lamb companion named Shepherd. He celebrates correct answers, encourages them when they struggle, and evolves as they learn.",
    checklist: [
      "5 evolution stages \u2014 from Baby Lamb to Shepherd King",
      "27 cosmetic items earned through gameplay",
      "Greets kids by name with time-of-day messages",
      "Customizable fur color, skin tone, accessories",
    ],
    visual: <ShepherdEvolution />,
  },
  {
    eyebrow: "04 \u00B7 Daily Missions & Streaks",
    headline: (
      <>
        Build habits that last a{" "}
        <span className="text-primary">lifetime</span>
      </>
    ),
    body: "Built-in systems to encourage daily Bible study \u2014 without nagging.",
    checklist: [
      "Daily verse \u2014 a new Bible verse every day",
      "3 fresh mission challenges every day",
      "Streak tracking for consecutive days",
      "Seasonal events for Christmas, Easter, and more",
    ],
    visual: <DailyMissionsVisual />,
  },
  {
    eyebrow: "05 \u00B7 Prayer Journal",
    headline: (
      <>
        A safe space to learn to{" "}
        <span className="text-primary">pray</span>
      </>
    ),
    body: "A private space for children to write and organize their prayers \u2014 entries never leave the device.",
    checklist: [
      "5 prayer categories \u2014 Praise, Thanks, Sorry, Help, Others",
      "Private \u2014 stored only on device",
      "Review past prayers anytime",
      "No data collection ever",
    ],
    visual: <PrayerJournalVisual />,
  },
  {
    eyebrow: "06 \u00B7 Parent Dashboard",
    headline: (
      <>
        Stay <span className="text-primary">involved</span> without hovering
      </>
    ),
    body: "Track your child\u2019s Bible learning progress and set controls \u2014 all behind a parent-gated PIN.",
    checklist: [
      "Progress overview with accuracy stats",
      "Quiz review with explanations",
      "Time limits (15, 30, 45, or 60 minutes)",
      "Parent gate with math verification",
    ],
    visual: <ParentDashboardVisual />,
  },
];

/* ── Safety Guarantees ────────────────────────────────────────── */

const safetyItems = [
  { icon: <ShieldBanIcon />, title: "No Ads", description: "Zero advertisements. Your child\u2019s attention is sacred, not for sale." },
  { icon: <UsersOffIcon />, title: "No Stranger Contact", description: "No chat, no messaging, no social features of any kind." },
  { icon: <LockIcon />, title: "Parent-Gated Controls", description: "All settings locked behind a math verification problem." },
  { icon: <FileCheckIcon />, title: "COPPA Compliant", description: "Fully compliant with children\u2019s online privacy protection." },
  { icon: <ClockIcon />, title: "Time Limits", description: "Set daily play limits from 15 to 60 minutes." },
  { icon: <EyeIcon />, title: "Review Every Answer", description: "Parents can see every question and answer in detail." },
];

/* ── Page Component ───────────────────────────────────────────── */

export default function FeaturesPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────── */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-dark">
              <span className="text-primary">163</span> Episodes.{" "}
              <span className="text-primary">10,000+</span> Questions.
              <br className="hidden sm:block" /> One Amazing Journey.
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto text-center mt-6">
              Bible Scholar Kids covers the entire Bible narrative with 5
              types of interactive quizzes, illustrated stories, and a
              companion who grows with your child.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Feature Blocks ───────────────────────── */}
      <section className="pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {featureBlocks.map((block, index) => {
              const isEven = index % 2 === 1;
              const showScripture = index === 5;

              return (
                <div key={index}>
                  {showScripture && (
                    <div className="mb-24 lg:mb-32 py-16 text-center">
                      <div className="max-w-3xl mx-auto border-l-4 border-primary pl-8 text-left">
                        <p className="text-2xl lg:text-3xl text-dark/80 leading-relaxed">
                          &ldquo;Train up a child in the way he should go:
                          and when he is old, he will not depart from
                          it.&rdquo;
                        </p>
                        <p className="text-primary text-sm font-semibold uppercase tracking-wider mt-4">
                          Proverbs 22:6
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Side */}
                    <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                        {block.eyebrow}
                      </p>
                      <h2 className="text-3xl lg:text-4xl font-bold text-dark mt-3">
                        {block.headline}
                      </h2>
                      <p className="text-muted text-base leading-relaxed mt-4">
                        {block.body}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {block.checklist.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckIcon />
                            <span className="text-sm text-dark">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual Side */}
                    <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      {block.visual}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Safety Section ───────────────────────── */}
      <section className="bg-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center max-w-3xl mx-auto leading-tight">
            Built to be the{" "}
            <span className="text-primary">safest</span> Bible app
            for children.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {safetyItems.map((item) => (
              <div key={item.title} className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="text-primary">{item.icon}</div>
                <p className="text-white font-semibold text-base mt-3">{item.title}</p>
                <p className="text-white/60 text-sm mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
