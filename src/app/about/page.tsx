import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bible Scholar Kids was born from a simple idea: every child deserves to know the Bible. Learn about our mission to make Scripture accessible and fun for children ages 6-12.",
  alternates: {
    canonical: "https://www.biblescholarkids.com/about",
  },
};

export default function AboutPage() {
  return (
    <section className="pt-16 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-dark text-center">About Bible Scholar Kids</h1>
        <p className="mt-6 text-muted leading-relaxed text-center max-w-2xl mx-auto">
          Bible Scholar Kids was born from a simple idea: every child deserves to know the Bible &mdash; and learning it should be an adventure, not a chore.
        </p>

        <div className="mt-12 space-y-8 text-dark/80 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-dark">Our Mission</h2>
            <p className="mt-3">
              We believe the Bible is the most important book ever written, and that children can understand and love it when it&apos;s presented in the right way. Bible Scholar Kids makes Scripture accessible, engaging, and fun for children ages 6&ndash;12 through illustrated stories, interactive quizzes, and a companion who grows with them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark">What We Believe</h2>
            <p className="mt-3">
              We believe in the authority and truth of the Bible. Our content is non-denominational and focuses on teaching the biblical narrative faithfully. We don&apos;t add to or take away from Scripture &mdash; we simply make it accessible to young minds.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark">Safety First</h2>
            <p className="mt-3">
              Bible Scholar Kids is built from the ground up to be the safest Bible app for children. No ads, no social features, no data collection, and full COPPA compliance. Every design decision prioritizes your child&apos;s safety and privacy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark">Contact Us</h2>
            <p className="mt-3">
              Have questions, feedback, or partnership inquiries? We&apos;d love to hear from you.
            </p>
            <p className="mt-2">
              <a href="mailto:hello@biblescholarkids.com" className="text-primary hover:underline font-medium">
                hello@biblescholarkids.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
