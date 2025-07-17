import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Languages = () => {
  const { form } = useParams();
  const formName = form.replace('-', ' ').toUpperCase();

  const languageResources = [
    {
      id: 1,
      title: "English Grammar Guide",
      language: "English",
      type: "Free",
      description: "Comprehensive grammar rules and exercises"
    },
    {
      id: 2,
      title: "Kiswahili Fasihi",
      language: "Kiswahili",
      type: "Premium",
      description: "In-depth analysis of set texts and poetry"
    },
    {
      id: 3,
      title: "Oral Skills Practice",
      language: "English",
      type: "Free",
      description: "Listening and speaking exercises"
    },
    {
      id: 4,
      title: "Kiswahili Sarufi",
      language: "Kiswahili",
      type: "Premium",
      description: "Advanced grammar and composition techniques"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-2">{formName} Languages</h1>
      <p className="text-purple-500 mb-8">English, Kiswahili and other language materials</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {languageResources.map((resource) => (
          <div key={resource.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
              resource.language === 'English' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {resource.language}
            </span>
            <h3 className="text-xl font-semibold text-black mb-1">{resource.title}</h3>
            <p className="text-gray-700 mb-4">{resource.description}</p>
            {resource.type === 'Premium' ? (
              <Link 
                to="/subscription" 
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md font-medium transition-colors text-center block"
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
    </div>
  );
};

export default Languages;