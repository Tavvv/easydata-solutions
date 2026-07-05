import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import SEOHelmet from './components/SEOHelmet';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import EECPage from './pages/EECPage';
import BOIPage from './pages/BOIPage';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const { i18n } = useTranslation();
  const location = useLocation();

  const lang = location.pathname.split('/')[1] || 'en';
  const supportedLangs = ['en', 'zh', 'th'];
  const currentLang = supportedLangs.includes(lang) ? lang : 'en';

  useEffect(() => {
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
      document.documentElement.lang = currentLang;
    }
  }, [currentLang, i18n]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHelmet />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/about" element={<About />} />
          <Route path="/:lang/services" element={<Services />} />
          <Route path="/:lang/eec-it-solutions" element={<EECPage />} />
          <Route path="/:lang/boi-incentives" element={<BOIPage />} />
          <Route path="/:lang/blog" element={<Blog />} />
          <Route path="/:lang/blog/:slug" element={<BlogPost />} />
          <Route path="/:lang/contact" element={<Contact />} />
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <AppContent />
    </>
  );
}

export default App;
