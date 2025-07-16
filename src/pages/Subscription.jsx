const plans = [
  {
    name: 'Basic',
    price: 'KSH 500',
    period: 'month',
    features: [
      'Access to all free exams',
      '5 premium exams per month',
      'Email support'
    ],
    buttonText: 'Get Started'
  },
  {
    name: 'Standard',
    price: 'KSH 1,000',
    period: 'month',
    features: [
      'Access to all free exams',
      '15 premium exams per month',
      'Priority email support',
      'Downloadable solutions'
    ],
    buttonText: 'Popular Choice',
    popular: true
  },
  {
    name: 'Premium',
    price: 'KSH 1,500',
    period: 'month',
    features: [
      'Unlimited access to all exams',
      'Detailed video solutions',
      '24/7 priority support',
      'Downloadable materials',
      'Personalized study plans'
    ],
    buttonText: 'Best Value'
  }
];

const faqs = [
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel anytime from your account settings.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 7-day free trial for new users.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept M-Pesa, credit cards, and bank transfers.'
  }
];

const Subscription = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black mb-2">Subscription Plans</h1>
      <p className="text-sky-400 mb-8">Choose the plan that fits your needs</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative p-6 rounded-lg border ${
              plan.popular 
                ? 'border-sky-400 shadow-lg' 
                : 'border-gray-200 shadow-md'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-sky-400 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                POPULAR
              </div>
            )}
            <h3 className="text-xl font-bold text-black mb-1">{plan.name}</h3>
            <p className="text-3xl font-bold text-sky-400 mb-2">
              {plan.price} <span className="text-lg text-gray-500">/{plan.period}</span>
            </p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-sky-400 hover:bg-sky-500 text-white py-2 rounded-md font-medium transition-colors">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-black mb-1">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;