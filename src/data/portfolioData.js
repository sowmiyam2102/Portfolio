import { image } from "framer-motion/client";

export const portfolioData = {
  personalInfo: {
    name: "Sowmiya M",
    title: "Full-Stack Developer",
    location: "Chennai, India",
    email: "sowmiyam2102@gmail.com",
    phone: "+91 6374630969",
    github: "https://github.com/sowmiyam2102",
    linkedin: "https://linkedin.com/in/sowmiyam2102",
    subTitle: "I build scalable web applications, REST APIs, and data-driven solutions. Passionate about creating software that solves real-world problems through clean architecture and modern technologies.",
    about: [
      "I am an MCA graduate with hands-on experience in full-stack development, database management, data engineering, and software analytics. My technical expertise includes Java, Spring Boot, React.js, MySQL, PostgreSQL, Python, and REST API development.",
      "Through academic projects and industry experience, I have built end-to-end applications, designed ETL pipelines, developed interactive dashboards, and integrated machine learning solutions. My projects range from AI-powered water quality monitoring systems to data pipelines and banking analytics dashboards.",
      "I enjoy transforming complex business requirements into efficient, scalable, and user-friendly solutions. With a strong foundation in software engineering, data analytics, and problem-solving, I am continuously learning new technologies and seeking opportunities to build impactful digital products."
    ],
    resumeUrl: "/SOWMIYA_M_Resume.pdf"
  }, aboutSection: {
    title: "About Me",
    description: [
      "I'm a passionate Full-Stack Developer who enjoys building modern web applications, REST APIs, and data-driven solutions that solve real-world problems.",

      "My expertise includes Java, Spring Boot, React.js, Python, MySQL, PostgreSQL, and modern development tools. I enjoy transforming complex requirements into clean, scalable, and user-friendly applications.",

      "Beyond software development, I have experience working with analytics, business intelligence, and machine learning solutions, enabling me to approach problems from both a development and data perspective.",

      "I am continuously learning new technologies and exploring innovative ways to create impactful digital products that deliver meaningful user experiences."
    ]
  }
  ,
  skillGroups: [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "REST APIs", "Flask"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "SQL"]
    },
    {
      title: "Data Engineering",
      skills: ["Apache Airflow", "Docker", "ETL Pipelines"]
    },
    {
      title: "Analytics & BI",
      skills: ["Power BI", "Tableau", "Excel", "Power Query"]
    },
    {
      title: "Machine Learning",
      skills: ["Python", "Scikit-Learn", "TensorFlow", "NLP"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"]
    }
  ],
  experience: [
    {
      company: "Bilight Solutions",
      role: "Student Intern",
      location: "Chennai",
      duration: "Feb 2025 – Apr 2026",
      description: [
        "Processed and transformed large-scale datasets using Excel, MySQL, Tableau Prep, and Power Query, applying ETL techniques across HR, Retail, and Banking domains.",
        "Developed interactive dashboards using Power BI and Tableau to improve business reporting and decision-making.",
        "Performed Exploratory Data Analysis (EDA) on 1,000+ HR records.",
        "Designed KPIs and banking performance metrics to analyze digital adoption across 50+ banks."
      ],
      technologies: [
        "Excel",
        "MySQL",
        "Tableau Prep",
        "Power Query",
        "Power BI",
        "Tableau"
      ]
    }
  ],

  education: [
    {
      institution: "Dwaraka Doss Goverdhan Doss Vaishnav College",
      degree: "Master of Computer Applications (MCA)",
      duration: "2024 - 2026",
      percentage: "89%"
    },
    {
      institution: "Chevalier T. Thomas Elizabeth College for Women",
      degree: "B.Sc. Computer Science",
      duration: "2021 - 2024",
      percentage: "85%"
    }
  ],
  projects: [
    {
      id: 1,
      title: "AI-Powered Water Quality Monitoring System",
      category: "Full Stack",
      featured: true,
      images: ["waterproject/water1.jpeg", "waterproject/water2.jpeg", "waterproject/water3.jpeg", "waterproject/water4.jpeg", "waterproject/water5.jpeg", "waterproject/water6.jpeg", "waterproject/water7.jpeg"],
      subCategory: "Full Stack + Machine Learning",
      tech: ["Java", "Spring Boot", "React.js", "Flask", "MySQL", "REST APIs", "TensorFlow"],
      description: "Developed a full-stack water quality prediction platform combining Spring Boot APIs, Flask-based machine learning services, React frontend, and MySQL database. The system analyzes water quality parameters and predicts potability in real time.",
      highlights: [
        "REST API Development",
        "Machine Learning Integration",
        "React Dashboard",
        "MySQL Data Storage",
        "Real-Time Prediction",
        "80% Prediction Accuracy",
        "Processed 10,000+ records"
      ],
      githubUrl: "https://github.com/sowmiyam2102/AI-Powered-water-quality"
    },
    {
      id: 2,
      title: "Crypto Data Pipeline and Power BI Dashboard",
      category: "Data Engineering",
      featured: true,
      images: ["crypto/image.png"],
      tech: ["Python", "PostgreSQL", "Docker", "Apache Airflow", "Power BI"],
      description: "Designed and implemented a Bronze–Silver–Gold data pipeline architecture for cryptocurrency analytics. Automated ETL workflows, feature engineering, machine learning prediction, and Power BI reporting.",
      highlights: [
        "Data Engineering",
        "ETL Automation",
        "Apache Airflow",
        "Docker Containerization",
        "Machine Learning Prediction",
        "Power BI Dashboards"
      ],
      githubUrl: "https://github.com/sowmiyam2102/crypto-data-pipeline"
    },
    {
      id: 3,
      title: "Banking Systems and Performance Analysis Dashboard",
      category: "Analytics & BI",
      images: ["bank/bank1.png", "bank/bank2.png", "bank/bank3.png"],
      featured: false,
      tech: ["Tableau", "Tableau Prep", "SQL", "Excel", "Power Query"],
      description: "Analyzed 40+ RBI datasets covering 50+ banks and built interactive dashboards for performance monitoring, digital adoption analysis, transaction growth tracking, and banking benchmarking.",
      highlights: [
        "Business Intelligence",
        "KPI Monitoring",
        "Tableau Dashboards",
        "Banking Analytics",
        "Performance Benchmarking"
      ],
      githubUrl: "https://github.com/sowmiyam2102/Banking-Transaction-and-Infrastructure-Analysis-in-India"
    },
    {
      id: 4,
      title: "Retail Industry Data Analysis",
      category: "Analytics & BI",
      featured: false,
      images: ["retail/retail1.png"],
      tech: ["MySQL", "SQL", "Power BI", "Python"],
      description: "Analyzed retail sales datasets using MySQL, SQL, Power BI, and predictive analytics to identify customer behavior, sales trends, product performance, and demand forecasting opportunities.",
      highlights: [
        "Customer Behavior Insights",
        "Sales Trend Forecasting",
        "Product Performance Benchmarks",
        "Demand Optimization"
      ]
    },
    {
      id: 5,
      title: "Mystery Script Game",
      category: "Mobile Development",
      subCategory: "Android Application",
      images: ["android/mobile1.png", "android/mobile2.png"],
      featured: false,
      tech: ["Java", "Android Studio", "XML"],
      description: "Developed a detective-themed Android application featuring quizzes, image-based clue analysis, score tracking, timers, level progression, and immersive gameplay mechanics.",
      highlights: [
        "Detective-themed Gameplay",
        "Quiz Engine",
        "Timer System",
        "Score Tracking",
        "Level Progression",
        "Image Clue Analysis"
      ],
      githubUrl: "https://github.com/sowmiyam2102/Mystery-Script"
    },
    {
      id: 6,
      title: "AI & Text Detection",
      category: "Machine Learning",
      featured: false,
      images: ["aitext/aitext1.png"],
      tech: ["Python", "NLP", "Scikit-learn", "Pandas"],
      description: "Built a machine learning and NLP solution to classify AI-generated and human-written text using TF-IDF vectorization, Logistic Regression, and Random Forest algorithms.",
      highlights: [
        "NLP Classification",
        "TF-IDF Feature Engineering",
        "Model Comparison (Logistic vs RF)",
        "Accurate Text Attribution"
      ],
      githubUrl: "https://github.com/sowmiyam2102/AI-Text-detection"
    },
    {
      id: 7,
      title: "Epiphany UI/UX",
      category: "UI/UX",
      featured: false,
      images: ["uiux/ui1.png", "uiux/ui2.png", "uiux/ui3.png", "uiux/ui4.png", "uiux/ui5.png", "uiux/ui6.png", "uiux/ui7.png", "uiux/ui8.png", "uiux/ui9.png"],
      tech: ["Figma", "UI Design", "UX Design", "Prototyping"],
      description: "Designed a reader-and-writer platform featuring content discovery, bookmarking, personalized reading experiences, creator dashboards, and monetization workflows.",
      highlights: [
        "Creator Dashboard Layouts",
        "Monetization Workflows",
        "High-fidelity Prototypes",
        "User-centered Content Discovery"
      ],
      githubUrl: "https://github.com/sowmiyam2102/Epiphany-UI-UX-Project"
    }
  ],
  certifications: [
    { name: "Oracle Certified Generative AI Professional", issuer: "Oracle", year: "2024" },
    { name: "NPTEL DBMS", issuer: "NPTEL (IIT)", year: "2023" },
    { name: "Java & Full Stack", issuer: "Software Training Center", year: "2023" },
    { name: "UI/UX Design", issuer: "Design Institute", year: "2023" },
    { name: "CRM Certification", issuer: "Salesforce / Hubspot", year: "2023" }
  ],
  achievements: [
    {
      title: "3rd Place at InLustro 2025",
      description: "Awarded third place for the AI-Powered Water Quality Monitoring System out of hundreds of entries.",
      year: "2025"
    },
    {
      title: "Best Social Media Coordinator Award",
      description: "Recognized for outstanding leadership, communication skills, and digital outreach execution during post-graduate activities.",
      year: "2024"
    }
  ]
};
