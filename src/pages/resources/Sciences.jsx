import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sciences = () => {
  const { form } = useParams();
  const formName = form.replace('-', ' ').toUpperCase();

  const scienceResources = [
    {
      id: 1,
      title: "Biology Complete Guide",
      subject: "Biology",
      type: "Premium",
      description: "Detailed notes, diagrams, and practice questions"
    },
    {
      id: 2,
      title: "Chemistry Experiments",
      subject: "Chemistry",
      type: "Free",
      description: "Common experiments with step-by-step guides"
    },
    {
      id: 3,
      title: "Physics Formulas",
      subject: "Physics",
      type: "Free",
      description: "All essential formulas with explanations"
    },
    {
      id: 4,
      title: "Agriculture Practicals",
      subject: "Agriculture",
      type: "Premium",
      description: "Video demonstrations and analysis"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-2">{formName} Sciences</h1>
      <p className="text-green-500 mb-8">Biology, Chemistry, Physics and Agriculture resources</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {scienceResources.map((resource) => (
          <div key={resource.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
              resource.subject === 'Biology' ? 'bg-green-100 text-green-800' :
              resource.subject === 'Chemistry' ? 'bg-blue-100 text-blue-800' :
              resource.subject === 'Physics' ? 'bg-purple-100 text-purple-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {resource.subject}
            </span>
            <h3 className="text-xl font-semibold text-black mb-1">{resource.title}</h3>
            <p className="text-gray-700 mb-4">{resource.description}</p>
            {resource.type === 'Premium' ? (
              <Link 
                to="/subscription" 
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-medium transition-colors text-center block"
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

export default Sciences;