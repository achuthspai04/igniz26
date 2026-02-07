export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy describes how we collect, use, and protect your personal
            information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We collect several types of information from and about users of our website:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Payment and billing information</li>
            <li>Usage data and browsing behavior</li>
            <li>Device information and IP addresses</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Processing and fulfilling your orders</li>
            <li>Communicating with you about your account and orders</li>
            <li>Improving our website and services</li>
            <li>Personalizing your experience</li>
            <li>Sending promotional communications (with your consent)</li>
            <li>Detecting and preventing fraud</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Information Sharing</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may
            share your information with trusted service providers who assist us in operating
            our website, conducting our business, or servicing you, as long as those parties
            agree to keep this information confidential.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Cookies and Tracking</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar tracking technologies to track activity on our website
            and hold certain information. You can instruct your browser to refuse all cookies
            or to indicate when a cookie is being sent. However, if you do not accept cookies,
            you may not be able to use some portions of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational security measures to protect
            your personal information against unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the Internet or electronic
            storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-3">You have the right to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Request transfer of your personal information</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for
            the privacy practices or content of these external sites. We encourage you to
            review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Children&apos;s Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website is not intended for children under 13 years of age. We do not knowingly
            collect personal information from children under 13. If you are a parent or guardian
            and believe we have collected information from your child, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on this page and updating the &quot;Last
            updated&quot; date below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy or our privacy practices,
            please contact us through our customer service channels.
          </p>
        </section>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-300">
        <p className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
