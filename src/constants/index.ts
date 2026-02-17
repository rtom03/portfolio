const projects = [
  {
    title: "Rackspace Technology",
    description:
      "Epic software makes it possible for every patient to have a single, comprehensive medical record that informs and is informed by their health experiences.",
    tech: ["React", "TailwindCss", "MongoDB", "Stripe", "teraform", "Python"],
    image: "./epic.png",
    fullDescription:
      "SaaS Optimization & Deployment: Analyzed business processes to identify suitable SaaS solutions, led customization and deployment of secure, scalable, and cost-efficient SaaS applications, and optimized integrations within a multicloud environment to reduce operational costs while improving reliability, accessibility, and user experience.",
    liveLink: "https://docs.rackspace.com/",
    githubLink: "https://github.com/rackspace",
  },
  {
    title: "HomeAway",
    description:
      "A fast-growing rental platform startup that connects property owners and renters through a secure, scalable, and user-friendly booking and management system.",
    tech: ["React", "Firebase", "Tailwind CSS", "springboot", "jenkins"],
    image: "/paxos.png",
    fullDescription:
      "Built and maintained user-facing web applications for a large-scale vacation rental platform using React, Redux, and TypeScript, delivering responsive, accessible, and high-performance interfaces. Collaborated with backend teams to integrate RESTful APIs for booking, payments, and listings, while migrating legacy AngularJS code to modern React patterns to reduce technical debt. Supported CI/CD pipelines and automated testing with Jenkins and Cypress, significantly improving release speed, stability, and deployment reliability.",
    liveLink: " http://www.homeaway.com",
    githubLink: "https://github.com/homeaway",
  },
];
const experience = [
  {
    title: "Senior Fullstack Developer",
    company: "Rackspace technology.",
    period: "2022 - Present",
    description:
      "SaaS Optimization & Deployment: Analyzed business processes to identify suitable SaaS solutions, led customization and deployment of secure, scalable, and cost-efficient SaaS applications, and optimized integrations within a multicloud environment to reduce operational costs while improving reliability, accessibility, and user experience.",
  },
  {
    title: "Fullstack Developer",
    company: "HomeAway",
    period: "2020 - 2022",
    description:
      "Built and maintained user-facing web applications for a large-scale vacation rental platform using React, Redux, and TypeScript, delivering responsive, accessible, and high-performance interfaces. Collaborated with backend teams to integrate RESTful APIs for booking, payments, and listings, while migrating legacy AngularJS code to modern React patterns to reduce technical debt. Supported CI/CD pipelines and automated testing with Jenkins and Cypress, significantly improving release speed, stability, and deployment reliability.",
  },
];
const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Angular",
      "Vue",
      "Tailwind CSS",
      "Blade",
      "Svelte",
      "Nuxt",
      "RxJS",
      "SCSS",
      "useQuery",
      "Redux- Thunk/Saga",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js (Express)",
      "NestJs",
      ".Net",
      "Django",
      "FastAPI",
      "Laravel",
      "SpringBoot",
      "Asp.Net",
      "PostgreSQL (prisma)",
      "Mysql",
      "MongoDb (mongoose)",
    ],
  },
  {
    category: "Core Competency",
    items: [
      "Responsive Web Design",
      "Progressive Web Apps (PWAs)",
      "WebComponents",
      "WebAssembly",
      "Microservices Architecture",
      "Event-Driven Architecture",
      "RestFul API - gRPC - GrapgQl",
      "Serverless Architecture",
      "API Gateway",
      "WebSockets",
      "Agile Methodologies (Scrum, Kanban)",
    ],
  },
  {
    category: "Test & Automation",
    items: [
      "Jest",
      "Mocha",
      "Chai",
      "Selenium",
      "Cypress",
      "Jasmine",
      "Karma",
      "Unit Testing",
      "E2E Testing",
      "Integration Testing",
    ],
  },
];
export { projects, skills, experience };
