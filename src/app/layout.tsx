import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.biblescholarkids.com"),
  title: {
    default: "Bible Scholar Kids — Fun Bible Learning App for Children Ages 6-12",
    template: "%s | Bible Scholar Kids",
  },
  description:
    "Interactive Bible learning app with 163 episodes, 10,000+ quiz questions, illustrated stories, and a pet lamb companion. For kids ages 6-12. COPPA compliant, ad-free, parent-approved.",
  keywords: [
    "Bible app for kids",
    "children's Bible quiz",
    "Bible learning app",
    "Sunday School app",
    "kids Bible study",
    "Bible games for children",
    "Christian education app",
    "Bible stories for kids",
    "COPPA compliant Bible app",
    "Bible quiz for children",
    "interactive Bible learning",
    "Bible Scholar Kids",
    "kids Bible trivia",
    "Sunday School teaching tools",
    "Bible verse memorization for kids",
  ],
  authors: [{ name: "Bible Scholar Kids" }],
  creator: "Bible Scholar Kids",
  publisher: "Bible Scholar Kids",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.biblescholarkids.com",
    siteName: "Bible Scholar Kids",
    title: "Bible Scholar Kids — Fun Bible Learning App for Children Ages 6-12",
    description:
      "Interactive Bible learning with 163 episodes, 10,000+ quiz questions, illustrated stories, and a pet lamb companion. For ages 6-12. Ad-free and COPPA compliant.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible Scholar Kids — Fun Bible Learning App for Children",
    description:
      "Interactive Bible learning with 163 episodes, 10,000+ quiz questions, and a pet lamb companion. For ages 6-12. Ad-free and COPPA compliant.",
  },
  alternates: {
    canonical: "https://www.biblescholarkids.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
