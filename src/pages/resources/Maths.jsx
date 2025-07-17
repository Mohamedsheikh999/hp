import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Maths = () => {
  const { form } = useParams();
  const formName = form.replace('-', ' ').toUpperCase();

  const mathResources = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      topic: "Algebra",
      type: "Free",
      description: "Basic to intermediate algebra concepts"
    },
    {
      id: 2,
      title: "Geometry Masterclass",
      topic: "Geometry",
      type: "Premium",
      description: "Advanced geometry with proofs and solutions"
    },
    {
      id: 3,
      title: "Trigonometry Guide",
      topic: "Trigonometry",
      type: "Free",
      description: "All trigonometric formulas and applications"
    },
    {
      id: 4,
      title: "Calculus Workbook",
      topic: "Calculus",
      type: "Premium",
      description: "Step-by-step calculus problems and solutions"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-2">{formName} Mathematics</h1>
      <p className="text-orange-500 mb-8">Algebra, Geometry, Calculus and more</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mathResources.map((resource) => (
          <div key={resource.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
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
    </div>
  );
};

export default Maths;