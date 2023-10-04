// NAME | STUDENT ID | DATE

homeContent = {
  welcomeMessage: "Welcome to My Website",
  welcomeDescription:
    "Welcome to page! I'm Jerick, and I'm passionate about creating innovative software solutions that make a real difference. This is the place where technology meets creativity, and where I share my journey in the world of software development.",
  missionStatement:
    "My Mission is to leverage my technical expertise to build software that empowers businesses, improves lives, and drives innovation. I believe that software has the power to transform industries and solve complex challenges, and I'm committed to harnessing that power for the greater good.",
};

aboutMeContent = {
  selfIntroduction:
    "I am a dedicated software engineer with a deep love for coding and problem-solving. My journey into the world of technology began at a young age when I wrote my first lines of code. Since then, I've been on an exciting path of continuous learning and growth, exploring various programming languages, frameworks, and methodologies.",
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
    name: "Project 1",
    description: "Description for Project 1",
    screenShotUrl: "https://www.example.com/project1-screenshot.png",
    details: "Details for Project 1",
    liveDemoUrl: "https://www.example.com/project1-demo",
    githubRepoUrl: "https://www.example.com/project1-repo",
  },
  {
    name: "Project 2",
    description: "Description for Project 2",
    screenShotUrl: "https://www.example.com/project2-screenshot.png",
    details: "Details for Project 2",
    liveDemoUrl: "https://www.example.com/project2-demo",
    githubRepoUrl: "https://www.example.com/project2-repo",
  },
  {
    name: "Project 3",
    description: "Description for Project 3",
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
  { name: "Graphic Design", photo: "url_to_graphic_design_photo.jpg" },
  {
    name: "Mobile App Development",
    photo: "url_to_mobile_app_development_photo.jpg",
  },
  { name: "Search Engine Optimization (SEO)", photo: "url_to_seo_photo.jpg" },
  {
    name: "Social Media Marketing",
    photo: "url_to_social_media_marketing_photo.jpg",
  },
  {
    name: "E-commerce Solutions",
    photo: "url_to_ecommerce_solutions_photo.jpg",
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
