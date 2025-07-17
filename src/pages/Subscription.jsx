import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Subscription = () => {
  const plans = [
    {
      name: 'Monthly Plan',
      price: 'KSH 350',
      period: 'month',
      features: [
        'Access to all premium exams',
        'Detailed solutions',
        'Downloadable materials',
        'Email support',
        'Cancel anytime'
      ],
      buttonText: 'Get Started'
    },
    {
      name: 'Annual Plan',
      price: 'KSH 1,499',
      period: 'year',
      features: [
        'Unlimited access to all exams',
        'Detailed video solutions',
        '24/7 priority support',
        'Downloadable materials',
        'Save 65% (KSH 2,701 value)',
        'Personalized study plans'
      ],
      buttonText: 'Best Value',
      popular: true
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
        <p className="text-xl text-blue-600 max-w-2xl mx-auto">
          Premium educational resources tailored for Kenyan students
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`relative p-8 rounded-xl border-2 ${
              plan.popular 
                ? 'border-blue-500 shadow-2xl bg-gradient-to-b from-blue-50 to-white' 
                : 'border-gray-200 shadow-lg bg-white'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-1 text-sm font-bold rounded-bl-xl rounded-tr-xl shadow-md">
                PREMIUM
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-blue-600 mb-1">
                {plan.price} 
                <span className="text-lg font-medium text-gray-500">/{plan.period}</span>
              </p>
              {plan.popular && (
                <p className="text-sm text-green-600 font-medium">Save 65% compared to monthly</p>
              )}
            </div>
            
            <ul className="mb-8 space-y-3">
              {plan.features.map((feature, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <Link 
              to="/signin" 
              className={`block w-full text-center py-3 px-6 rounded-lg font-bold transition-all ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-900'
                  : 'bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600'
              }`}
            >
              {plan.buttonText}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-blue-50 rounded-xl p-8 mb-20"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's included in all plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '📚', title: 'All Subjects', desc: 'Full curriculum coverage' },
            { icon: '🎯', title: 'KCSE Focused', desc: 'Exam-specific materials' },
            { icon: '📱', title: 'Mobile Access', desc: 'Learn anywhere, anytime' }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Subscription;