// Single source of truth for project data, shared by the home page preview,
// the projects grid and the individual case-study pages.
const projects = [
  {
    slug: 'cxl-qemu-emulation',
    title: 'CXL Enablement with QEMU-based Emulation',
    summary:
      'A QEMU-based virtualized CXL testbed that emulates Compute Express Link devices for system-level validation, letting experimental Linux kernel drivers be configured and tested without physical CXL hardware.',
    description:
      'A QEMU-based virtualized CXL testbed that emulates Compute Express Link devices for system-level validation, letting experimental Linux kernel drivers be configured and tested without physical CXL hardware. Debugging and feature-verification workflows automated with Shell scripting.',
    tech: ['Linux', 'QEMU', 'Shell', 'C'],
    projectUrl: 'https://github.com/madhurkedia/CXL-Enablement-with-QEMU-Based-Emulation',
    featured: true,
    context: 'Internship project at Hewlett Packard Enterprise',
    role: 'CPP3 Intern — one of five contributors',
    period: 'Feb 2026 – Jul 2026',
    problem:
      'Compute Express Link is an interconnect standard for attaching memory and accelerators to a CPU over PCIe. Validating support for it normally requires CXL-capable server hardware, which is expensive, scarce, and impossible to hand to every engineer who needs to test a kernel change.',
    approach: [
      'Configured and deployed a QEMU-based emulation environment on Ubuntu that presents virtual CXL devices to the guest, so the specification could be validated entirely in software.',
      'Set up and tested experimental Linux kernel drivers against the emulated devices, exercising the code paths that would otherwise need physical hardware.',
      'Wrote Shell scripts to automate the whole pipeline — system configuration, kernel compilation and QEMU environment setup — turning a long manual sequence into a repeatable command.',
      'Automated debugging and feature-verification workflows so regressions surfaced without a manual re-run of each step.',
    ],
    outcome: [
      'CXL specification behaviour could be validated with no physical CXL hardware in the loop.',
      'Kernel build and environment setup went from a manual, error-prone sequence to a scripted pipeline.',
      'The testbed is reusable — any engineer on the team can bring up an identical environment.',
    ],
    learned:
      'This was my first sustained piece of systems work: kernel compilation, virtualization internals and the discipline of automating an environment so results are reproducible rather than a one-off.',
  },
  {
    slug: 'numerate-os',
    title: 'Numerate OS — Data Analytics Platform',
    summary:
      'A full-stack analytics workspace where you upload a dataset and query it for on-demand insights, backed by authenticated REST APIs.',
    description:
      'A full-stack analytics platform built with React and Python. Exposes REST APIs with user authentication, and queries uploaded datasets to generate on-demand insights.',
    tech: ['React', 'TypeScript', 'Python', 'REST'],
    projectUrl: 'https://github.com/Aadharbindal/Data_Analytical_Platform',
    liveUrl: 'https://numerate-analytics.vercel.app',
    featured: true,
    context: 'Personal project',
    role: 'Sole developer',
    problem:
      'Exploring a new dataset usually means opening a notebook, writing boilerplate to load it, and rewriting the same aggregation code every time. I wanted a workspace where the dataset itself is the starting point and questions can be asked directly against it.',
    approach: [
      'Built the frontend in React and TypeScript as an analytics workspace rather than a dashboard — the dataset is uploaded first, and the interface is shaped around querying it.',
      'Designed a Python backend exposing REST endpoints for upload, query and insight generation.',
      'Added user authentication so uploaded datasets and query history stay scoped to their owner.',
      'Validated every endpoint with Postman before wiring it to the interface, so backend behaviour was confirmed independently of the UI.',
    ],
    outcome: [
      'Uploaded datasets can be queried for insights on demand, without writing analysis code.',
      'Deployed and publicly reachable, so the whole flow can be tried end to end.',
    ],
    learned:
      'Designing an API before the interface changed how I build. Confirming each endpoint in isolation meant that when the UI misbehaved, I already knew the problem was in the UI.',
  },
  {
    slug: 'house-price-prediction',
    title: 'House Price Prediction',
    summary:
      'Property valuation across 20 Indian cities, driven by a Gradient Boosting model at an R² of 0.948 and served through a REST API.',
    description:
      'Property valuation across 20 Indian cities using a Gradient Boosting Regressor at an R² of 0.948, served through a Node.js and Express REST API with an interactive dashboard.',
    tech: ['Node.js', 'Express', 'scikit-learn', 'Python'],
    projectUrl: 'https://github.com/Aadharbindal/House_Price_Prediction',
    liveUrl: 'https://house-price-prediction-w1j9.onrender.com',
    featured: true,
    context: 'Personal project',
    role: 'Sole developer',
    problem:
      'Property price estimates in India vary enormously between cities and between localities inside the same city. A single national model flattens that variation and produces estimates nobody trusts.',
    approach: [
      'Trained a Gradient Boosting Regressor on a dataset of over 100,000 records spanning 20 major Indian cities and 262 localities, so micro-market differences are represented rather than averaged away.',
      'Served the model behind a Node.js and Express REST API, keeping the Python training pipeline separate from the request path.',
      'Built an interactive dashboard showing average city rates and a feature-importance breakdown, so an estimate comes with a reason rather than just a number.',
      'Added a JSON file-system fallback so the app runs locally without a MySQL instance configured.',
    ],
    outcome: [
      'Validation R² of 0.948 across the 20-city dataset.',
      'Pan-India coverage — 20 cities, 262 active localities.',
      'Deployed and usable in the browser, seeded with 8,000+ historical predictions for instant analytics views.',
    ],
    learned:
      'The model was the easy half. Making predictions explainable — surfacing which features drove an estimate — is what turned a script into something a person would actually use.',
  },
  {
    slug: 'rockfall-prediction',
    title: 'Rockfall Prediction (AI/ML)',
    summary:
      'An AI-driven model that predicts rockfall risk on open-pit mine slopes from geological data, so hazards are caught before they happen.',
    description:
      'An AI-driven rockfall prediction model trained on geological datasets, using data preprocessing and model optimisation to improve accuracy on high-risk events and enable proactive site safety.',
    tech: ['Python', 'Machine Learning', 'JavaScript'],
    projectUrl: 'https://github.com/Aadharbindal/AI-Rockfall-Prediction-System',
    context: 'Team project',
    problem:
      'Rockfall on open-pit mine slopes threatens both workers and equipment, and monitoring is typically reactive — the hazard is recorded once it has already happened.',
    approach: [
      'Built a prediction model over geological datasets to score slope risk ahead of a failure event.',
      'Ran a preprocessing pass over the raw geological data, since real-world sensor and survey data is uneven and incomplete.',
      'Optimised the model specifically for accuracy on high-risk events — the rare cases are the ones that matter, and overall accuracy hides them.',
    ],
    outcome: [
      'Risk is scored proactively rather than recorded after the fact.',
      'Predictive analytics feeding site safety and infrastructure protection decisions.',
    ],
    learned:
      'Optimising for overall accuracy is the wrong target when the rare class is the dangerous one. Tuning for high-risk recall mattered far more than the headline score.',
  },
  {
    slug: 'industrial-control-dashboard',
    title: 'Industrial Control Dashboard',
    summary:
      'A dense, real-time operator console for an industrial control system — the kind of screen that sits on a plant floor for a full shift.',
    description:
      'A dense, real-time operator interface for industrial control systems — live telemetry panels, a facility node map and role-based login, tuned for long shifts in a control room.',
    tech: ['React 19', 'Vite', 'Lucide'],
    projectUrl: 'https://github.com/Aadharbindal/industrial-control-dashboard',
    liveUrl: 'https://Aadharbindal.github.io/industrial-control-dashboard/',
    context: 'Interface concept',
    role: 'Sole developer',
    problem:
      'Control-room screens have to carry a lot of live information at once. Most dashboard designs get airy and readable by showing very little — which is the opposite of what an operator needs.',
    approach: [
      'Designed a dense single-view console: system core panel, live uptime and build hash, a facility map with active equipment nodes, and alert and diagnostics modules.',
      'Built a login flow with role selection — System Engineer, Operator, Supervisor — and a simulated biometric scan step.',
      'Tuned the dark theme and vignette treatment for readability over a long shift rather than for a screenshot.',
    ],
    outcome: [
      'A working interface concept, deployed and explorable in the browser.',
      'Live values tick in real time so the screen behaves like a real console.',
    ],
    learned:
      'Information density and legibility pull against each other. Getting both meant treating type scale, spacing and colour contrast as one system rather than styling each panel on its own.',
    note: 'This is a frontend concept — telemetry values are simulated in the browser, with no backend or live equipment feed behind it.',
  },
  {
    slug: 'dsa-cpp',
    title: 'DSA in C++',
    summary:
      'Data structures and algorithms in C++, worked through topic by topic — from language fundamentals to recursion and backtracking.',
    description:
      'Lecture-by-lecture implementations of data structures and algorithms in C++ — sorting, searching, pointers and memory, recursion and backtracking, with LeetCode solutions alongside.',
    tech: ['C++', 'Algorithms'],
    projectUrl: 'https://github.com/Aadharbindal/dsa-programs',
    context: 'Ongoing practice',
    problem:
      'Interview preparation tends to become a pile of disconnected solved problems. I wanted the material organised by topic so the underlying technique is visible, not just the answer.',
    approach: [
      'Worked through the material topic by topic — fundamentals, arrays and vectors, searching, sorting, pointers and memory, recursion and backtracking.',
      'Kept each file self-contained and runnable, so any single technique can be revisited on its own.',
      'Wrote LeetCode problems in the class Solution form, so a solution can go straight to the judge unmodified.',
    ],
    outcome: [
      '36 C++ implementations spanning the full progression from I/O basics to backtracking.',
      'Indexed by topic in the repository README, so a specific technique is one lookup away.',
    ],
    learned:
      'Writing sorting and recursion from scratch, rather than reaching for the standard library, is what made the complexity trade-offs stick.',
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export default projects;
