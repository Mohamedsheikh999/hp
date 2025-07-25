import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLock, FiEye, FiEyeOff, FiAlertCircle } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const socialButtons = [
    { id: 'google', name: 'Google', color: 'bg-red-500', hover: 'hover:bg-red-600' },
    { id: 'facebook', name: 'Facebook', color: 'bg-blue-600', hover: 'hover:bg-blue-700' },
    { id: 'github', name: 'GitHub', color: 'bg-gray-800', hover: 'hover:bg-gray-900' },
  ];

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email format';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        if (rememberMe) localStorage.setItem('token', data.token);
        login(data.token);
        navigate('/');
      } else {
        setErrors({ general: data.message || 'Login failed' });
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    } catch (err) {
      setErrors({ general: 'An error occurred. Please try again.' });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${shake ? 'animate-shake' : ''}`}>
          <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-6 text-center">
            <motion.h1 className="text-3xl font-bold text-white">Welcome Back</motion.h1>
            <motion.p className="text-sky-100 mt-2">Sign in to access your account</motion.p>
          </div>

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
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-3 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    className={`w-full pl-10 pr-3 py-3 rounded-lg border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-sky-400`}
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className={`w-full pl-10 pr-10 py-3 rounded-lg border ${errors.password ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-sky-400`}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: '' });
                    }}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

              {/* Remember me & forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-sky-400 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-sky-500 hover:text-sky-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-sky-400 ${isSubmitting ? 'opacity-80' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social logins */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {socialButtons.map((btn) => (
                <a
                  key={btn.id}
                  href="#"
                  className={`w-full flex justify-center py-2 px-2 rounded-lg shadow-sm text-sm font-medium text-white ${btn.color} ${btn.hover} focus:outline-none`}
                >
                  {btn.name}
                </a>
              ))}
            </div>

            {/* Signup */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="font-medium text-sky-500 hover:text-sky-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Demo credentials */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Try demo credentials:</p>
          <p className="font-mono">Email: demo@example.com</p>
          <p className="font-mono">Password: password123</p>
        </div>

        {/* Shake animation */}
        <style jsx global>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
          }
          .animate-shake {
            animation: shake 0.5s ease-in-out both;
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default SignIn;
