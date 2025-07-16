import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-sky max-w-none">
          <h2 className="text-xl font-semibold text-gray-900">1. Digital Products</h2>
          <p className="text-gray-700">
            Due to the nature of digital products, we generally do not offer refunds for subscription 
            purchases. However, we may make exceptions on a case-by-case basis.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">2. Subscription Cancellation</h2>
          <p className="text-gray-700">
            You may cancel your subscription at any time. Cancellation will take effect at the end of 
            your current billing period, and you will not receive a refund for the current billing cycle.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">3. Refund Requests</h2>
          <p className="text-gray-700">
            If you believe you are entitled to a refund, please contact us within 14 days of your purchase 
            at <a href="mailto:support@hawai.co.ke" className="text-sky-500 hover:text-sky-600">support@hawai.co.ke</a> 
            with your request and explanation.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">4. Processing Refunds</h2>
          <p className="text-gray-700">
            Approved refunds will be processed within 7-10 business days and credited to your original 
            payment method.
          </p>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-gray-600">
              For any questions regarding our Refund Policy, please contact us at{' '}
              <a href="mailto:support@hawai.co.ke" className="text-sky-500 hover:text-sky-600">
                support@hawai.co.ke
              </a>.
            </p>
            <Link 
              to="/" 
              className="mt-4 inline-flex items-center text-sky-500 hover:text-sky-600"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;