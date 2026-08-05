import { FaLinkedin, FaGithub } from "react-icons/fa";

export const resumeData = {
  name: "Rohit Makwana",
  title: "React Native Developer",
  experienceYears: "2.5+",
  contact: {
    phone: "+91 9173493449",
    email: "makawanarohit70@gmail.com",
    linkedin: "linkedin.com/in/makwana-rohit",
    linkedinUrl: "https://www.linkedin.com/in/makwana-rohit",
    location: "Ahmedabad, India",
  },
  summary:
    "React Native Developer with 2.5+ years of experience in building cross-platform mobile apps for Android and iOS. Skilled in JavaScript, TypeScript, React Native, Node.js, NestJS, Express.js, .NET, and PostgreSQL. Strong in creating responsive UIs, managing offline local storage (SQLite, AsyncStorage), REST API integration, and performance optimization. Focused on writing clean code and delivering smooth user experiences.",
  experience: [
    {
      role: "React Native Developer",
      company: "Alpha ERP Solutions Pvt. Ltd.",
      date: "12/2023 - Present",
      location: "Ahmedabad, India",
      duties: [
        "Built and maintained cross-platform mobile apps for Android and iOS using React Native CLI.",
        "Developed complex business logic for core modules like Sales, Quotation, and Billing in the JSoft Extreme and Payroll products.",
        "Created and integrated custom Native Modules to extend React Native functionality.",
        "Implemented SQLite for efficient offline data storage and seamless data synchronization.",
        "Integrated WebView to embed dynamic web content within native screens.",
        "Improved app performance and reduced load time by optimizing rendering and memory usage.",
        "Troubleshot and resolved complex UI and logic bugs, improving overall app reliability and stability.",
        "Developed and consumed RESTful APIs built with .NET, NestJS, and Express.js with reference-based architecture for mobile data handling.",
      ],
    },
    {
      role: "React.js Intern",
      company: "TatvaSoft",
      date: "05/2023 - 07/2023",
      location: "Ahmedabad, India",
      duties: [
        "Built dynamic UIs with React.js and managed complex state architectures using Redux.",
        "Gained hands-on experience in API integration, modern CSS, and component-driven architecture.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering (IT)",
      school: "LDRP Institute of Technology and Research",
      date: "2020 - 2024",
      location: "Gandhinagar, India",
    },
    {
      degree: "Higher Secondary (GSEB)",
      school: "Krishna Science School",
      date: "2018 - 2020",
      location: "Keshod, India",
    },
  ],
  languages: [
    { name: "Gujarati", level: "Native", proficiency: 5 },
    { name: "Hindi", level: "Proficient", proficiency: 4 },
    { name: "English", level: "Proficient", proficiency: 4 },
  ],
  skills: [
    { category: "Mobile Development", tools: "React Native, Expo, React Native CLI, Android & iOS" },
    {
      category: "Frontend Technologies",
      tools: "React.js, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5/CSS3",
    },
    { category: "Backend Technologies", tools: "Node.js, Express.js, NestJS, .NET" },
    { category: "Databases & Storage", tools: "PostgreSQL, MongoDB, MySQL, SQLite, SSMS" },
    { category: "Tools & Cloud", tools: "GitHub, Postman, VS Code, Xcode, Firebase, REST APIs" },
  ],
  courses: [
    {
      provider: "Meta (Coursera)",
      subjects: ["React Native", "Android Development", "Working with Data"],
    },
    { provider: "NPTEL", subjects: ["Programming in Java"] },
  ],
  projects: [
    {
      name: "Fincast – Financial Forecasting App",
      description:
        "Fincast is a smart financial forecasting app that predicts future expenses based on your income and spending habits. It helps users stay on budget and achieve financial goals.",
      link: "https://play.google.com/store/apps/details?id=com.sasvat.fincast",
      linkText: "Fincast Play Store",
      image: "fincast",
      tech: ["React Native", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      name: "Trinity Parking Solution",
      description:
        "A smart parking management app for businesses to track vehicle entries, manage payments, and generate real-time reports. It supports flexible fees and multiple payment options.",
      link: "https://play.google.com/store/apps/details?id=com.parkingsolution",
      linkText: "Trinity Parking",
      image: "parking",
      tech: ["React Native", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      name: "Fitness & Wellness App",
      description:
        "A comprehensive wellness application to maintain mental and physical health featuring guided meditation with high-definition audio and customized workout routines for all fitness levels.",
      image: "fitness",
      tech: ["React Native", "Audio APIs", "Health APIs", "Tailwind CSS"],
    },
  ],
  onlineProfiles: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/makwana-rohit/",
      icon: FaLinkedin,
    },
    {
      platform: "GitHub",
      url: "https://github.com/makwanarohit7",
      icon: FaGithub,
    },
  ],
};