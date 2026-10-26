export const portfolioData = {
  personalInfo: {
    name: "Sowmiya M",
    title: "Data Analyst",
    location: "Chennai, India",
    email: "sowmiyam2102@gmail.com",
    phone: "+91 6374630969",
    github: "https://github.com/sowmiyam2102",
    linkedin: "https://linkedin.com/in/sowmiyam2102",
    subTitle: "Beyond the numbers lies the story. Turning data into clarity, patterns into perspectives, and insights into smarter decisions.",
    about: [
      "I am an MCA graduate with 1 year and 2 months of internship experience in data analytics, working across banking, retail, and HR domains. My expertise includes SQL, Excel, Power BI, Tableau, Python, and ETL workflows, with a strong focus on data quality, validation, and meaningful business insights.",
      "Through my internship and projects, I have worked with 10,000+ records, developed interactive dashboards, built data preparation workflows, and analysed datasets to identify trends and support decision-making. My projects include banking analytics using RBI datasets, retail sales and demand forecasting, and automated data pipelines.",
      "I enjoy exploring data, uncovering patterns, and translating analytical findings into practical recommendations. I am continuously strengthening my analytical and technical skills, with the goal of helping organizations improve reporting, understand performance, and make better decisions through data."
    ],
    resumeUrl: "/Sowmiyam-resume.pdf"
  }, aboutSection: {
    title: "About Me",
    description: [
      "I am a data analytics professional with a strong foundation in SQL, Python, database management, and business intelligence. I enjoy exploring complex datasets, identifying meaningful patterns, and turning raw data into actionable insights that support better business decisions.",

      "My technical expertise includes SQL, Excel, Power BI, Tableau, Python, MySQL, PostgreSQL, and ETL workflows. Through my internship and projects, I have gained hands-on experience in data validation, dashboard development, data preparation, and analysis across banking, retail, and HR domains.",

      "Beyond analytics, my background in software development and data engineering helps me approach problems with a broader technical perspective. I enjoy building efficient workflows, improving data quality, and presenting findings through clear, interactive visualizations.",

      "I am continuously learning and refining my analytical skills, with the goal of transforming data into meaningful business insights and helping organizations make informed, data-driven decisions."
    ]
  }
  ,
  skillGroups: [
    {
      title: "Data Analytics & BI",
      skills: ["SQL", "Excel", "Power BI", "Tableau", "Power Query", "DAX"]
    },
    {
      title: "Programming & Data Processing",
      skills: ["Python", "Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Database Management", "Query Optimization"]
    },
    {
      title: "ETL & Data Engineering",
      skills: ["ETL Workflows", "Tableau Prep", "Apache Airflow", "Docker"]
    },
    {
      title: "Reporting & Data Quality",
      skills: ["KPI Reporting", "Data Validation", "Data Quality", "Dashboard Development"]
    },
    {
      title: "Machine Learning",
      skills: ["Scikit-learn", "TensorFlow", "NLP", "Predictive Analytics"]
    }, {


      title: "Development Tools",
      skills: ["Git", "GitHub", "VS Code", "Java", "Spring Boot", "React.js", "REST APIs"]
    }
  ],
  experience: [
    {

      company: "Bilight Solutions",
      role: "Data Analytics Intern",
      location: "Chennai",
      duration: "Feb 2025 – Apr 2026",
      description: [
        "Processed, transformed, and prepared datasets using Excel, MySQL, Tableau Prep, and Power Query, supporting ETL workflows across HR, Retail, and Banking domains.",
        "Developed interactive Power BI and Tableau dashboards to visualize key metrics, improve reporting clarity, and support data-driven business decisions.",
        "Conducted Exploratory Data Analysis (EDA) on 1,000+ HR records to identify patterns and generate workforce-related insights.",
        "Defined KPIs and analysed banking performance metrics across 50+ banks to examine digital adoption trends and compare performance."
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
      title: "Banking Systems and Performance Analysis Dashboard",
      category: "Analytics & BI",
      images: ["projects/bank/bank1.png", "projects/bank/bank2.png", "projects/bank/bank3.png"],
      featured: true,
      tech: ["Tableau", "Tableau Prep", "SQL", "Excel", "Power Query"],
      description: "Analysed 40+ RBI datasets covering 50+ banks to examine banking performance, digital adoption, and transaction growth. Developed interactive Tableau dashboards to track KPIs, compare performance across banks, and communicate findings through data visualization.",
      highlights: [
        "40+ RBI Datasets Analysed",
        "50+ Banks Covered",
        "KPI Tracking and Performance Benchmarking",
        "Digital Adoption Analysis",
        "Transaction Growth Trends",
        "Interactive Tableau Dashboards"
      ],
      githubUrl: "https://github.com/sowmiyam2102/Banking-Transaction-and-Infrastructure-Analysis-in-India"
    },

    {
      id: 2,
      title: "Retail Industry Data Analysis",
      category: "Analytics & BI",
      featured: true,
      images: ["projects/retail/retail1.png"],
      tech: ["MySQL", "SQL", "Power BI", "Python"],
      description: "Analysed retail sales data to explore sales trends, customer behaviour, and product performance. Used SQL, Python, and Power BI to investigate demand patterns and identify opportunities for improved forecasting and inventory planning.",
      highlights: [
        "Retail Sales Analysis",
        "Customer Behaviour Insights",
        "Product Performance Analysis",
        "Demand Pattern Exploration",
        "Power BI Data Visualization",
        "Inventory Planning Opportunities"
      ]
    },

    {
      id: 3,
      title: "AI-Powered Water Quality Monitoring System",
      category: "Full Stack",
      featured: false,
      images: ["projects/waterproject/water1.jpeg", "projects/waterproject/water2.jpeg", "projects/waterproject/water3.jpeg", "projects/waterproject/water4.jpeg", "projects/waterproject/water5.jpeg", "projects/waterproject/water6.jpeg", "projects/waterproject/water7.jpeg"],
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
      id: 4,
      title: "Crypto Data Pipeline and Power BI Dashboard",
      category: "Data Engineering",
      featured: false,
      images: ["projects/crypto/image.png"],
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
      id: 5,
      title: "Mystery Script Game",
      category: "Mobile Development",
      subCategory: "Android Application",
      images: ["projects/android/mobile1.png", "projects/android/mobile2.png"],
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
      images: ["projects/aitext/aitext1.png"],
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
      images: ["projects/uiux/ui1.png", "projects/uiux/ui2.png", "projects/uiux/ui3.png", "projects/uiux/ui4.png", "projects/uiux/ui5.png", "projects/uiux/ui6.png", "projects/uiux/ui7.png", "projects/uiux/ui8.png", "projects/uiux/ui9.png"],
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
    { name: "Oracle Certified Generative AI Professional", issuer: "Oracle" },
    { name: "NPTEL DBMS", issuer: "NPTEL" },
    { name: "Java & Full Stack", issuer: "InLustro" },
    { name: "UI/UX Design", issuer: "TVS Training" }
  ],
  achievements: [
    {
      title: "3rd Place at InLustro 2025",
      description: "Awarded third place for the AI-Powered Water Quality Monitoring System out of hundreds of entries."
    },
    {
      title: "Best Social Media Coordinator Award",
      description: "Recognized as best social media coordinator for handling photography, video editing and content creation for official college social media plaform."
    }
  ]
};
