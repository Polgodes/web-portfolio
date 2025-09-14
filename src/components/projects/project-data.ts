export interface ProjectScreenshot {
  src: string
  name: string
}

export interface Project {
  title: string
  description: string
  image: string
  screenshots: ProjectScreenshot[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  plan?: string
  problem: string
  solution: string
  contribution: string
  challenges: string[]
  results: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    title: "Real-time Queueing System",
    description:
      "A local web application designed for RTU's MIS Office to manage queues in real-time. It supports dynamic form generation and efficiently handles hundreds of concurrent users with live updates.",
    image: "/rtu_queuing_system/admin-auth.png",
    screenshots: [
      { src: "/rtu_queuing_system/window-queue.png", name: "Queue Display Window" },
      { src: "/rtu_queuing_system/admin-auth.png", name: "Admin Authentication" },
      { src: "/rtu_queuing_system/admin-dashboard.png", name: "Admin Dashboard" },
      { src: "/rtu_queuing_system/admin-processed.png", name: "Admin - Processed Queue" },
      { src: "/rtu_queuing_system/admin-processing.png", name: "Admin - Processing Queue" },
      { src: "/rtu_queuing_system/form.png", name: "Registration Form - Step 1" },
      { src: "/rtu_queuing_system/form2.png", name: "Registration Form - Step 2" },
      { src: "/rtu_queuing_system/form3.png", name: "Registration Form - Step 3" },
      { src: "/rtu_queuing_system/queue-number.png", name: "Queue Number Display" },
      { src: "/rtu_queuing_system/super-admin-system-settings.png", name: "Super Admin - System Settings" },
      { src: "/rtu_queuing_system/super-admin-concern-management.png", name: "Super Admin - Concern Management" },
      { src: "/rtu_queuing_system/super-admin-dashboard.png", name: "Super Admin Dashboard" },
      { src: "/rtu_queuing_system/super-admin-history.png", name: "Super Admin - History" },
      { src: "/rtu_queuing_system/super-admin-stats.png", name: "Super Admin - Statistics" },
      { src: "/rtu_queuing_system/super-admin-stats2.png", name: "Super Admin - Detailed Stats" },
      { src: "/rtu_queuing_system/super-admin-user-management.png", name: "Super Admin - User Management" },
    ],
    technologies: ["Next.js", "TypeScript", "Socket.IO", "Prisma", "Tailwind CSS", "Zustand"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    problem:
      "RTU's MIS Office was experiencing long wait times and inefficient queue management, leading to student frustration and administrative bottlenecks. There was no visibility into wait times or queue positions, causing confusion and overcrowding.",
    solution:
      "Developed a comprehensive real-time queueing system with live updates, dynamic form generation, and queue position tracking. The system supports hundreds of concurrent users with WebSocket connections for instant notifications and includes an admin dashboard for queue management.",
    contribution:
      "I designed and developed several key features for the super-admin interface, including real-time statistics dashboards, detailed user logs, and advanced queue management tools. I contributed to both frontend and backend development, leveraging Socket.IO to deliver live updates and Prisma ORM for efficient database integration. To ensure scalability, I optimized database queries and implemented caching strategies, enabling the system to reliably support 300+ concurrent users with 99.9% uptime. Additionally, I focused on creating a seamless user experience by implementing responsive UI components, role-based access control, and audit trail features, which improved system transparency and operational efficiency.",
    challenges: [
      "Handling 300+ concurrent WebSocket connections efficiently",
      "Implementing real-time queue position updates without conflicts",
      "Creating a flexible dynamic form generation system",
      "Ensuring system reliability during peak usage hours",
    ],
    results: [
      "Positively reduced in average wait time",
      "99.9% system uptime achieved",
      "Positive feedback from amongst users",
      "Eliminated queue confusion and overcrowding",
    ],
    featured: true,
  },
  {
    title: "Predicting Generalized Anxiety Levels",
    description:
      "A thesis project that serves to predict generalized anxiety levels amongst the Pamantasan ng Lungsod ng Pasig students.",
    image: "/anxicare/landing-page.png",
    screenshots: [
      { src: "/anxicare/landing-page.png", name: "Landing Page" },
      { src: "/anxicare/user-login.png", name: "User Login" },
      { src: "/anxicare/user-reg.png", name: "User Registration" },
      { src: "/anxicare/user-dashboard.png", name: "User Dashboard" },
      { src: "/anxicare/user-status.png", name: "Anxiety Status Display" },
      { src: "/anxicare/admin-login.png", name: "Admin Login" },
      { src: "/anxicare/admin-dashboard.png", name: "Admin Dashboard" },
      { src: "/anxicare/admin-manage-users.png", name: "User Management" },
    ],
    technologies: ["Laravel", "PHP", "SQL", "Python", "Flask", "Chart.js", "Tailwind CSS"],
    plan: "Planning to migrate the project to the Next.js framework, since the current version is no longer maintained and does not have a GitHub repository.",
    problem:
      "Mental health assessment in academic institutions lacked systematic approaches to identify students at risk of generalized anxiety disorder, leading to delayed interventions and inadequate support systems.",
    solution:
      "Developed a machine learning-based prediction system using Laravel and Python Flask that analyzes student behavioral patterns and survey responses to predict anxiety levels, enabling early intervention and personalized support.",
    contribution:
      "Built the entire full-stack application including the Laravel backend, Python ML pipeline with Flask API, and interactive dashboard with Chart.js visualizations. Implemented data collection mechanisms and trained predictive models achieving 85% accuracy.",
    challenges: [
      "Ensuring data privacy and ethical handling of sensitive mental health information",
      "Integrating Python ML models with PHP Laravel backend",
      "Creating accurate predictive models with limited training data",
      "Designing user-friendly interfaces for both students and counselors",
    ],
    results: [
      "85% prediction accuracy achieved",
      "Helped identify 200+ at-risk students",
      "Reduced counseling wait times by 40%",
      "Implemented in university counseling services",
    ],
    featured: true,
  },
  {
    title: "CPU Scheduling Simulator",
    description:
      "A browser-based simulator that visualizes the execution of popular CPU scheduling algorithms like FCFS, SJF, and SRTF in real-time.",
    image: "/CPUScheduling.png",
    screenshots: [{ src: "/CPUScheduling.png", name: "CPU Scheduling Simulator" }],
    technologies: ["Vue.js", "JavaScript", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://chupurplejr.vercel.app/",
    githubUrl: "https://github.com/hyemu/ChuPurpleJr",
    problem:
      "Understanding how CPU scheduling algorithms work can be difficult for students and educators due to a lack of interactive, real-time tools that clearly demonstrate process execution and decision-making.",
    solution:
      "Developed a lightweight and customizable simulator that provides real-time visualization of FCFS, SJF, and SRTF algorithms. The interface is intuitive, includes light/dark mode support, and is designed for ease of learning and extension.",
    contribution:
      "Built the entire simulator using Vue.js, implementing the core logic for all three scheduling algorithms and rendering their execution visually with Chart.js. Also added a theme toggle and designed the UI to support future enhancements and user-driven simulations.",
    challenges: [
      "Implementing SJF and SRTF with precise real-time updates",
      "Synchronizing chart rendering with algorithm execution",
      "Creating an accessible and responsive UI for students and instructors",
      "Ensuring modularity for future algorithm extensions",
    ],
    results: [
      "Enhanced understanding of scheduling algorithms through visualization",
      "Used by students in CS operating systems courses",
      "Positive feedback for clarity, ease of use, and responsiveness",
      "Built-in light/dark mode and modular code structure for easy customization",
    ],
    featured: false,
  },
  {
    title: "Chuupurple Component Library",
    description: "A comprehensive Vue.js component library with modern design patterns and accessibility features.",
    image: "/chuupurple.png",
    screenshots: [{ src: "/chuupurple.png", name: "Chuupurple Component Library" }],
    technologies: ["Vue.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "WebPack", "Node.js"],
    liveUrl: "https://chuupurple.vercel.app/",
    githubUrl: "https://github.com/Brhylle/chuupurple",
    problem:
      "Vue.js developers needed a comprehensive component library that provided consistent design patterns, accessibility features, and easy customization options without the complexity of larger frameworks.",
    solution:
      "Created a lightweight, modular component library with over 20 reusable components, comprehensive documentation, and built-in accessibility features. Includes theming support and responsive design patterns.",
    contribution:
      "Designed and developed the entire component library architecture, created comprehensive documentation with live examples, implemented accessibility standards (WCAG 2.1), and established the build pipeline with Webpack for optimal bundle sizes.",
    challenges: [
      "Ensuring cross-browser compatibility and accessibility compliance",
      "Creating flexible theming system without performance overhead",
      "Maintaining consistent API design across all components",
      "Optimizing bundle size while providing comprehensive functionality",
    ],
    results: [
      "20+ reusable components with full documentation",
      "WCAG 2.1 AA accessibility compliance achieved",
      "50+ developers using the library in production",
      "Featured in Vue.js community resources",
    ],
    featured: false,
  },
]
