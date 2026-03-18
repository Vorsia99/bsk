import type { Metadata } from "next";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Support & FAQ",
  description:
    "Get help with Bible Scholar Kids. Find answers to common questions about subscriptions, safety, Bible translations, parent dashboard, offline mode, and more.",
  alternates: {
    canonical: "https://www.biblescholarkids.com/support",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
