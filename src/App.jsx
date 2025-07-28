import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import Exams from './pages/Exams';
import Levels from './pages/Levels';
import Subscription from './pages/Subscription';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import PrivacyPolicy from "./policies/PrivacyPolicy";
import TermsOfService from "./policies/TermsOfService";
import RefundPolicy from "./policies/RefundPolicy";
import Setbooks from './pages/resources/Setbooks';
import Sciences from './pages/resources/Sciences';
import Languages from './pages/resources/Languages';
import Maths from './pages/resources/Maths';


// Admin dashboard imports
import DashboardLayout from './dashboard/DashboardLayout';
import ClassLevels from './dashboard/ClassLevels';
import Subjects from './dashboard/Subjects';
import Categories from './dashboard/Categories';
import ContentItems from './dashboard/ContentItems';


function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <PageWrapper>
            <Routes>
               {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/levels" element={<Levels />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/refund" element={<RefundPolicy />} />
              <Route path="/resources/:form/setbooks" element={<Setbooks />} />
              <Route path="/resources/:form/sciences" element={<Sciences />} />
              <Route path="/resources/:form/languages" element={<Languages />} />
              <Route path="/resources/:form/maths" element={<Maths />} />

              {/* Admin dashboard routes */}
              <Route path="/admin" element={<DashboardLayout />}>
                <Route path="class-levels" element={<ClassLevels />} />
                <Route path="subjects" element={<Subjects />} />
                <Route path="categories" element={<Categories />} />
                <Route path="contents" element={<ContentItems />} />
              </Route>

            </Routes>
          </PageWrapper>
        </main>
        {/* Add Footer component here if you have one */}
      </div>
    </BrowserRouter>
  );
}

export default App;