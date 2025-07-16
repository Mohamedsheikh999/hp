const Card = ({ title, description, price, isPremium, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-sky-400">{price}</span>
          <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md font-medium ${
              isPremium
                ? 'bg-sky-400 hover:bg-sky-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            } transition-colors`}
          >
            {isPremium ? 'Subscribe' : 'Get'}
          </button>
        </div>
        {isPremium && (
          <div className="mt-2 text-xs text-sky-400 font-medium">PREMIUM CONTENT</div>
        )}
      </div>
    </div>
  );
};

export default Card;