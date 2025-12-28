'use client';

import HeroBanner from '../sections/development-page/HeroBanner';

export default function PrivacyPolicyPage() {

  return (
    <div>
      <HeroBanner
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        backgroundImage="/assets/heroImg.jpeg"
      />

      {/* Contact Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="max-w-4xl mx-auto">

                  {/* Header */}
                  <div className="mb-8 md:mb-10">
                      <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black mb-2">
                          Privacy Policy
                      </h2>
                      <p className="text-sm text-gray-500">
                          Last Updated: December 28, 2025
                      </p>
                  </div>

                  {/* Intro */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                      Welcome to <strong>Aastha</strong> (“we”, “us”, “our”). Your privacy is important to us.
                      This Privacy Policy explains how we collect, use, disclose, and protect your information
                      when you visit our website or use our real estate development, construction, and interior services.
                  </p>

                  {/* Section 1 */}
                  <h3 className="text-xl font-semibold text-black mt-8 mb-3">
                      1. Information We Collect
                  </h3>

                  <h4 className="text-lg font-semibold text-black mt-4 mb-2">
                      1.1 Personal Information
                  </h4>
                  <p className="text-gray-700 mb-3">
                      We may collect personal information that you voluntarily provide when you:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4">
                      <li>Submit inquiries through contact forms</li>
                      <li>Request project quotes or consultations</li>
                      <li>Subscribe to newsletters or updates</li>
                      <li>Communicate with us regarding services</li>
                  </ul>

                  <p className="text-gray-700 mb-6">
                      This may include your name, email address, phone number, address, and project-related details.
                  </p>

                  <h4 className="text-lg font-semibold text-black mt-4 mb-2">
                      1.2 Automatically Collected Information
                  </h4>
                  <p className="text-gray-700 mb-6">
                      When you visit our website, we may automatically collect information such as IP address,
                      browser type, pages visited, device information, and access time for analytics and security purposes.
                  </p>

                  {/* Section 2 */}
                  <h3 className="text-xl font-semibold text-black mt-8 mb-3">
                      2. How We Use Your Information
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>To provide and improve our services</li>
                      <li>To respond to inquiries and communicate with you</li>
                      <li>To personalize user experience</li>
                      <li>To send service-related updates and marketing communications</li>
                      <li>To comply with legal obligations</li>
                  </ul>

                  {/* Section 3 */}
                  <h3 className="text-xl font-semibold text-black mt-8 mb-3">
                      3. Cookies & Tracking Technologies
                  </h3>
                  <p className="text-gray-700 mb-6">
                      We use cookies and similar technologies to enhance website functionality, analyze performance,
                      and improve user experience. You can control cookies through your browser settings.
                  </p>

                  {/* Section 4 */}
                  <h3 className="text-xl font-semibold text-black mt-8 mb-3">
                      4. Sharing Your Information
                  </h3>
                  <p className="text-gray-700 mb-6">
                      We do not sell your personal information. We may share data with trusted service providers,
                      business partners, or authorities when required by law or with your consent.
                  </p>

                  {/* Section 5 */}
                  <h3 className="text-xl font-semibold text-black mt-8 mb-3">
                      5. Data Security
                  </h3>
                  <p className="text-gray-700 mb-6">
                      We take reasonable measures to protect your personal data from unauthorized access or disclosure.
                      However, no online transmission is 100% secure.
                  </p>

                  {/* Section 6 */}
                  <h3 className="text-xl font-semibold text-black mt-8 mb-3">
                      6. Your Rights
                  </h3>
                  <p className="text-gray-700 mb-6">
                      You may request access, correction, or deletion of your personal data and opt out of marketing
                      communications by contacting us.
                  </p>

                  {/* Section 7 */}
                  <h3 className="text-xl font-semibold text-black mt-8 mb-3">
                      7. Third-Party Links
                  </h3>
                  <p className="text-gray-700 mb-6">
                      Our website may contain links to third-party sites. We are not responsible for their
                      privacy practices or content.
                  </p>

                  {/* Section 8 */}
                  <h3 className="text-xl font-semibold text-black mt-8 mb-3">
                      8. Children’s Privacy
                  </h3>
                  <p className="text-gray-700 mb-6">
                      We do not knowingly collect personal information from children under 13 years of age.
                  </p>

                  {/* Section 9 */}
                  <h3 className="text-xl font-semibold text-black mt-8 mb-3">
                      9. Changes to This Policy
                  </h3>
                  <p className="text-gray-700 mb-6">
                      We may update this Privacy Policy from time to time. Changes will be posted on this page
                      with an updated revision date.
                  </p>

                  {/* Section 10 */}
                  <h3 className="text-xl font-semibold text-black mt-8 mb-3">
                      10. Contact Us
                  </h3>
                  <p className="text-gray-700">
                      If you have any questions about this Privacy Policy, please contact us via our website:
                  </p>
                  <p className="text-gray-700 font-medium mt-2">
                      https://www.aasthabd.com/
                  </p>

              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
