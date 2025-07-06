import { FaLinkedin, FaGithub } from "react-icons/fa";

export const resumeData = {
  name: "Rohit Makwana",
  title: "React Native Developer",
  contact: {
    phone: "+91 9173493449",
    email: "makawanarohit70@gmail.com",
    linkedin: "linkedin.com/in/makwana-rohit",
    linkedinUrl: "https://www.linkedin.com/in/makwana-rohit",
    location: "Ahmedabad, India",
  },
  summary:
    "React Native Developer with 1.5+ years of experience in building cross-platform mobile apps for Android and iOS. Skilled in JavaScript, TypeScript, Firebase, and REST API integration. Strong in creating responsive UIs, managing local storage (SQLite, AsyncStorage), and performance optimization. Focused on writing clean code and delivering smooth user experiences.",
  experience: [
    {
      role: "React Native Developer",
      company: "Alpha-e Barcode Solutions Pvt. Ltd.",
      date: "12/2023 - Present",
      location: "Ahmedabad, India",
      duties: [
        "Built and maintained cross-platform mobile apps for Android and iOS using React Native CLI.",
        "Developed complex business logic for modules like Sales, Quotation, and Billing in the JSoft Extreme and Payroll products.",
        "Created and integrated custom Native Modules to extend React Native functionality.",
        "Implemented SQLite for efficient offline data storage and seamless synchronization.",
        "Integrated WebView to embed dynamic web content within native screens.",
        "Improved app performance and reduced load time by optimizing rendering and memory usage.",
        "Troubleshot and resolved complex UI and logic bugs, improving reliability and stability.",
        "Developed simple RESTful APIs using .NET with reference-based architecture for mobile data handling.",
      ],
    },
    {
      role: "React.js Intern",
      company: "TatvaSoft",
      date: "05/2023 - 07/2023",
      location: "Ahmedabad, India",
      duties: [
        "Built dynamic UIs with React.js and managed state using Redux.",
        "Gained hands-on experience in API integration and component architecture.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering (IT)",
      school: "LDRP Institute of Technology and Research",
      date: "2020 - 2024",
      location: "Gandhinagar",
    },
    {
      degree: "Higher Secondary (GSEB)",
      school: "Krishna Science School",
      date: "2018 - 2020",
      location: "Keshod",
    },
  ],
  languages: [
    { name: "Gujarati", level: "Native", proficiency: 5 },
    { name: "Hindi", level: "Proficient", proficiency: 4 },
    { name: "English", level: "Proficient", proficiency: 4 },
  ],
  skills: [
    { category: "Mobile", tools: "React Native" },
    {
      category: "Frontend",
      tools: "React.js, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS",
    },
    { category: "Backend", tools: "Node.js, Express.js" },
    { category: "Databases", tools: "MySQL, MongoDB, PostgreSQL, SSMS" },
    { category: "Tools", tools: "GitHub, Postman, VS Code, Xcode, Firebase" },
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
      linkText: "Fincast",
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
      name: "Fitness App",
      description:
        "It is used to maintain our mental and physical health and also Such features like meditation with sound and different workout modes for different body parts.",
      image: "fitness",
      tech: ["React Native", "Audio APIs", "Health APIs"],
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