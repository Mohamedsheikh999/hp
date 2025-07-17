import { motion } from 'framer-motion';

const Card = ({ title, description, price, isPremium, onClick }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="p-6">
        {isPremium && (
          <span className="inline-block bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">
            PREMIUM
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {price && (
          <p className="text-lg font-bold text-blue-600 mb-4">{price}</p>
        )}
        <button
          onClick={onClick}
          className={`w-full py-2 px-4 rounded-lg font-medium ${
            isPremium
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          {isPremium ? 'Subscribe to Access' : 'View Free Content'}
        </button>
      </div>
    </motion.div>
  );
};

export default Card;