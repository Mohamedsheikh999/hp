import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const FeatureCard = ({ icon, title, desc, delay }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: delay * 0.1 }}
        className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all hover:-translate-y-1"
      >
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="text-sm text-blue-100">{desc}</p>
      </motion.div>
    );
  };

  useEffect(() => {
    // Preload any heavy assets if needed
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 text-center bg-gradient-to-r from-blue-50 to-white overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.05, y: 0 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="absolute rounded-full bg-blue-600"
                style={{
                  width: Math.random() * 200 + 50,
                  height: Math.random() * 200 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative">
            {/* 3D Text Effect */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 relative inline-block">
                  <span className="absolute -inset-1 bg-blue-800/20 blur-xl rounded-lg"></span>
                  <span className="relative">
                    <span className="text-shadow-3d">Hawai Academy</span>
                  </span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8"
            >
              Premium educational resources tailored for Kenyan students
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex justify-center gap-4"
            >
              <Link 
                to="/subscription" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/exams" 
                className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Browse Exams
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-700 to-blue-900">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-8"
              >
                The <span className="text-yellow-300">Hawai</span> Advantage
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
              >
                Revolutionizing education through quality content and innovative learning solutions
              </motion.p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: '📚', title: 'Comprehensive', desc: 'Full curriculum coverage' },
                  { icon: '🎯', title: 'Targeted', desc: 'Exam-focused materials' },
                  { icon: '💡', title: 'Interactive', desc: 'Engaging learning tools' },
                  { icon: '🚀', title: 'Effective', desc: 'Proven results' }
                ].map((item, index) => (
                  <FeatureCard 
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                    delay={index}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <Link 
                  to="/subscription" 
                  className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-105"
                >
                  Start Learning Today
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            >
              Trusted by Students
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  quote: "Hawai helped me improve my grades significantly. The detailed solutions are a game changer!", 
                  author: "Sarah K., Form 4 Student" 
                },
                { 
                  quote: "I aced my KCSE thanks to their comprehensive resources and exam-focused approach.", 
                  author: "James M., Former Student" 
                },
                { 
                  quote: "Finally, a platform that understands what Kenyan students need. Highly recommended!", 
                  author: "Fatuma A., Form 3 Student" 
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl text-gray-300 mb-4">"</div>
                  <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                  <p className="font-semibold text-blue-600">{testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Hawai</h3>
              <p className="text-gray-400">
                Empowering Kenyan students with quality educational resources since 2023.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link to="/exams" className="text-gray-400 hover:text-blue-400 transition-colors">Exams</Link></li>
                <li><Link to="/levels" className="text-gray-400 hover:text-blue-400 transition-colors">Levels</Link></li>
                <li><Link to="/subscription" className="text-gray-400 hover:text-blue-400 transition-colors">Subscription</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                <li><Link to="/refund" className="text-gray-400 hover:text-blue-400 transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@hawai.co.ke
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +254 700 000000
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Hawai Educational Resources. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Global styles */}
      <style jsx global>{`
        .text-shadow-3d {
          text-shadow: 
            1px 1px 0 #1e40af,
            2px 2px 0 #1e40af,
            3px 3px 0 #1e40af,
            4px 4px 0 #1e40af,
            5px 5px 0 #1e40af,
            6px 6px 0 #1e40af,
            7px 7px 10px rgba(0,0,0,0.2);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;