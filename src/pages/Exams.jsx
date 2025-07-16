import Card from '../components/Card';

const exams = [
  {
    id: 1,
    title: 'Biology',
    description: 'Comprehensive biology exams covering all topics in the KCSE syllabus.',
    
    isPremium: false
  },
  {
    id: 2,
    title: 'Chemistry',
    description: 'Detailed chemistry exams with practical questions and solutions.',
    price: 'KSH 300',
    isPremium: true
  },
  {
    id: 3,
    title: 'Mathematics',
    description: 'Math exams with step-by-step solutions for all problems.',
    price: 'KSH 350',
    isPremium: true
  },
  {
    id: 4,
    title: 'Physics',
    description: 'Physics exams covering mechanics, electricity, and waves.',
    
    isPremium: false
  },
  {
    id: 5,
    title: 'English',
    description: 'English language and literature exams with marking schemes.',
    
    isPremium: false
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
    <div>
      <h1 className="text-3xl font-bold text-black mb-8">Available Exams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exams.map((exam) => (
          <Card
            key={exam.id}
            title={exam.title}
            description={exam.description}
            price={exam.price}
            isPremium={exam.isPremium}
            onClick={() => handleGetExam(exam)}
          />
        ))}
      </div>
    </div>
  );
};

export default Exams;