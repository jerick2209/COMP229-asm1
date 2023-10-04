// NAME | STUDENT ID | DATE

homeContent = {
  welcomeMessage: "Welcome to My Website",
  welcomeDescription:
    "I offer a unique web design experience, providing the best in my Portfolio.",
  missionStatement:
    "We are dedicated to creating beautiful and functional websites that exceed your expectations. Your online presence is our priority.",
};

aboutMeContent = {
  selfIntroduction:
    "I'm Jerick, a dedicated and creative individual driven by a passion for technology and innovation. With a background in computer science and a strong interest in software development, I'm constantly exploring the latest tech advancements. Beyond the digital realm, I'm a nature enthusiast who relishes outdoor experiences like hiking in scenic landscapes and capturing the beauty of the natural world through photography. Whether it's coding elegant solutions or framing the perfect shot, I approach each endeavor with unwavering dedication and a relentless thirst for knowledge and growth.",
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
    {
      logo: "https://static.wixstatic.com/media/c563d8_81b63ec0b7344a24acc34e5505985c30~mv2.jpg",
      company: "IT-SPAC Technology",
      location: "Pasig, Philippines",
      position: "Software Programmer",
      date: "August 2015 - September 2017",
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
