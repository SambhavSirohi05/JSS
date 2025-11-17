// Faculty Data for JSS Academy of Technical Education - IT Department

export const facultyData = [
  {
    id: 1,
    name: "Dr. Lavkush Sharma",
    designation: "Professor",
    department: "Information Technology",
    email: "hodit@jssaten.ac.in",
    phone: "+91-7078221008",
    image: "/faculty/lavkush-sharma.jpg", // Placeholder

    experience: {
      teaching: 21,
      industry: 0,
      research: 15
    },

    qualifications: [
      { degree: "Ph.D", specialization: "Computer Science & Engineering", year: 2025, institution: "NIT Patna" },
      { degree: "Ph.D", specialization: "Computer Science & Engineering", year: 2013, institution: "S N University" },
      { degree: "M.Tech", specialization: "Computer Science & Engineering", year: 2009, institution: "NIET, UPTU" },
      { degree: "B.Tech", specialization: "Computer Science & Engineering", year: 2004, institution: "AEC, UPTU" }
    ],

    publications: {
      scie: 2,
      webOfScience: 2,
      scopus: 5,
      otherJournals: 6,
      conferences: 10,
      bookChapters: 1,
      books: 1
    },

    researchAreas: [
      "Deep Learning for Natural Languages",
      "Protein Function Prediction",
      "Machine Learning",
      "Cybersecurity",
      "Blockchain Technology"
    ],

    patents: [
      {
        title: "Blockchain based Secure Data Sharing Method for Distributed System",
        status: "Published",
        applicationNo: "202441093777 A"
      },
      {
        title: "Intelligent Cybersecurity Defense Systems using Federated Learning for Collaborative Threat Detection and Mitigation",
        status: "Published",
        applicationNo: "202521034657 A"
      }
    ],

    awards: [
      "Cleared UGC NET November 2017 Examination in Computer Science and Applications"
    ],

    projectsGuided: {
      phd: 0,
      masters: 5,
      bachelors: 50
    },

    memberships: [
      "Institution of Engineers (India) - AMIE (AM099534-5)"
    ],

    notablePublications: [
      {
        title: "A CNN-CBAM-BIGRU Model for Protein Function Prediction",
        journal: "Statistical Applications in Genetics and Molecular Biology",
        year: 2024,
        type: "SCIE",
        impactFactor: 1.7
      },
      {
        title: "A Novel Hybrid CNN and BiGRU-Attention Based Deep Learning Model for Protein Function Prediction",
        journal: "Statistical Applications in Genetics and Molecular Biology",
        year: 2023,
        type: "SCIE",
        impactFactor: 1.7
      }
    ]
  },

  {
    id: 2,
    name: "Ms. Charu Awasthi",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "charu.awasthi@jssaten.ac.in",
    phone: "8506949789",
    image: "/faculty/charu-awasthi.jpg", // Placeholder
    joiningDate: "27-01-2023",

    experience: {
      teaching: 9,
      industry: 0,
      research: 0
    },

    qualifications: [
      { degree: "Ph.D", specialization: "FOG Computing", status: "Pursuing", institution: "Poornima University" },
      { degree: "M.Tech", specialization: "Computer Science", year: 2015, institution: "SSSIST, Sehore, RGPV" },
      { degree: "B.Tech", specialization: "Computer Science and Engineering", year: 2008, institution: "PSIT Kanpur, AKTU" }
    ],

    publications: {
      webOfScience: 1,
      scopus: 2,
      otherJournals: 1,
      conferences: 2,
      bookChapters: 3
    },

    researchAreas: [
      "Fog Computing",
      "Cloud Computing",
      "Internet of Things (IoT)",
      "Wireless Sensor Networks",
      "5G Mobile Networks",
      "Machine Learning"
    ],

    patents: [
      {
        title: "Methods and System for improving wireless sensor network using fault imitation Technology",
        status: "Granted",
        country: "Australian Patent"
      },
      {
        title: "A development of an intelligent mobile application integrated smart energy meters through IoT",
        status: "Published",
        country: "Indian Patent"
      },
      {
        title: "Auditing Protocol for Secured Data storage in cloud",
        status: "Published",
        country: "Indian Patent"
      },
      {
        title: "Healthcare Services Provided at home using Fog Computing and Cloud Computing",
        status: "Published",
        country: "Indian Patent"
      },
      {
        title: "An AI based system for Peer to Peer (P2P) Payment with security Protection for Payee",
        status: "Published",
        country: "Indian Patent"
      }
    ],

    bookChapters: [
      {
        title: "Software-Defined Network (SDN) for Cloud-Based Internet of Things",
        book: "Transforming Management with AI, Big-Data, and IoT",
        publisher: "Springer International Publishing",
        year: 2022
      },
      {
        title: "Big Data Analytics and Big Data Processing for IOT-Based Sensing Devices",
        book: "Transforming Management with AI, Big-Data, and IoT",
        publisher: "Springer International Publishing",
        year: 2022
      },
      {
        title: "A digital transformation in Teaching and learning platform: A covid-19 perspective",
        book: "New Era in Digital Governance",
        publisher: "Computer Society of India",
        year: 2021
      }
    ],

    certifications: [
      "AI for everyone - Coursera (2020)",
      "Network Security Expert Certification NSE2 - FORTINET (2020)",
      "Fundamentals of Deep learning for computer vision - Nvidia (2020)"
    ],

    memberships: [
      "IAENG member (membership no - 93139613)"
    ],

    projectsGuided: {
      phd: 0,
      masters: 0,
      bachelors: "Many"
    }
  },

  {
    id: 3,
    name: "Ms. Akanksha Shangloo",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "akanksha.shangloo@jssaten.ac.in",
    phone: "9149523611",
    image: "/faculty/akanksha-shangloo.jpg", // Placeholder
    joiningDate: "06-11-2024",

    experience: {
      teaching: 2,
      industry: 0.5,
      research: 0
    },

    qualifications: [
      { degree: "Ph.D", specialization: "Computer Engineering (ML)", status: "Pursuing", institution: "Sharda University, Gr. Noida" },
      { degree: "M.Tech", specialization: "Computer Science & Information Technology", year: 2022, institution: "Dayananda Sagar University, Bangalore" },
      { degree: "B.E.", specialization: "Computer Science & Engineering", year: 2020, institution: "Sachdeva Engineering College for Girls, PTU Jalandhar" }
    ],

    publications: {
      bookChapters: 2
    },

    researchAreas: [
      "Machine Learning",
      "Computer Vision",
      "Robotics",
      "Artificial Intelligence"
    ],

    bookChapters: [
      {
        title: "Computer Vision and Robotics",
        publisher: "Springer",
        year: 2022
      }
    ],

    workshops: [
      {
        name: "One Week AICTE Sponsored National Level Faculty Development Program on Cloud Infrastructure (AWS)",
        organizer: "Brainovision Solutions India Pvt Ltd",
        date: "21st to 25th August 2023"
      },
      {
        name: "Research Writing Essentials: Strategies for effective scholarly Communication",
        organizer: "Sharda University",
        date: "21-23 February 2024"
      },
      {
        name: "One week FDP on Recent Trends in Computing 4.0",
        organizer: "Vishwakarma Institute of Technology, Pune",
        date: "8th to 13th July 2024"
      }
    ],

    projectsGuided: {
      phd: 0,
      masters: 0,
      bachelors: 0
    }
  },

  {
    id: 4,
    name: "Ms. Aparna Shrivastava",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "aparnashrivastava@jssaten.ac.in",
    phone: "9873097780",
    image: "/faculty/aparna-shrivastava.jpg", // Placeholder
    joiningDate: "04-08-2007",

    experience: {
      teaching: 3,
      industry: 0,
      research: 3
    },

    qualifications: [
      { degree: "Ph.D", specialization: "Wire Sensor Networks", status: "Pursuing", institution: "Jaypee Institute of Information Technology, Noida" },
      { degree: "M.Tech", specialization: "CSE", year: 2010, institution: "RKGIT, Bhopal, RGPV" },
      { degree: "B.E.", specialization: "CSE", year: 2002, institution: "SVITS, Indore, RGPV" }
    ],

    publications: {
      otherJournals: 1,
      conferences: 1
    },

    researchAreas: [
      "Wireless Sensor Networks",
      "Mobile Ad-hoc Networks (MANET)",
      "TCP Protocol Enhancement",
      "Network Security",
      "Machine Learning"
    ],

    awards: [
      "Dewang Mehta National Educational Awards for 'Best Faculty in Information Technology', November 2016 (BSA & NASCOM)"
    ],

    notablePublications: [
      {
        title: "Enhanced Recovery scheme for TCP NewReno in MANET",
        journal: "International Journal of Engineering Research and Development",
        year: 2012,
        volume: "3, no. 8",
        pages: "27-35"
      }
    ],

    workshops: [
      {
        name: "Advance Optimisation Techniques & Hands on with Matlab",
        organizer: "MeitY(MHRD) at MNIT, Jaipur",
        date: "06 Sep to 17 Sep 2021"
      },
      {
        name: "Phase II-Online STTP on Data Science & Machine Learning",
        organizer: "Narula Inst of Tech, Kolkata",
        date: "07 June to 11 June 2021"
      }
    ],

    nptelCourses: [
      {
        name: "Mathematics for Machine Learning",
        platform: "NPTEL",
        status: "Ongoing"
      }
    ],

    projectsGuided: {
      phd: 0,
      masters: 0,
      bachelors: 10
    }
  },

  {
    id: 5,
    name: "Dr. Birendra Kumar Verma",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "birendra.verma@jssaten.ac.in",
    phone: "9808071801",
    image: "/faculty/birendra-verma.jpg", // Placeholder
    joiningDate: "15-12-2014",

    experience: {
      teaching: 22,
      industry: 0,
      research: 10
    },

    qualifications: [
      { degree: "Ph.D", specialization: "Computer Science & Engineering", year: 2023, institution: "IFTM University, Moradabad" },
      { degree: "M.Tech", specialization: "Computer Science & Engineering", year: 2011, institution: "MDU, Rohtak" },
      { degree: "B.Tech", specialization: "Information Technology", year: 2002, institution: "RGPV, Bhopal" }
    ],

    publications: {
      webOfScience: 2,
      scopus: 4,
      otherJournals: 0,
      conferences: 0
    },

    researchAreas: [
      "Machine Learning",
      "Deep Learning",
      "Artificial Intelligence",
      "Data Mining",
      "Software Engineering"
    ],

    patents: [
      {
        title: "Method and System for Optimizing Email Communications through Advanced Machine Learning and Recipient Profiling",
        status: "Published",
        applicationNo: "202441033128",
        date: "11/05/2024"
      },
      {
        title: "System and Method for Sentiment Based Product Recommendations",
        status: "Published",
        applicationNo: "202441024835",
        date: "04/04/2024"
      },
      {
        title: "System and Method for Recommendation of Crop",
        status: "Published",
        applicationNo: "202441024838",
        date: "04/04/2024"
      }
    ],

    notablePublications: [
      {
        title: "Job Recommendation System Using Machine Learning",
        journal: "International Journal of Advanced Computer Science and Applications (IJACSA)",
        year: 2023,
        volume: "14(1)",
        type: "WOS/Scopus"
      },
      {
        title: "Email Classification Using Machine Learning Algorithms",
        journal: "Journal Européen des Systèmes Automatisés",
        year: 2023,
        volume: "56(2)",
        pages: "309-314",
        type: "Scopus"
      }
    ],

    awards: [
      "Best Paper Award at International Conference (2022)"
    ],

    projectsGuided: {
      phd: 0,
      masters: 0,
      bachelors: 40
    }
  },

  {
    id: 6,
    name: "Dr. Meena Arora",
    designation: "Associate Professor",
    additionalRole: "In-charge HOD",
    department: "Information Technology",
    email: "meena.arora@jssaten.ac.in",
    phone: "9811031683",
    image: "/faculty/meena-arora.jpg", // Placeholder
    joiningDate: "01-08-1998",

    experience: {
      teaching: 26,
      industry: 0,
      research: 15
    },

    qualifications: [
      { degree: "Ph.D", specialization: "Computer Science & Engineering", year: 2016, institution: "Mewar University, Rajasthan" },
      { degree: "M.Tech", specialization: "Computer Science & Engineering", year: 2008, institution: "UPTU, Lucknow" },
      { degree: "MCA", year: 2004, institution: "IGNOU, New Delhi" },
      { degree: "B.Sc. (Hons) Mathematics", year: 1991, institution: "Delhi University" }
    ],

    publications: {
      webOfScience: 4,
      scopus: 5,
      otherJournals: 11,
      conferences: 0,
      bookChapters: 3
    },

    researchAreas: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Blockchain Technology",
      "Cloud Computing",
      "Internet of Things (IoT)",
      "Network Security"
    ],

    patents: [
      {
        title: "Secure Patient-Controlled Data Sharing in Electronic Health Records",
        status: "Published",
        applicationNo: "202441013399",
        date: "26/02/2024"
      },
      {
        title: "Blockchain-Powered Skill Verification and Certification Platform",
        status: "Published",
        applicationNo: "202441009690",
        date: "08/02/2024"
      },
      {
        title: "Secure and Transparent Land Registry System using Blockchain Technology",
        status: "Published",
        applicationNo: "202441007949",
        date: "01/02/2024"
      },
      {
        title: "Advanced Optimization of Task Scheduling in Cloud Computing Environments",
        status: "Published",
        applicationNo: "202441007950",
        date: "01/02/2024"
      },
      {
        title: "Intelligent Hybrid Intrusion Detection System for IoT Networks",
        status: "Published",
        applicationNo: "202441009691",
        date: "08/02/2024"
      },
      {
        title: "Advanced Deepfake Detection Using Deep Learning Techniques",
        status: "Published",
        applicationNo: "202441011309",
        date: "15/02/2024"
      },
      {
        title: "Automated Answer Script Evaluation System using AI and OCR",
        status: "Published",
        applicationNo: "202441011310",
        date: "15/02/2024"
      },
      {
        title: "Automated Test Case Generation System using Machine Learning",
        status: "Published",
        applicationNo: "202441011311",
        date: "15/02/2024"
      },
      {
        title: "Machine Learning-Based Early Disease Prediction System",
        status: "Published",
        applicationNo: "202441011308",
        date: "15/02/2024"
      },
      {
        title: "Deep Learning System for Emotion Detection from Facial Expressions",
        status: "Published",
        applicationNo: "202441013398",
        date: "26/02/2024"
      },
      {
        title: "Deep Learning-Based Plant Disease Detection and Management System",
        status: "Published",
        applicationNo: "202441013400",
        date: "26/02/2024"
      }
    ],

    bookChapters: [
      {
        title: "Deep Learning and Machine Learning Techniques for Medical Imaging-Based Diagnosis: A Systematic Review",
        book: "Deep Learning and Machine Learning Techniques",
        publisher: "IGI Global",
        year: 2023
      },
      {
        title: "Integration of Blockchain Technology in Healthcare",
        book: "Healthcare Applications",
        publisher: "Springer",
        year: 2022
      },
      {
        title: "Cloud Computing Security Challenges",
        book: "Cloud Security Frameworks",
        publisher: "Academic Press",
        year: 2021
      }
    ],

    notablePublications: [
      {
        title: "Plant Disease Detection using Deep Learning",
        journal: "IEEE Access",
        year: 2023,
        type: "SCIE",
        impactFactor: 3.4
      },
      {
        title: "Blockchain for Healthcare Data Management",
        journal: "Journal of Medical Systems",
        year: 2022,
        type: "SCIE",
        impactFactor: 4.5
      }
    ],

    awards: [
      "Best Teacher Award - JSS Academy (2020)",
      "Excellence in Research - State Level (2019)"
    ],

    projectsGuided: {
      phd: 0,
      masters: 5,
      bachelors: 60
    },

    memberships: [
      "IEEE Member",
      "ACM Member",
      "CSI Life Member"
    ]
  },

  {
    id: 7,
    name: "Ms. Jasneet Kaur",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "jasneet.kaur@jssaten.ac.in",
    phone: "8368993659",
    image: "/faculty/jasneet-kaur.jpg", // Placeholder
    joiningDate: "01-11-2019",

    experience: {
      teaching: 5,
      industry: 1,
      research: 2
    },

    qualifications: [
      { degree: "M.Tech", specialization: "Computer Science & Engineering", year: 2019, institution: "Maharaja Surajmal Institute of Technology, GGSIPU" },
      { degree: "B.Tech", specialization: "Information Technology", year: 2017, institution: "MAIT, GGSIPU" }
    ],

    publications: {
      internationalJournals: 3,
      otherJournals: 0,
      conferences: 0
    },

    researchAreas: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Data Science"
    ],

    notablePublications: [
      {
        title: "Machine Learning Applications in Healthcare",
        journal: "International Journal of Computer Applications",
        year: 2020
      },
      {
        title: "Deep Learning for Image Classification",
        journal: "International Journal of Advanced Research",
        year: 2021
      },
      {
        title: "NLP Techniques for Sentiment Analysis",
        journal: "International Journal of Engineering Research",
        year: 2022
      }
    ],

    certifications: [
      "Machine Learning - Stanford University (Coursera)",
      "Deep Learning Specialization - deeplearning.ai",
      "Python for Data Science - IBM"
    ],

    projectsGuided: {
      phd: 0,
      masters: 0,
      bachelors: 15
    }
  },

  {
    id: 8,
    name: "Ms. Kajal Dubey",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "kajal.dubey@jssaten.ac.in",
    phone: "9650886613",
    image: "/faculty/kajal-dubey.jpg", // Placeholder
    joiningDate: "15-11-2023",

    experience: {
      teaching: 1,
      industry: 0,
      research: 1
    },

    qualifications: [
      { degree: "M.Tech", specialization: "Computer Science & Engineering", year: 2023, institution: "AKGEC, AKTU" },
      { degree: "B.Tech", specialization: "Computer Science & Engineering", year: 2020, institution: "IMS Engineering College, AKTU" }
    ],

    publications: {
      otherJournals: 1,
      conferences: 0
    },

    researchAreas: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Structures",
      "Algorithms",
      "Software Engineering"
    ],

    notablePublications: [
      {
        title: "Machine Learning Applications in Modern Computing",
        journal: "International Journal of Engineering and Technology",
        year: 2023
      }
    ],

    certifications: [
      "Python Programming - Coursera",
      "Data Structures and Algorithms - NPTEL"
    ],

    projectsGuided: {
      phd: 0,
      masters: 0,
      bachelors: 2
    }
  },

  {
    id: 9,
    name: "Mr. Mayank Raj",
    designation: "Assistant Professor",
    department: "Information Technology",
    email: "mayank.raj@jssaten.ac.in",
    phone: "9953028888",
    image: "/faculty/mayank-raj.jpg", // Placeholder
    joiningDate: "22-08-2023",

    experience: {
      teaching: 1.1,
      industry: 0.6,
      research: 0
    },

    qualifications: [
      { degree: "M.Tech", specialization: "Computer Science & Engineering", year: 2021, institution: "IIlm Academy Of Higher Learning, College Of Engg. & Technology, Gautam Buddh Nagar", university: "AKTU, Lucknow" },
      { degree: "B.Tech", specialization: "Computer Science & Engineering", year: 2018, institution: "MGM College of Engineering and Technology, Noida", university: "AKTU, Lucknow" }
    ],

    publications: {
      scie: 0,
      webOfScience: 0,
      scopus: 0,
      otherJournals: 1,
      conferences: 2,
      bookChapters: 0
    },

    researchAreas: [
      "Machine Learning",
      "Artificial Intelligence",
      "Brain Tumor Detection",
      "Genetic Algorithms",
      "Support Vector Machines",
      "Medical Image Processing"
    ],

    patents: [],

    notablePublications: [
      {
        title: "Brain Tumor Detection Using Fish Schooling Genetic Algorithm",
        authors: "Mayank Raj, Vikas Singh, Vikram Bali",
        conference: "2021 9th International Conference on Reliability, Infocom Technologies and Optimization (ICRITO)",
        year: 2021,
        publisher: "IEEE",
        type: "Conference"
      },
      {
        title: "Brain Tumor Detection Using Hybrid Approach of Fish School Search Using SVM",
        authors: "Mayank Raj, V Singh",
        conference: "2021 IEEE 6th International Conference on Computing, Communication and Automation (ICCCA)",
        year: 2022,
        publisher: "IEEE",
        type: "Conference"
      }
    ],

    workshops: [
      {
        name: "FDP on CYBER SECURITY",
        organizer: "E & ICT ACADEMY, IIT KANPUR (A Joint initiative of MeitY & IIT Kanpur) at ITS Engineering College, Greater Noida",
        date: "20-24 Feb 2023"
      },
      {
        name: "5 day FDP on CLOUD Practitioner (AWS)",
        organizer: "ICT Academy at ITS Engineering college, Greater Noida",
        date: "17-21 APRIL 23"
      }
    ],

    scholarId: {
      google: "ItPkvvEAAAAJ"
    },

    projectsGuided: {
      phd: 0,
      masters: 0,
      bachelors: 0
    }
  }
];

// Helper functions
export const getFacultyById = (id) => {
  return facultyData.find(faculty => faculty.id === id);
};

export const getFacultyByName = (name) => {
  return facultyData.find(faculty =>
    faculty.name.toLowerCase().includes(name.toLowerCase())
  );
};

export const getFacultyByDesignation = (designation) => {
  return facultyData.filter(faculty =>
    faculty.designation.toLowerCase() === designation.toLowerCase()
  );
};

export const getAllFaculty = () => {
  return facultyData;
};

export const getFacultyStats = () => {
  return {
    totalFaculty: facultyData.length,
    professors: getFacultyByDesignation("Professor").length,
    assistantProfessors: getFacultyByDesignation("Assistant Professor").length,
    totalPublications: facultyData.reduce((sum, f) => {
      const pubs = f.publications;
      return sum + (pubs.scie || 0) + (pubs.scopus || 0) + (pubs.conferences || 0);
    }, 0),
    totalPatents: facultyData.reduce((sum, f) => (f.patents ? sum + f.patents.length : sum), 0)
  };
};

export const searchFaculty = (query) => {
  const lowerQuery = query.toLowerCase();
  return facultyData.filter(faculty =>
    faculty.name.toLowerCase().includes(lowerQuery) ||
    faculty.designation.toLowerCase().includes(lowerQuery) ||
    faculty.researchAreas?.some(area => area.toLowerCase().includes(lowerQuery))
  );
};
