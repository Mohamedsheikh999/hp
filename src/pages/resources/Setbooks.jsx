import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Setbooks = () => {
  const { form } = useParams();
  const formName = form.replace('-', ' ').toUpperCase();

  const setbooks = [
    {
      id: 1,
      title: "Fathers of Nation",
      author: "Paul B. Vitta",
      description: "Complete novel with chapter-by-chapter analysis, character breakdowns, and essay questions"
    },
    {
      id: 2,
      title: "Silent Song and Other Stories",
      author: "Ngugi wa Thiong'o",
      description: "Comprehensive guide with literary analysis, themes exploration, and exam-style questions"
    },
    {
      id: 3,
      title: "Bembea ya Maisha",
      author: "Kithaka wa Mberia",
      description: "Detailed study guide with Swahili poetry analysis, cultural context, and sample answers"
    },
    {
      id: 4,
      title: "Artist of the Floating World",
      author: "Kazuo Ishiguro",
      description: "In-depth literary critique with historical context, character studies, and essay plans"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-2">{formName} Setbooks</h1>
      <p className="text-sky-500 mb-8">Premium Kenyan literature resources - Subscribe to access all materials</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {setbooks.map((book) => (
          <div key={book.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-black">{book.title}</h3>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                Premium
              </span>
            </div>
            <p className="text-gray-600 mb-3">by {book.author}</p>
            <p className="text-gray-700 mb-6">{book.description}</p>
            <Link 
              to="/subscription" 
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-md font-medium transition-colors text-center block"
            >
              Subscribe to Access
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold text-black mb-2">Why Subscribe?</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Unlimited access to all setbook analyses and study guides
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Downloadable PDF versions of all materials
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Exclusive access to model essays and answers
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Setbooks;