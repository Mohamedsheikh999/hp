import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-sky max-w-none">
          <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing or using the Hawai platform, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">2. Account Registration</h2>
          <p className="text-gray-700">
            You must provide accurate and complete information when creating an account. 
            You are responsible for maintaining the confidentiality of your account credentials.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">3. Subscription and Payments</h2>
          <p className="text-gray-700">
            Subscription fees are billed in advance and are non-refundable except as provided in our 
            Refund Policy. You may cancel your subscription at any time.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">4. User Conduct</h2>
          <p className="text-gray-700">
            You agree not to misuse the Hawai services or help anyone else do so. This includes not:
          </p>
          <ul className="text-gray-700 list-disc pl-5 space-y-1">
            <li>Copying, distributing, or disclosing any part of our content without authorization</li>
            <li>Using our services for any illegal purpose</li>
            <li>Attempting to interfere with the proper working of our services</li>
          </ul>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-gray-600">
              For questions about these Terms, contact us at{' '}
              <a href="mailto:legal@hawai.co.ke" className="text-sky-500 hover:text-sky-600">
                legal@hawai.co.ke
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

export default TermsOfService;