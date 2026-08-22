import { createBrowserRouter, RouterProvider, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { EASE } from './components/Reveal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './pages/Experience';
import './App.css'

// Each route renders a full-height section, so the browser keeps the previous
// scroll offset when navigating. Reset it on every route change.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Re-keying on the path replays the entrance every time the route changes,
// so a page eases in rather than snapping into place.
const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

const NotFound = () => (
  <div className="page-section section-detail">
    <div className="detail-content notfound-content">
      <span className="detail-context">404</span>
      <h1 className="detail-title">This page doesn't exist</h1>
      <p className="detail-lead">
        The link may be out of date, or the page may have been renamed.
      </p>
      <Link to="/" className="btn btn-primary detail-back-cta">Back to home</Link>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Hero />
        <FeaturedProjects />
        <Certificates />
      </Layout>
    ),
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <Projects />
      </Layout>
    ),
  },
  {
    path: "/projects/:slug",
    element: (
      <Layout>
        <ProjectDetail />
      </Layout>
    ),
  },
  {
    path: "/experience",
    element: (
      <Layout>
        <Experience />
      </Layout>
    ),
  },
  {
    path: "/skills",
    element: (
      <Layout>
        <Skills />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
], { basename: import.meta.env.BASE_URL });

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
