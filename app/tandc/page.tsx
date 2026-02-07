export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using this website, you accept and agree to be bound by the terms
            and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Use License</h2>
          <p className="text-gray-700 leading-relaxed">
            Permission is granted to temporarily download one copy of the materials on our
            website for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed">
            The materials on our website are provided on an &apos;as is&apos; basis. We make no
            warranties, expressed or implied, and hereby disclaim and negate all other warranties
            including, without limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Limitations</h2>
          <p className="text-gray-700 leading-relaxed">
            In no event shall we or our suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Revisions</h2>
          <p className="text-gray-700 leading-relaxed">
            We may revise these terms of service for our website at any time without notice.
            By using this website you are agreeing to be bound by the then current version of
            these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws
            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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
