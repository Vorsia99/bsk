export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bible Scholar Kids",
  url: "https://www.biblescholarkids.com",
  description:
    "An interactive Bible learning app with quizzes, stories, and a pet lamb companion for children ages 6-12.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.biblescholarkids.com/support?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bible Scholar Kids",
  url: "https://www.biblescholarkids.com",
  email: "hello@biblescholarkids.com",
  description:
    "Making Bible learning fun, safe, and meaningful for children ages 6-12.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "support@biblescholarkids.com",
      contactType: "customer support",
    },
  ],
};

export const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Bible Scholar Kids",
  applicationCategory: "EducationalApplication",
  operatingSystem: "iOS, Android",
  description:
    "Interactive Bible learning app with 163 episodes, 10,000+ quiz questions, illustrated stories, verse memorization, a pet lamb companion, prayer journal, and parent dashboard. For children ages 6-12.",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      description:
        "First 10 episodes, 5 hearts per day, basic daily verse, 1 quiz type",
    },
    {
      "@type": "Offer",
      name: "Monthly",
      price: "4.99",
      priceCurrency: "USD",
      billingDuration: "P1M",
      description:
        "All 163 episodes, unlimited hearts, all 5 quiz types, verse memorization tools",
    },
    {
      "@type": "Offer",
      name: "Yearly",
      price: "49.99",
      priceCurrency: "USD",
      billingDuration: "P1Y",
      description:
        "Everything in Monthly plus Shepherd companion evolution, prayer journal, streaks, up to 5 kid profiles, and parent dashboard analytics",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50000",
    bestRating: "5",
    worstRating: "1",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "children",
    suggestedMinAge: 6,
    suggestedMaxAge: 12,
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What ages is Bible Scholar Kids designed for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bible Scholar Kids is designed for children ages 6\u201312. The content, reading level, and quiz difficulty are all calibrated for this age range.",
      },
    },
    {
      "@type": "Question",
      name: "Is the app safe for my child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Bible Scholar Kids has no ads, no social features, no stranger contact, and is COPPA compliant. All data stays on the device. Settings are protected behind a parent gate.",
      },
    },
    {
      "@type": "Question",
      name: "How do I cancel my subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Subscriptions are managed through the App Store (iOS) or Google Play (Android). Go to your device\u2019s subscription settings to cancel anytime.",
      },
    },
    {
      "@type": "Question",
      name: "How do I restore my purchase on a new device?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the app on your new device, go to Settings, and tap \u2018Restore Purchases.\u2019 Make sure you\u2019re signed in with the same Apple ID or Google account.",
      },
    },
    {
      "@type": "Question",
      name: "What Bible translations are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bible Scholar Kids includes 6 translations: English (KJV), Spanish, French, Portuguese, Chinese, and Arabic.",
      },
    },
    {
      "@type": "Question",
      name: "How do I access the parent dashboard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tap the parent icon in the app\u2019s settings. You\u2019ll need to solve a simple math problem (parent gate) to access the dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Can multiple children use the app on one device?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! The Family plan supports up to 5 kid profiles, each with their own progress, Shepherd companion, and achievements.",
      },
    },
    {
      "@type": "Question",
      name: "How do I reset my child's progress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to the Parent Dashboard > Settings > Reset Progress. This will clear all episode progress and quiz history but keep cosmetic items.",
      },
    },
    {
      "@type": "Question",
      name: "Does the app work offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Once episodes are downloaded, your child can play without an internet connection. Daily verses and missions require a brief connection to sync.",
      },
    },
  ],
};
