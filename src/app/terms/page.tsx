import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The Terms of Service governing your use of the Bible Scholar Kids app — subscriptions, free trial, acceptable use, and parental responsibility.",
  alternates: {
    canonical: "https://www.biblescholarkids.com/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 border-b-4 border-b-gray-200">
            <div className="legal-content">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-2">
                Terms of Service
              </h1>
              <p className="text-sm text-text-muted mb-2">
                <strong>Last Updated:</strong> April 11, 2026
              </p>
              <p className="text-sm text-text-muted mb-8">
                <strong>Effective Date:</strong> April 11, 2026
              </p>

              <p>
                Welcome to Bible Scholar Kids. These Terms of Service
                (&ldquo;Terms&rdquo;) form a binding agreement between you and
                Bible Scholar Kids (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) governing your use of the Bible Scholar Kids
                mobile application (the &ldquo;App&rdquo;).
              </p>
              <p>
                Please read these Terms carefully before using the App. By
                downloading, installing, or using the App, you confirm that you
                have read, understood, and agreed to be bound by these Terms.
                If you are a parent or legal guardian allowing a child to use
                the App, you agree to these Terms on behalf of yourself and
                your child, and you accept responsibility for your child&apos;s
                use of the App.
              </p>

              <h2>1. Description of Service</h2>
              <p>
                Bible Scholar Kids is an educational mobile application
                designed for children ages 6–12. The App provides:
              </p>
              <ul>
                <li>Interactive Bible quizzes across 163 episodes</li>
                <li>Illustrated Bible stories using Sweet Publishing artwork</li>
                <li>
                  A virtual lamb companion (&ldquo;Shepherd&rdquo;) that grows
                  alongside the user
                </li>
                <li>
                  A built-in Bible reader with 9 translations across multiple
                  languages, including English, Spanish, French, Portuguese,
                  Chinese, and Arabic
                </li>
                <li>Verse memorization with spaced repetition</li>
                <li>A prayer journal</li>
                <li>A parent dashboard for monitoring progress</li>
              </ul>
              <p>
                The App is intended as an educational supplement and is not a
                substitute for parental guidance, church attendance, or formal
                religious education.
              </p>

              <h2>2. Eligibility and Parental Responsibility</h2>
              <p>
                <strong>2.1.</strong> The App is designed for children ages
                6–12. Children under the age of 13 should only use the App
                under the supervision of a parent or legal guardian.
              </p>
              <p>
                <strong>2.2.</strong> By allowing a child to use the App, you,
                as a parent or guardian:
              </p>
              <ul>
                <li>Agree to these Terms on behalf of your child;</li>
                <li>
                  Accept responsibility for supervising and monitoring your
                  child&apos;s use of the App;
                </li>
                <li>
                  Acknowledge that features such as in-app purchases, the
                  parent dashboard, and progress reset are protected behind a
                  parent gate, which is a safeguard and not a replacement for
                  active parental oversight.
                </li>
              </ul>
              <p>
                <strong>2.3.</strong> The App does not require user accounts
                and does not collect personal information from children. See
                our <a href="/privacy">Privacy Policy</a> for full details.
              </p>

              <h2>3. Subscriptions, Billing, and Free Trials</h2>

              <h3>3.1. Free Tier</h3>
              <p>
                The App is free to download and includes a limited Free Tier so
                you can try it before subscribing. The Free Tier provides
                sampled access to the App&apos;s core content and a
                hearts-based retry system: users begin with five hearts, and
                one heart regenerates automatically every four hours.
              </p>
              <p>
                Premium features — including unlimited hearts, the full library
                of 163 episodes, story mode with audio narration, and verse
                memorization tools — are reserved for Premium subscribers.
              </p>

              <h3>3.2. Premium Subscriptions</h3>
              <p>
                Premium subscriptions remove the Free Tier limitations and
                unlock the App&apos;s full library and features:
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Price</th>
                    <th>Billing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly</td>
                    <td>$4.99 USD/month</td>
                    <td>Billed monthly</td>
                  </tr>
                  <tr>
                    <td>Yearly</td>
                    <td>$49.99 USD/year</td>
                    <td>
                      Billed annually; includes a 7-day free trial for new
                      subscribers
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Prices may vary by region and are displayed in your local
                currency at checkout. All transactions are processed by the
                Apple App Store or Google Play Store, subject to their
                respective terms.
              </p>

              <h3>3.3. Auto-Renewal</h3>
              <p>
                All subscriptions automatically renew at the end of each
                billing period at the then-current price, unless you cancel at
                least 24 hours before the end of the current period. Renewal
                charges are processed by Apple or Google using the payment
                method on file with your app store account.
              </p>

              <h3>3.4. Free Trial (Yearly Plan)</h3>
              <p>
                New subscribers to the Yearly plan are eligible for a 7-day
                free trial. During the trial, you receive full access to all
                Premium features at no charge.
              </p>
              <p>
                If you do not cancel at least 24 hours before the trial ends,
                your subscription will automatically convert to a paid Yearly
                subscription, and you will be charged $49.99 USD (or the
                equivalent in your local currency). You may cancel at any time
                during the trial through your device&apos;s subscription
                settings (see §3.5). Eligibility for the free trial is limited
                to new subscribers and is determined by the Apple App Store or
                Google Play Store.
              </p>

              <h3>3.5. Cancellation</h3>
              <p>
                You may cancel your subscription at any time through your
                device&apos;s subscription management:
              </p>
              <ul>
                <li>
                  <strong>iOS:</strong> Settings → [Your Name] → Subscriptions →
                  Bible Scholar Kids → Cancel
                </li>
                <li>
                  <strong>Android:</strong> Google Play Store → Profile →
                  Payments &amp; subscriptions → Subscriptions → Cancel
                </li>
              </ul>
              <p>
                Cancellation takes effect at the end of the current billing
                period. You will retain Premium access until that date, after
                which your account will revert to the Free Tier.
              </p>

              <h3>3.6. Refunds</h3>
              <p>
                Because all transactions are processed by the Apple App Store
                or Google Play Store, refund requests must be submitted
                directly to Apple (for iOS) or Google (for Android) through
                their respective refund processes. We are not able to process
                refunds directly.
              </p>

              <h3>3.7. Price Changes</h3>
              <p>
                We reserve the right to change subscription prices. If we do,
                we will provide reasonable advance notice through the App or
                the app store. Any new price will take effect at the start of
                your next billing period and will not apply retroactively.
              </p>

              <h2>4. Acceptable Use</h2>
              <p>
                <strong>4.1.</strong> You agree to use the App only for its
                intended purpose: Bible education for children.
              </p>
              <p>
                <strong>4.2.</strong> You agree not to:
              </p>
              <ul>
                <li>
                  Reverse-engineer, decompile, or disassemble the App, except
                  to the extent expressly permitted by applicable law;
                </li>
                <li>
                  Modify, adapt, translate, or create derivative works based on
                  the App;
                </li>
                <li>
                  Use the App for any commercial purpose without our prior
                  written consent;
                </li>
                <li>
                  Interfere with, disrupt, or attempt to gain unauthorized
                  access to the App, its servers, or its underlying
                  infrastructure;
                </li>
                <li>
                  Use automated means, such as bots or scrapers, to interact
                  with the App.
                </li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                <strong>5.1. App Content</strong> — The App&apos;s code, design,
                user interface, quiz questions, story content, educational
                text, and original artwork are owned by Bible Scholar Kids and
                protected by copyright, trademark, and other intellectual
                property laws. All rights not expressly granted in these Terms
                are reserved.
              </p>
              <p>
                <strong>5.2. Bible Illustrations</strong> — Episode cover
                illustrations are from Sweet Publishing&apos;s Bible
                Illustration Collection, used under the Creative Commons
                Attribution-ShareAlike 3.0 Unported License (CC BY-SA 3.0).
              </p>
              <p>
                <strong>5.3. Bible Text</strong> — Bible text displayed in the
                App is sourced from publicly available translations. The King
                James Version (KJV) is in the public domain. Additional
                translations — including ASV, WEB, and YLT (English), RV1960
                (Spanish), FRLSG (French), ARA (Portuguese), CUNPS (Chinese),
                and NAV (Arabic) — are sourced from{" "}
                <a
                  href="https://bolls.life"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bolls.life
                </a>{" "}
                and are either in the public domain or used under their
                respective licenses.
              </p>
              <p>
                <strong>5.4. User-Generated Content</strong> — Content created
                by users within the App, such as prayer journal entries, Bible
                highlights, and bookmarks, remains the property of the user and
                is stored locally on the user&apos;s device.
              </p>
              <p>
                <strong>5.5. Trademarks</strong> — &ldquo;Bible Scholar
                Kids,&rdquo; the Bible Scholar Kids logo, and the Shepherd lamb
                character are trademarks of Bible Scholar Kids. You may not use
                these marks without our prior written permission.
              </p>

              <h2>6. Disclaimer of Warranties</h2>
              <p>
                <strong>6.1.</strong> The App is provided &ldquo;as is&rdquo;
                and &ldquo;as available,&rdquo; without warranties of any kind,
                whether express or implied, including but not limited to
                implied warranties of merchantability, fitness for a particular
                purpose, and non-infringement.
              </p>
              <p>
                <strong>6.2.</strong> We do not warrant that the App will be
                uninterrupted, error-free, or secure; that any defects will be
                corrected; or that the App will be compatible with every
                device or operating system version.
              </p>
              <p>
                <strong>6.3.</strong> The App is an educational tool and does
                not represent any specific church, denomination, or theological
                tradition. Bible content is presented in a non-denominational,
                age-appropriate manner.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                <strong>7.1.</strong> To the maximum extent permitted by
                applicable law, Bible Scholar Kids and its officers, directors,
                employees, and agents shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including loss of data, loss of profits, or loss of goodwill,
                arising out of or in connection with your use of the App.
              </p>
              <p>
                <strong>7.2.</strong> Our total aggregate liability for any
                claims arising from your use of the App shall not exceed the
                amount you have paid to us in subscription fees during the 12
                months preceding the claim.
              </p>
              <p>
                <strong>7.3.</strong> Some jurisdictions do not permit the
                exclusion or limitation of certain damages. In those
                jurisdictions, our liability shall be limited to the greatest
                extent permitted by law.
              </p>

              <h2>8. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Bible Scholar
                Kids and its officers, directors, employees, and agents from
                and against any claims, damages, losses, liabilities, and
                expenses — including reasonable attorneys&apos; fees — arising
                out of or related to your use of the App, your violation of
                these Terms, or your violation of any rights of a third party.
              </p>

              <h2>9. Termination</h2>
              <p>
                <strong>9.1.</strong> You may stop using the App at any time by
                uninstalling it from your device.
              </p>
              <p>
                <strong>9.2.</strong> We may suspend or terminate access to the
                App, or to specific features, if we reasonably believe that you
                have violated these Terms, are using the App in a harmful
                manner, or that continued access poses a legal or safety risk.
              </p>
              <p>
                <strong>9.3.</strong> Upon termination, any locally stored data
                remains on your device until you uninstall the App. Sections
                that by their nature should survive termination — including
                Intellectual Property, Disclaimer of Warranties, Limitation of
                Liability, Indemnification, and Governing Law — shall continue
                in effect.
              </p>

              <h2>10. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time to reflect changes
                to the App, legal requirements, or our practices. When we do,
                we will update the &ldquo;Last Updated&rdquo; date at the top
                of this page. For material changes, we will provide additional
                notice through the App or via the app store. Your continued use
                of the App after changes take effect constitutes your
                acceptance of the updated Terms.
              </p>

              <h2>11. Governing Law and Disputes</h2>
              <p>
                <strong>11.1.</strong> These Terms shall be governed by and
                construed in accordance with the laws of the United States,
                without regard to its conflict-of-law principles.
              </p>
              <p>
                <strong>11.2.</strong> Any dispute arising out of or relating
                to these Terms or the App shall first be addressed through
                good-faith negotiation. If the dispute cannot be resolved
                within 30 days, it shall be resolved through binding
                arbitration administered in accordance with the rules of the
                American Arbitration Association.
              </p>
              <p>
                <strong>11.3.</strong> You agree that any dispute resolution
                proceedings will be conducted on an individual basis and not as
                part of a class, consolidated, or representative action.
              </p>

              <h2>12. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision shall be modified to the minimum extent
                necessary to make it enforceable. The remaining provisions
                shall continue in full force and effect.
              </p>

              <h2>13. Entire Agreement</h2>
              <p>
                These Terms, together with our{" "}
                <a href="/privacy">Privacy Policy</a>, constitute the entire
                agreement between you and Bible Scholar Kids regarding your use
                of the App and supersede any prior or contemporaneous
                agreements, communications, and understandings.
              </p>

              <h2>14. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <p>
                <strong>Bible Scholar Kids</strong>
                <br />
                Legal:{" "}
                <a href="mailto:legal@biblescholarkids.com">
                  legal@biblescholarkids.com
                </a>
                <br />
                Support:{" "}
                <a href="mailto:support@biblescholarkids.com">
                  support@biblescholarkids.com
                </a>
                <br />
                Website:{" "}
                <a href="https://www.biblescholarkids.com">
                  www.biblescholarkids.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
