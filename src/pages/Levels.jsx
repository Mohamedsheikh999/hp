import { useState } from 'react';

const levels = ['Form 1', 'Form 2', 'Form 3', 'Form 4'];
const contentByLevel = {
  'Form 1': [
    'Introduction to Biology: Cells and Classification',
    'Basic Chemistry: Matter and Elements',
    'Mathematics: Numbers and Algebra Basics'
  ],
  'Form 2': [
    'Biology: Transport in Plants and Animals',
    'Chemistry: Structure and Bonding',
    'Mathematics: Quadratic Equations and Trigonometry'
  ],
  'Form 3': [
    'Biology: Ecology and Reproduction',
    'Chemistry: Organic Chemistry I',
    'Mathematics: Surds and Logarithms'
  ],
  'Form 4': [
    'Biology: Genetics and Evolution',
    'Chemistry: Acids, Bases and Salts',
    'Mathematics: Calculus and Vectors'
  ]
};

const Levels = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <div>
      <h1 className="text-3xl font-bold text-black mb-8">Select Your Level</h1>
      
      <div className="flex flex-wrap gap-4 mb-8">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`px-6 py-2 rounded-md font-medium ${
              selectedLevel === level
                ? 'bg-sky-400 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } transition-colors`}
          >
            {level}
          </button>
        ))}
      </div>

      {selectedLevel && (
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">{selectedLevel} Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentByLevel[selectedLevel].map((content, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {content.split(':')[0]}
                </h3>
                <p className="text-gray-600">{content.split(':')[1]}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Levels;