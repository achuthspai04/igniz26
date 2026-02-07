export default function ReturnPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Return Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Returns Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            We want you to be completely satisfied with your purchase. If you&apos;re not
            satisfied, we offer a straightforward return process within 30 days of delivery.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Eligibility</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            To be eligible for a return, items must meet the following conditions:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Item must be unused and in the same condition that you received it</li>
            <li>Item must be in the original packaging</li>
            <li>Return must be initiated within 30 days of delivery</li>
            <li>Proof of purchase or receipt must be provided</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Non-Returnable Items</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The following items cannot be returned:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Gift cards</li>
            <li>Downloadable software products</li>
            <li>Personal care items</li>
            <li>Custom or personalized orders</li>
            <li>Sale or clearance items</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Return Process</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            To initiate a return, please follow these steps:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
            <li>Contact our customer service team with your order number</li>
            <li>Wait for return authorization and shipping instructions</li>
            <li>Pack the item securely in its original packaging</li>
            <li>Ship the item to the provided return address</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Refunds</h2>
          <p className="text-gray-700 leading-relaxed">
            Once your return is received and inspected, we will send you an email notification
            of approval or rejection. If approved, your refund will be processed and
            automatically applied to your original method of payment within 5-10 business days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Exchanges</h2>
          <p className="text-gray-700 leading-relaxed">
            We only replace items if they are defective or damaged. If you need to exchange
            an item for the same product, contact us and send your item to our returns address.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Shipping Costs</h2>
          <p className="text-gray-700 leading-relaxed">
            You will be responsible for paying your own shipping costs for returning your item.
            Shipping costs are non-refundable. If you receive a refund, the cost of return
            shipping will be deducted from your refund.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about our return policy, please contact our customer
            service team for assistance.
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
