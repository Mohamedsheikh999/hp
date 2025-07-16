import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLock, FiEye, FiEyeOff, FiAlertCircle } from 'react-icons/fi';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  // Demo user for simulation
  const demoUser = {
    email: 'demo@example.com',
    password: 'password123'
  };

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email format';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      if (email === demoUser.email && password === demoUser.password) {
        // Successful login
        navigate('/dashboard'); // Redirect to dashboard or home
      } else {
        setErrors({ general: 'Invalid email or password' });
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
      setIsSubmitting(false);
    }, 1500);
  };

  // Social login buttons animation
  const socialButtons = [
    { id: 1, name: 'Google', color: 'bg-red-500', hover: 'hover:bg-red-600' },
    { id: 2, name: 'Facebook', color: 'bg-blue-600', hover: 'hover:bg-blue-700' },
    { id: 3, name: 'GitHub', color: 'bg-gray-800', hover: 'hover:bg-gray-900' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${shake ? 'animate-shake' : ''}`}>
          {/* Header with animated gradient */}
          <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-6 text-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-white"
            >
              Welcome Back
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sky-100 mt-2"
            >
              Sign in to access your account
            </motion.p>
          </div>

          {/* Form container */}
          <div className="p-8">
            <AnimatePresence>
              {errors.general && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-center"
                >
                  <FiAlertCircle className="mr-2" />
                  {errors.general}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email field */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`block w-full pl-10 pr-3 py-3 rounded-lg border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all`}
                    placeholder="your@email.com"
                  />
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Password field */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: '' });
                    }}
                    className={`block w-full pl-10 pr-10 py-3 rounded-lg border ${errors.password ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                    ) : (
                      <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                    )}
                  </button>
                </div>
                <AnimatePresence>
                  {errors.password && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Remember me & forgot password */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-sky-400 focus:ring-sky-400 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="text-sm text-sky-500 hover:text-sky-600 hover:underline">
                  Forgot password?
                </Link>
              </motion.div>

              {/* Submit button */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 transition-all ${isSubmitting ? 'opacity-80' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </motion.div>
            </form>

            {/* Divider */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6"
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
            </motion.div>

            {/* Social login buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 grid grid-cols-3 gap-3"
            >
              {socialButtons.map((button, index) => (
                <motion.div
                  key={button.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#"
                    className={`w-full inline-flex justify-center py-2 px-2 rounded-lg shadow-sm text-sm font-medium text-white ${button.color} ${button.hover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all`}
                  >
                    <span className="sr-only">Sign in with {button.name}</span>
                    {button.name}
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Sign up link */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="font-medium text-sky-500 hover:text-sky-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Demo credentials hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-4 text-center text-sm text-gray-500"
        >
          <p>Try demo credentials:</p>
          <p className="font-mono">Email: demo@example.com</p>
          <p className="font-mono">Password: password123</p>
        </motion.div>
      </motion.div>

      {/* Add custom animation to tailwind config */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </div>
  );
};

export default SignIn;