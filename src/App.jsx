import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
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

const Layout = ({ children }) => (
  <div className="app">
    <ScrollToTop />
    <Navbar />
    {children}
    <Footer />
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
], { basename: import.meta.env.BASE_URL });

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
