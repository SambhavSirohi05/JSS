// Comprehensive Resume Data for AI Training
export const resumeData = {
  personalInfo: {
    name: "Sambhav Sirohi",
    location: "Delhi, India",
    email: "sambhavsirohi05@gmail.com",
    linkedin: "https://www.linkedin.com/in/sambhav-sirohi-49330516b/",
    github: "https://github.com/SambhavSirohi05",
    twitter: "https://x.com/Retr06421",
    portfolio: "https://sambhavsirohi.vercel.app",
    currentRole: "B.Tech IT Student",
    university: "J.S.S. Academy of Technical Education, Noida"
  },

  education: [
    {
      period: "Oct 2023 – Present",
      degree: "B. Tech IT",
      institution: "J.S.S. Academy of Technical Education",
      location: "Noida",
      status: "Currently pursuing"
    },
    {
      period: "Mar 2023",
      degree: "Class 12th - CBSE Board",
      institution: "Seth Anandram Jaipuria School",
      location: "Ghaziabad",
      status: "Completed"
    },
    {
      period: "Mar 2021",
      degree: "Class 10th - CBSE Board", 
      institution: "Seth Anandram Jaipuria School",
      location: "Ghaziabad",
      status: "Completed"
    }
  ],

  projects: [
    {
      name: "AI Portfolio",
      subtitle: "Interactive AI-Powered Personal Portfolio",
      description: "Built a minimalist personal portfolio that uses AI to autonomously answer user and client queries about skills, projects, and experience.",
      keyFeatures: [
        "AI-powered autonomous responses using Groq API",
        "Ultra-fast, low-latency LLM inference for real-time interactions",
        "Vercel deployment with automated CI/CD through GitHub Actions",
        "Clean, glassmorphic React frontend with gradient backgrounds",
        "Modular architecture for future AI feature expansion"
      ],
      techStack: ["JavaScript", "React.js", "TailwindCSS", "Groq API", "GitHub Actions", "Vercel"],
      problemSolved: "Creating an interactive portfolio that can autonomously handle client queries and showcase skills",
      impact: "Enables real-time client interaction and reduces manual response time",
      liveLink: "https://sambhavsirohi.vercel.app",
    },
    {
      name: "AuthentiFi",
      subtitle: "Blockchain-based Credential Verification Platform",
      description: "Built a Web3 platform where universities can issue verified certificates as soulbound NFTs, ensuring authenticity and preventing forgery.",
      keyFeatures: [
        "Soulbound NFT issuance for non-transferable certificates",
        "Frontend marketplace-style interface for credential showcase",
        "Real-time on-chain verification for employers",
        "Wallet-based identity integration",
        "Ethereum smart contracts implementation"
      ],
      techStack: ["JavaScript", "React.js", "Solidity", "Ether.js", "TailwindCSS"],
      problemSolved: "Fake degree certificates and slow verification processes in academic and hiring ecosystems",
      impact: "Prevents credential fraud and enables instant verification of academic achievements",
      liveLink: "https://authentifi.vercel.app",
    },
    {
      name: "Chainlings Arena",
      subtitle: "Multiplayer Crypto Trading Game",
      description: "Developed a real-time competitive gaming platform featuring live crypto price tracking, automated scoring, and dynamic leaderboards with tiered reward distribution.",
      keyFeatures: [
        "Real-time crypto price tracking using CoinGecko API",
        "Automated scoring and dynamic leaderboards",
        "Tiered reward distribution system",
        "Secure JWT authentication",
        "Serverless backend architecture on Vercel",
        "MongoDB Atlas for data persistence",
        "Smooth animations with Framer Motion"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS", "Framer Motion", "CoinGecko API", "Vercel"],
      problemSolved: "Creating engaging educational tools for crypto trading with competitive elements",
      impact: "Provides interactive learning experience for crypto trading concepts",
      liveLink: "https://chainlings-arena.vercel.app",
    }
  ],

  technicalSkills: {
    frontend: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "Framer Motion", "Responsive Design"],
    backend: ["Node.js", "Express.js", "RESTful API", "JWT Authentication"],
    blockchain: ["Solidity", "Ether.js", "Smart Contract Development"],
    databases: ["MongoDB", "Database Design", "Data Modeling"],
    developerTools: ["Git/GitHub", "GitHub Actions", "CI/CD"],
    aiMl: ["Large Language Models (LLM)", "AI Integration", "Real-time Processing"]
  },

  extracurricularActivities: [
    {
      organization: "Quanta - Electronics and Communication Society",
      role: "Member",
      responsibilities: [
        "Planning and organizing society activities and technical events for student engagement",
        "Mentoring in Embedded and Robotics workshops",
        "Conducting sessions on Arduino Programming, sensor interfacing, and basic electronics",
        "Assisting in workshop logistics and participant interaction",
        "Real-time troubleshooting and debugging support"
      ],
      impact: "Enhanced student engagement in technical activities and provided hands-on learning opportunities"
    }
  ],

  achievements: [
    "Successfully built and deployed 3 major full-stack projects",
    "Integrated AI capabilities into portfolio for autonomous client interaction",
    "Developed blockchain-based solution for credential verification",
    "Created real-time multiplayer gaming platform with crypto integration",
    "Active member of technical society with mentoring responsibilities"
  ],

  interests: [
    "AI/ML Integration",
    "Blockchain Technology", 
    "Web3 Development",
    "Full-stack Development",
    "Real-time Applications",
    "Technical Mentoring"
  ]
};

// Helper functions for AI responses
export const getProjectDetails = (projectName) => {
  return resumeData.projects.find(project => 
    project.name.toLowerCase().includes(projectName.toLowerCase()) ||
    project.subtitle.toLowerCase().includes(projectName.toLowerCase())
  );
};

export const getSkillsByCategory = (category) => {
  return resumeData.technicalSkills[category] || [];
};

export const getAllSkills = () => {
  return Object.values(resumeData.technicalSkills).flat();
};

export const getEducationTimeline = () => {
  return resumeData.education;
};

export const getProjectTechStack = (projectName) => {
  const project = getProjectDetails(projectName);
  return project ? project.techStack : [];
};
