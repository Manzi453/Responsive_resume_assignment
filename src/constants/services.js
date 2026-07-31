import { FaGlobe, FaLandmark, FaServer, FaMobile, FaRobot, FaTerminal } from 'react-icons/fa';

// `register` drives the color system: 'business' (ochre) for client-facing
// work, 'technical' (sage) for build/AI-facing work — see the redesign's
// color-usage rules in shared/index.jsx.
export const SERVICES = [
  {
    icon: FaGlobe,
    title: 'Web Application Development',
    description: 'Custom, responsive web apps built with React, Next.js, and Tailwind CSS — from marketing sites to interactive dashboards.',
    deliverables: ['Responsive, production-ready frontend', 'Component-driven architecture', 'Performance & SEO best practices'],
    startingAt: 'Custom quote — scope-based',
    register: 'business',
  },
  {
    icon: FaLandmark,
    title: 'Corporate & Business Websites',
    description: 'Professional websites for companies and advisory firms that need a credible digital presence — the same work built and maintained for RG Partners and its affiliates.',
    deliverables: ['Brand-consistent design', 'Multi-page structure & content sections', 'Ongoing maintenance & updates'],
    startingAt: 'Custom quote — scope-based',
    register: 'business',
  },
  {
    icon: FaServer,
    title: 'Backend & API Development',
    description: 'Secure, well-structured backend services and REST APIs using Node.js/Express or Java Spring Boot with PostgreSQL.',
    deliverables: ['RESTful API design', 'Authentication & authorization (JWT)', 'Database schema & integration'],
    startingAt: 'Custom quote — scope-based',
    register: 'technical',
  },
  {
    icon: FaMobile,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps built with Flutter, from concept to deployment on Android, iOS, and web.',
    deliverables: ['Cross-platform Flutter builds', 'Firebase backend integration', 'Real-time data sync'],
    startingAt: 'Custom quote — scope-based',
    register: 'technical',
  },
  {
    icon: FaRobot,
    title: 'Data & Machine Learning Solutions',
    description: 'ML pipelines and model-serving APIs — from data preprocessing to deployment, containerized and load-tested.',
    deliverables: ['Model training & evaluation', 'FastAPI/Streamlit serving layer', 'Docker containerization'],
    startingAt: 'Custom quote — scope-based',
    register: 'technical',
  },
  {
    icon: FaTerminal,
    title: 'Automation & DevOps',
    description: 'Scripts and workflows that cut manual ops work — backups, monitoring, and deployment automation for Linux environments.',
    deliverables: ['Bash automation scripts', 'CI/CD pipeline setup', 'System monitoring & backups'],
    startingAt: 'Custom quote — scope-based',
    register: 'technical',
  },
];

export default SERVICES;
