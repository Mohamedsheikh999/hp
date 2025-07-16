import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import Exams from './pages/Exams';
import Levels from './pages/Levels';
import Subscription from './pages/Subscription';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivacyPolicy from "./policies/PrivacyPolicy";
import TermsOfService from "./policies/TermsOfService";
import RefundPolicy from "./policies/RefundPolicy";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/levels" element={<Levels />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/refund" element={<RefundPolicy />} />
          </Routes>
        </PageWrapper>
      </div>
    </Router>
  );
}

export default App;