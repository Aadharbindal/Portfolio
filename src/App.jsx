import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates'; // Import the new Certificates component
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="app">
        <Navbar />
        <Hero />
        <Certificates /> {/* Add the Certificates component here */}
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <div className="app">
        <Navbar />
        <Projects />
      </div>
    ),
  },
  {
    path: "/skills",
    element: (
      <div className="app">
        <Navbar />
        <Skills />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div className="app">
        <Navbar />
        <Contact />
      </div>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
