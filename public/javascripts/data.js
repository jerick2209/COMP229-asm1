// NAME | STUDENT ID | DATE

homeContent = {
  welcomeMessage: "Welcome to My Website",
  welcomeDescription:
    "Welcome to my page! I'm Jerick, and I'm passionate about creating innovative software solutions that make a real difference. This is the place where technology meets creativity, and where I share my journey in the world of software development.",
  missionStatement:
    "My Mission is to leverage my technical expertise to build software that empowers businesses, improves lives, and drives innovation. I believe that software has the power to transform industries and solve complex challenges, and I'm committed to harnessing that power for the greater good.",
};

aboutMeContent = {
  selfIntroduction:
    "I am a dedicated software engineer with a deep love for coding and problem-solving. My journey into the world of technology began at college days when I wrote my first lines of code. Since then, I've been on an exciting path of continuous learning and growth, exploring various programming languages, frameworks, and methodologies.",
  resumeUrl: "https://docs.google.com/document/d/1kANbV2lh-XG8EeQr8um-Ov1tpKJCoOnx6VeaCILzf44/edit",
  education: [
    {
      logo: "https://th.bing.com/th?id=OIP.-x7PpKKjo1ctsBRmXd0YNwAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      name: "Centennial College",
      Location: "Toronto CA",
      degree: "Software Engineering Technician",
      date: "January 2022 - April 2024",
    },
  ],
  workExperiences: [
    {
      logo: "https://destini.co/wp-content/uploads/2020/04/safeway-albertsons-logo.png",
      company: "Albertsons-Safeway Inc.",
      location: "BGC The Fort, Philippines",
      position: "Sr. Software Engineer",
      date: "August 2015 - July 2022",
    },
  ],
};

projectsContent = [
  {
    name: "E-commerce Website Development",
    description: "Create a full-fledged e-commerce website for a client who wants to start or upgrade their online store.",
    screenShotUrl: "https://www.example.com/project1-screenshot.png",
    details: "Details for Project 1",
    liveDemoUrl: "https://www.example.com/project1-demo",
    githubRepoUrl: "https://www.example.com/project1-repo",
  },
  {
    name: "Mobile App for Health and Wellness",
    description: "Develop a mobile app focused on health and wellness.",
    screenShotUrl: "https://www.example.com/project2-screenshot.png",
    details: "Details for Project 2",
    liveDemoUrl: "https://www.example.com/project2-demo",
    githubRepoUrl: "https://www.example.com/project2-repo",
  },
  {
    name: "Machine Learning-Powered Recommendation System",
    description: "Build a recommendation system that utilizes machine learning algorithms to provide personalized recommendations to users.",
    screenShotUrl: "https://www.example.com/project3-screenshot.png",
    details: "Details for Project 3",
    liveDemoUrl: "https://www.example.com/project3-demo",
    githubRepoUrl: "https://www.example.com/project3-repo",
  },
];

const servicesList = [
  {
    name: "Web Development",
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--JvNg6LJ---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/i/5ct9nhbw6gdpb8dh0yy1.png",
  },
  { name: "Graphic Design", photo: "data:image/jpeg;base64,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" },
  {
    name: "Mobile App Development",
    photo: "data:image/jpeg;base64,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",
  },
  { name: "Search Engine Optimization (SEO)", photo: "https://www.wordstream.com/wp-content/uploads/2022/08/what-does-seo-stand-for.png" },
  {
    name: "Social Media Marketing",
    photo: "https://images.yourstory.com/cs/1/175078f09bd211ec9bed114c16bb4a2d/socialmediamarketingstrategy-1650293336008.jpg",
  },
  {
    name: "E-commerce Solutions",
    photo: "data:image/png;base64,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",
  },
  { name: "Content Writing", photo: "url_to_content_writing_photo.jpg" },
  { name: "UI/UX Design", photo: "url_to_ui_ux_design_photo.jpg" },
  { name: "Data Analytics", photo: "url_to_data_analytics_photo.jpg" },
  { name: "Cloud Computing", photo: "url_to_cloud_computing_photo.jpg" },
];

module.exports = {
  homeContent,
  aboutMeContent,
  projectsContent,
  servicesList,
};
