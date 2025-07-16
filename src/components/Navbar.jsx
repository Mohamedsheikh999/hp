import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-6">
          <Link to="/" className="text-black hover:text-sky-400 transition-colors font-medium">
            Home
          </Link>
          <Link to="/exams" className="text-black hover:text-sky-400 transition-colors font-medium">
            Exams
          </Link>
          <Link to="/levels" className="text-black hover:text-sky-400 transition-colors font-medium">
            Levels
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link 
            to="/signup" 
            className="text-black hover:text-sky-400 transition-colors font-medium"
          >
            Sign Up
          </Link>
          <Link 
            to="/signin" 
            className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded-md transition-colors font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;