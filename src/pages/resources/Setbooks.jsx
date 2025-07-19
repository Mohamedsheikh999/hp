import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { setbooksData } from '../Resources/ResourcesData';

const Setbooks = () => {
  const { form } = useParams();
  const formName = form.replace('-', ' ').toUpperCase();
  const books = setbooksData[form] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-2">{formName} Setbooks</h1>
      <p className="text-sky-500 mb-8">Premium Kenyan literature resources - Subscribe to access all materials</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
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
    </div>
  );
};

export default Setbooks;