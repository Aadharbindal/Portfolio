// Single source of truth for project data, shared by the home page preview
// and the full projects page.
const projects = [
  {
    title: "CXL Enablement with QEMU-based Emulation",
    description:
      "A QEMU-based virtualized CXL testbed that emulates Compute Express Link devices for system-level validation, letting experimental Linux kernel drivers be configured and tested without physical CXL hardware. Debugging and feature-verification workflows automated with Shell scripting.",
    tech: ["Linux", "QEMU", "Shell", "C"],
    projectUrl: "https://github.com/madhurkedia/CXL-Enablement-with-QEMU-Based-Emulation",
    featured: true,
  },
  {
    title: "Numerate OS — Data Analytics Platform",
    description:
      "A full-stack analytics platform built with React and Python. Exposes REST APIs with user authentication, and queries uploaded datasets to generate on-demand insights.",
    tech: ["React", "TypeScript", "Python", "REST"],
    projectUrl: "https://github.com/Aadharbindal/Data_Analytical_Platform",
    liveUrl: "https://numerate-analytics.vercel.app",
    featured: true,
  },
  {
    title: "House Price Prediction",
    description:
      "Property valuation across 20 Indian cities using a Gradient Boosting Regressor at an R² of 0.948, served through a Node.js and Express REST API with an interactive dashboard.",
    tech: ["Node.js", "Express", "scikit-learn"],
    projectUrl: "https://github.com/Aadharbindal/House_Price_Prediction",
    liveUrl: "https://house-price-prediction-w1j9.onrender.com",
    featured: true,
  },
  {
    title: "Rockfall Prediction (AI/ML)",
    description:
      "An AI-driven rockfall prediction model trained on geological datasets, using data preprocessing and model optimisation to improve accuracy on high-risk events and enable proactive site safety.",
    tech: ["Python", "Machine Learning", "JavaScript"],
    projectUrl: "https://github.com/Aadharbindal/AI-Rockfall-Prediction-System",
  },
  {
    title: "Industrial Control Dashboard",
    description:
      "A dense, real-time operator interface for industrial control systems — live telemetry panels, a facility node map and role-based login, tuned for long shifts in a control room.",
    tech: ["React 19", "Vite", "Lucide"],
    projectUrl: "https://github.com/Aadharbindal/industrial-control-dashboard",
    liveUrl: "https://Aadharbindal.github.io/industrial-control-dashboard/",
  },
  {
    title: "DSA in C++",
    description:
      "Lecture-by-lecture implementations of data structures and algorithms in C++ — sorting, searching, pointers and memory, recursion and backtracking, with LeetCode solutions alongside.",
    tech: ["C++", "Algorithms"],
    projectUrl: "https://github.com/Aadharbindal/dsa-programs",
  },
];

export default projects;
