import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Bible Scholar Kids features: 163 illustrated episodes, 5 quiz types, 10,000+ questions, verse memorization, a pet lamb companion, prayer journal, and parent dashboard. Safe, ad-free, COPPA compliant.",
  alternates: {
    canonical: "https://biblescholarkids.com/features",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
