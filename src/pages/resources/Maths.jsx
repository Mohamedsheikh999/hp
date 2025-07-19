import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { mathsData } from "../Resources/ResourcesData";

const Maths = () => {
  const { form } = useParams();
  const formName = form.replace('-', ' ').toUpperCase();
  const resources = mathsData[form] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-2">{formName} Mathematics</h1>
      <p className="text-orange-500 mb-8">Algebra, Geometry, Calculus and more</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
              resource.topic === 'Algebra' ? 'bg-blue-100 text-blue-800' :
              resource.topic === 'Geometry' ? 'bg-green-100 text-green-800' :
              resource.topic === 'Trigonometry' ? 'bg-purple-100 text-purple-800' :
              'bg-red-100 text-red-800'
            }`}>
              {resource.topic}
            </span>
            <h3 className="text-xl font-semibold text-black mb-1">{resource.title}</h3>
            <p className="text-gray-700 mb-4">{resource.description}</p>
            {resource.type === 'Premium' ? (
              <Link 
                to="/subscription" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium transition-colors text-center block"
              >
                Subscribe to Access
              </Link>
            ) : (
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md font-medium transition-colors">
                Download Now
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-orange-50 p-6 rounded-lg border border-orange-100">
        <h3 className="text-xl font-semibold text-black mb-4">{formName} Math Focus Areas</h3>
        <ul className="space-y-3">
          {form === 'form-1' && (
            <>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Master basic arithmetic operations
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Understand simple algebraic expressions
              </li>
            </>
          )}
          {form === 'form-4' && (
            <>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Focus on KCSE exam techniques and time management
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Practice with 5+ years of past papers
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Maths;