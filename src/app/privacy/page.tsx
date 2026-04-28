import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Bible Scholar Kids Privacy Policy — COPPA compliant. Learn how we protect your child's privacy. No ads, no data collection, no third-party tracking.",
  alternates: {
    canonical: "https://www.biblescholarkids.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 border-b-4 border-b-gray-200">
            <div className="legal-content">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-2">
                Privacy Policy
              </h1>
              <p className="text-sm text-text-muted mb-2">
                <strong>Last Updated:</strong> April 28, 2026
              </p>
              <p className="text-sm text-text-muted mb-8">
                <strong>Effective Date:</strong> April 28, 2026
              </p>

              <p>
                Bible Scholar Kids (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the Bible
                Scholar Kids mobile application (the &ldquo;App&rdquo;). This Privacy Policy
                explains what information we collect, how we use it, and your rights
                — especially regarding children&apos;s privacy.
              </p>

              <p>
                <strong>
                  We take children&apos;s privacy seriously. Bible Scholar Kids is
                  designed to comply with the Children&apos;s Online Privacy Protection
                  Act (COPPA) and similar international regulations for children&apos;s
                  privacy.
                </strong>
              </p>

              <h2>1. Information We Collect</h2>

              <h3>1.1. Information We Do NOT Collect From Children</h3>
              <p>
                We do not collect, store, or transmit any of the following from
                children:
              </p>
              <ul>
                <li>Names, email addresses, or physical addresses</li>
                <li>Photos, videos, or audio recordings</li>
                <li>Location data (GPS, IP-based geolocation, or otherwise)</li>
                <li>Phone numbers or contact lists</li>
                <li>Persistent identifiers for behavioral advertising</li>
                <li>Social media accounts or login credentials</li>
              </ul>

              <h3>1.2. Information Stored Locally on the Device</h3>
              <p>
                The App stores all user data <strong>locally on the device</strong>{" "}
                using the device&apos;s built-in storage. This data never leaves the
                device and is not transmitted to our servers or any third party.
                Locally stored data includes:
              </p>
              <ul>
                <li>App preferences (age range, reading level, learning goals)</li>
                <li>Quiz progress, scores, and XP points</li>
                <li>
                  Bible reader preferences (font size, highlights, bookmarks,
                  selected translation)
                </li>
                <li>
                  Shepherd companion data (name, evolution stage, equipped
                  accessories)
                </li>
                <li>
                  Earned coins, purchased cosmetic items, and redeemed promo codes
                </li>
                <li>Prayer journal entries</li>
                <li>Verse memorization progress and review schedules</li>
                <li>Daily streak and mission progress</li>
              </ul>
              <p>
                <strong>
                  This data is not backed up to our servers.
                </strong>{" "}
                If the App is uninstalled or the device is reset, this data is
                permanently lost.
              </p>

              <h3>1.3. Information Processed by Third-Party Services</h3>
              <p>
                When certain App features are used, limited data is processed by
                third-party services:
              </p>

              <h4>a) Bible Text (Public APIs)</h4>
              <p>
                When a child reads a Bible chapter, the App fetches verse text from
                public Bible APIs. No personal data is sent — only the requested
                book, chapter, and translation.
              </p>

              <h4>b) In-App Purchases (Apple / Google)</h4>
              <p>
                Subscription purchases are processed entirely by Apple (App Store)
                or Google (Google Play). We do not receive or store any payment
                information such as credit card numbers.
              </p>

              <h4>c) Event Tracking (No Third-Party Analytics)</h4>
              <p>
                The App does not use any third-party analytics SDK. All event
                tracking is stored in a temporary in-memory buffer on the
                device and is never transmitted off-device.
              </p>

              <h4>d) Subscription Management (RevenueCat)</h4>
              <p>
                To process subscription purchases, the App uses{" "}
                <a
                  href="https://www.revenuecat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RevenueCat
                </a>
                , which receives the App Store or Google Play transaction
                receipt and an anonymous installation identifier solely to
                validate and restore subscription entitlements. RevenueCat does
                not receive any personally identifiable information about you
                or your child. RevenueCat&apos;s privacy policy is available at{" "}
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  revenuecat.com/privacy
                </a>
                .
              </p>

              <h3>1.4. Information We Collect From Parents</h3>
              <p>
                If a parent contacts us via email, we collect their email address and
                the content of their message solely to respond to their inquiry. We
                do not use parent email addresses for marketing unless the parent
                explicitly opts in.
              </p>

              <h2>2. How We Use Information</h2>
              <p>
                We use the limited information described above for the following
                purposes:
              </p>
              <ul>
                <li>
                  <strong>To provide the App&apos;s features</strong> — quiz
                  progress tracking, verse memorization scheduling, and Bible
                  text display
                </li>
                <li>
                  <strong>To process subscriptions</strong> — Apple and Google
                  handle all payment processing, and RevenueCat validates and
                  restores subscription entitlements using the transaction
                  receipt and an anonymous installation identifier (no personal
                  information about you or your child is sent)
                </li>
                <li>
                  <strong>To respond to support requests</strong> — if a parent
                  emails us, we use their email solely to reply
                </li>
              </ul>

              <p>
                <strong>We do not:</strong>
              </p>
              <ul>
                <li>
                  Sell, rent, or share any user data with third parties for
                  advertising or marketing purposes
                </li>
                <li>Display advertisements of any kind within the App</li>
                <li>
                  Use data to create user profiles for behavioral advertising
                </li>
                <li>Contact children directly for any reason</li>
              </ul>

              <h2>3. Children&apos;s Privacy (COPPA Compliance)</h2>
              <p>
                Bible Scholar Kids is directed at children ages 6–12 and is subject
                to the Children&apos;s Online Privacy Protection Act (COPPA).
              </p>

              <h3>3.1. No Personal Information Collection</h3>
              <p>
                We do not knowingly collect personal information from children under
                13. All user data (progress, preferences, journal entries) is stored
                locally on the device and is never transmitted to our servers.
              </p>

              <h3>3.2. No Behavioral Advertising</h3>
              <p>
                The App contains no advertisements. We do not use any data —
                personal or otherwise — for behavioral advertising or targeted
                marketing to children.
              </p>

              <h3>3.3. No Third-Party Data Sharing for Commercial Purposes</h3>
              <p>
                We do not share any information about children with third parties for
                commercial purposes. The only third-party data processing occurs as
                described in Section 1.3.
              </p>

              <h3>3.4. Parental Consent</h3>
              <p>
                Because we do not collect personal information from children, we do
                not require verifiable parental consent under COPPA. However, the
                following features are protected behind a parent gate (math problem
                verification):
              </p>
              <ul>
                <li>In-app purchases (subscription)</li>
                <li>Parent dashboard access</li>
                <li>Progress reset</li>
                <li>Settings modifications</li>
              </ul>

              <h2>4. Data Storage and Security</h2>

              <h3>4.1. Local Storage</h3>
              <p>
                All user data is stored locally on the device using React Native
                AsyncStorage. This data is:
              </p>
              <ul>
                <li>Stored only on the device where the App is installed</li>
                <li>Not transmitted to our servers or any cloud service</li>
                <li>Not accessible to other apps on the device</li>
                <li>Deleted when the App is uninstalled</li>
              </ul>

              <h3>4.2. API Communications</h3>
              <p>
                When the App communicates with third-party APIs (Bible
                text), these communications use HTTPS encryption. We do not maintain
                server-side logs of these requests.
              </p>

              <h3>4.3. No User Accounts</h3>
              <p>
                The App does not require user accounts, usernames, passwords, or
                email addresses to function. There is no login system and no
                cloud-based user profile.
              </p>

              <h2>5. Parental Rights</h2>
              <p>
                Under COPPA and similar regulations, parents have the right to:
              </p>

              <h3>5.1. Review Data</h3>
              <p>
                Parents can review all data stored by the App directly on the device:
              </p>
              <ul>
                <li>
                  Quiz progress and scores are visible in the Parent Dashboard
                </li>
                <li>Prayer journal entries are accessible in the Prayers section</li>
                <li>
                  All other data (XP, badges, coins) is displayed throughout the App
                </li>
              </ul>

              <h3>5.2. Delete Data</h3>
              <p>Parents can delete all App data by:</p>
              <ul>
                <li>
                  Using the &ldquo;Reset Progress&rdquo; option in Settings (behind parent gate)
                </li>
                <li>
                  Uninstalling the App (removes all locally stored data)
                </li>
              </ul>

              <h3>5.3. Refuse Further Collection</h3>
              <p>
                Since we do not collect personal information from children, there is
                no ongoing collection to refuse.
              </p>

              <h3>5.4. Contact Us</h3>
              <p>
                Parents with questions or concerns about their child&apos;s privacy can
                contact us at:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@biblescholarkids.com">
                  privacy@biblescholarkids.com
                </a>
              </p>
              <p>
                We will respond to all privacy-related inquiries within 30 days.
              </p>

              <h2>6. Third-Party Services</h2>
              <p>
                The App integrates with the following third-party services. Each
                service&apos;s own privacy policy governs their handling of data:
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Purpose</th>
                    <th>Data Sent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>bible-api.com</td>
                    <td>English (KJV) Bible text</td>
                    <td>Book, chapter, verse numbers</td>
                  </tr>
                  <tr>
                    <td>bolls.life</td>
                    <td>Non-English translations</td>
                    <td>Book, chapter, translation code</td>
                  </tr>
                  <tr>
                    <td>Apple App Store</td>
                    <td>iOS subscriptions</td>
                    <td>Managed entirely by Apple</td>
                  </tr>
                  <tr>
                    <td>Google Play Store</td>
                    <td>Android subscriptions</td>
                    <td>Managed entirely by Google</td>
                  </tr>
                  <tr>
                    <td>RevenueCat</td>
                    <td>Subscription validation and restoration</td>
                    <td>
                      Transaction receipt and anonymous installation
                      identifier; no PII
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2>7. Data Retention</h2>
              <ul>
                <li>
                  <strong>Local device data:</strong> Retained on the device
                  until the App is uninstalled or the user resets progress
                </li>
                <li>
                  <strong>In-memory event tracking:</strong> Cleared when the
                  App is closed; never written to disk and never transmitted
                  off-device
                </li>
                <li>
                  <strong>Subscription data (RevenueCat):</strong> Retained by
                  RevenueCat per their standard retention policy for the
                  purpose of validating and restoring entitlements
                </li>
                <li>
                  <strong>Support emails:</strong> Retained for up to 2 years
                  for reference, then deleted
                </li>
              </ul>

              <h2>8. International Users</h2>
              <p>
                Bible Scholar Kids is available worldwide. All user data is stored
                locally on the device regardless of the user&apos;s location. For users
                in the European Economic Area (EEA), we process the minimal data
                described in this policy under the legal basis of legitimate interest
                (providing and improving the App) and consent (in-app purchases).
              </p>

              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be
                reflected by updating the &ldquo;Last Updated&rdquo; date at the top of this
                page. For significant changes, we will provide notice through an App
                update or a prominent notice on this page.
              </p>
              <p>
                We encourage parents to review this Privacy Policy periodically.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, children&apos;s
                privacy, or the App&apos;s data practices, please contact us:
              </p>
              <p>
                <strong>Bible Scholar Kids</strong>
                <br />
                Email:{" "}
                <a href="mailto:privacy@biblescholarkids.com">
                  privacy@biblescholarkids.com
                </a>
                <br />
                Support:{" "}
                <a href="mailto:support@biblescholarkids.com">
                  support@biblescholarkids.com
                </a>
                <br />
                Website: biblescholarkids.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
