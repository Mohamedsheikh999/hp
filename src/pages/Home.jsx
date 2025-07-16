import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center bg-gradient-to-r from-sky-50 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 animate-fade-in">
              Welcome to <span className="text-sky-400">Hawai</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-100">
              Premium educational resources tailored for Kenyan students
            </p>
          </div>
        </section>

        {/* Version Cards */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-black mb-8 text-center animate-fade-in">
              Choose Your Version
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card
                title="Premium Version"
                description="Unlock all exams, detailed solutions, and premium support."
                price="KSH 1,500/month"
                isPremium={true}
                onClick={() => window.location.href = '/subscription'}
              />
              <Card
                title="Free Version"
                description="Access to basic exams and limited solutions."
                price="FREE"
                isPremium={false}
                onClick={() => alert('Enjoy our free content!')}
              />
            </div>
          </div>
        </section>

        {/* Product Name Section */}
        <section className="py-16 bg-gradient-to-br from-sky-400 to-blue-500">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
                The <span className="text-yellow-300">Hawai</span> Experience
              </h2>
              <p className="text-lg text-sky-100 mb-8 animate-fade-in delay-100">
                Revolutionizing education through quality content and innovative learning solutions
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in delay-200">
                {[
                  { icon: '📚', title: 'Comprehensive', desc: 'Full curriculum coverage' },
                  { icon: '🎯', title: 'Targeted', desc: 'Exam-focused materials' },
                  { icon: '💡', title: 'Interactive', desc: 'Engaging learning tools' },
                  { icon: '🚀', title: 'Effective', desc: 'Proven results' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-sky-100">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-sky-400 mb-4">Hawai</h3>
              <p className="text-gray-400">
                Empowering Kenyan students with quality educational resources since 2023.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-sky-400 transition-colors">Home</Link></li>
                <li><Link to="/exams" className="text-gray-400 hover:text-sky-400 transition-colors">Exams</Link></li>
                <li><Link to="/levels" className="text-gray-400 hover:text-sky-400 transition-colors">Levels</Link></li>
                <li><Link to="/subscription" className="text-gray-400 hover:text-sky-400 transition-colors">Subscription</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-400 hover:text-sky-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-sky-400 transition-colors">Terms of Service</Link></li>
                <li><Link to="/refund" className="text-gray-400 hover:text-sky-400 transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@hawai.co.ke
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +254 700 000000
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                    <span className="sr-only">{social}</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Hawai Educational Resources. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Home;