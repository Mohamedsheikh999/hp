import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-sky max-w-none">
          <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
          <p className="text-gray-700">
            We collect information you provide directly to us, such as when you create an account, 
            purchase a subscription, or contact us for support. This may include your name, email address, 
            payment information, and other details you choose to provide.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">2. How We Use Your Information</h2>
          <p className="text-gray-700">
            We use the information we collect to:
          </p>
          <ul className="text-gray-700 list-disc pl-5 space-y-1">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Send you technical notices and support messages</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">3. Information Sharing</h2>
          <p className="text-gray-700">
            We do not share your personal information with third parties except as necessary to provide 
            our services or as required by law.
          </p>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@hawai.co.ke" className="text-sky-500 hover:text-sky-600">
                privacy@hawai.co.ke
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

export default PrivacyPolicy;