import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { motion } from 'framer-motion';

const exams = [
  {
    id: 1,
    title: 'Biology Premium',
    description: 'Comprehensive biology exams covering all KCSE topics with detailed solutions.',
    price: 'KSH 350',
    isPremium: true
  },
  {
    id: 2,
    title: 'Chemistry Premium',
    description: 'Detailed chemistry exams with practical questions and video solutions.',
    price: 'KSH 350',
    isPremium: true
  },
  {
    id: 3,
    title: 'Mathematics Premium',
    description: 'Math exams with step-by-step solutions and alternative methods.',
    price: 'KSH 350',
    isPremium: true
  },
  {
    id: 4,
    title: 'Physics Premium',
    description: 'Physics exams covering mechanics, electricity, and waves with simulations.',
    price: 'KSH 350',
    isPremium: true
  },
  {
    id: 5,
    title: 'English Setbooks',
    description: 'Complete analysis of all KCSE setbooks with sample essays.',
    price: 'KSH 400',
    isPremium: true
  },
  {
    id: 6,
    title: 'IRE Premium',
    description: 'Islamic Religious Education exams with Quranic references and marking schemes.',
    price: 'KSH 350',
    isPremium: true
  },
  {
    id: 7,
    title: 'CRE Premium',
    description: 'Christian Religious Education exams with Bible references and essays.',
    price: 'KSH 350',
    isPremium: true
  },
  {
    id: 8,
    title: 'History Premium',
    description: 'KCSE history exams with document-based questions and answers.',
    price: 'KSH 350',
    isPremium: true
  },
  {
    id: 9,
    title: 'Geography Premium',
    description: 'Geography exams with maps, diagrams, and fieldwork questions.',
    price: 'KSH 350',
    isPremium: true
  },
  {
    id: 10,
    title: 'Business Studies Premium',
    description: 'Complete business exams with case studies and calculations.',
    price: 'KSH 350',
    isPremium: true
  },
  {
    id: 11,
    title: 'Agriculture Premium',
    description: 'Agriculture exams with practical farming questions and solutions.',
    price: 'KSH 350',
    isPremium: true
  },
  {
    id: 12,
    title: 'Computer Studies Premium',
    description: 'Computer science exams with programming solutions and diagrams.',
    price: 'KSH 400',
    isPremium: true
  }
];

const Exams = () => {
  const handleGetExam = (exam) => {
    if (exam.isPremium) {
      window.location.href = '/subscription';
    } else {
      alert(`You've accessed the ${exam.title} exam for free!`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Exam Resources</h1>
        <p className="text-xl text-blue-600 max-w-2xl mx-auto">
          Access high-quality KCSE preparation materials with detailed solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {exams.map((exam, index) => (
          <motion.div
            key={exam.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card
              title={exam.title}
              description={exam.description}
              price={exam.price}
              isPremium={exam.isPremium}
              onClick={() => handleGetExam(exam)}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 bg-blue-50 rounded-xl p-8 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need all subjects?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Get unlimited access to all premium exams and save with our annual subscription plan
        </p>
        <Link
          to="/subscription"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all hover:scale-105"
        >
          View Subscription Plans
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Exams;