/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rahul Patil",
  title: "Hey! I’m Rahul Patil",
  subTitle: emoji(
    "A Technical Project Assistant at IIT Bombay who spends most days bringing mechanical ideas to life. I love working on robotic systems  designing, testing, and occasionally chasing down the parts that decide to go missing. My journey started at GCE Karad, but the real adventure began when I stepped into the INDUS (INtelligent Dynamic Ubiquitous System) lab at IIT Bombay. It’s been a fun mix of design challenges, problem-solving, and learning that “temporary fixes” are sometimes more permanent than planned."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin:
    "https://www.linkedin.com/in/rahul-patil-3a3731267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  gmail: "rahuldpatil17@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// y -- New Part -- Research Interests -- (T)

const researchInterests = {
  title: "Research Interests",
  subTitle:
    "I’m driven by curiosity: Designing machines that move, think, and interact seamlessly with their environment",
  skills: [
    emoji(
      "⚡ Design and optimization of mechanical systems for robotic mobility, actuation, and structural efficiency Development of integrated multi degree of freedom mechanisms for stable and adaptable motion in diverse environments"
    ),
    emoji(
      "⚡ Applications: Humanoid Robots, Medical and Surgical Robots, Soft Robotics, Industrial Robots and Automation"
    )
  ]
};

// y -- New Part -- Research Interests -- (B)

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Government College of Engineering Karad, Maharashtra, India",
      logo: require("./assets/NewImages/karad_logo.png"),
      subHeader: "Bachelor of Technology (B. Tech) Mechanical Engineering"
      // duration: "2021 - 2025",
      // desc: "Relevant courses:",
      // descBullets: [
      //   "Machine Design",
      //   "Theory of Machine",
      //   "Dynamics of Machine",
      //   "Manufacturing Engineering"
      // ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};
const experienceData = {
  experience: [
    {
      title: "Project Staff - IIT Bombay",
      subtitle: "Project Technical Assistant - INDUS Lab",
      time: "Aug 2025 - Present",
      image: require("./assets/images/IIT_logo.png"),
      description:
        "Contributed to the design and research of a bipedal robot, focusing on mechanical structure and motion analysis.",
      display: true // Set false to hide this section, defaults to true
    },
    {
      title: "Internship - IIT Bombay",
      subtitle: "Mechanical Engineering Intern - INDUS Lab",
      time: "Jan 2025 - Jun 2025",
      image: require("./assets/images/IIT_logo.png"),
      description:
        "Developed a mechanically optimized ankle joint for a biped robot, designed for strength and smooth motion",
      display: true // Set false to hide this section, defaults to true
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      id: 1,
      type: "key",
      role: "Boston Dynamics Inspired Quadruped Robot Design",
      back_img: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Bosten/front_test.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/Bosten/scr01.png"),
      scr02: require("./assets/Sarang_assets/KeyProjects/Bosten/scr02.png"),
      scr03: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      scr04: require("./assets/Sarang_assets/KeyProjects/Bosten/scr04.png"),
      video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      company: "Boston Dynamics Inspired Quadruped Robot Design",
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      id: 2,
      type: "key",
      role: "Front-End Developer",
      company: "Quora",
      back_img: require("./assets/Sarang_assets/KeyProjects/Quadraped/back.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Quadraped/front.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/Bosten/scr01.png"),
      scr02: require("./assets/Sarang_assets/KeyProjects/Bosten/scr02.png"),
      scr03: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      scr04: require("./assets/Sarang_assets/KeyProjects/Bosten/scr04.png"),
      video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      type: "key",
      role: "Software Engineer Intern",
      company: "Airbnb",
      back_img: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Bosten/front_test.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/Bosten/scr01.png"),
      scr02: require("./assets/Sarang_assets/KeyProjects/Bosten/scr02.png"),
      scr03: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      scr04: require("./assets/Sarang_assets/KeyProjects/Bosten/scr04.png"),
      video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      type: "key",
      role: "Software Engineer Intern",
      company: "Airbnb",
      back_img: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Bosten/front_test.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/Bosten/scr01.png"),
      scr02: require("./assets/Sarang_assets/KeyProjects/Bosten/scr02.png"),
      scr03: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      scr04: require("./assets/Sarang_assets/KeyProjects/Bosten/scr04.png"),
      video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};
const workExperiencesSecond = {
  display: true,
  experience: [
    {
      id: 1,
      type: "key",
      role: "Boston Dynamics Inspired Quadruped Robot Design",
      back_img: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Bosten/front_test.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/Bosten/scr01.png"),
      scr02: require("./assets/Sarang_assets/KeyProjects/Bosten/scr02.png"),
      scr03: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      scr04: require("./assets/Sarang_assets/KeyProjects/Bosten/scr04.png"),
      video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      company: "Boston Dynamics Inspired Quadruped Robot Design",
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      id: 2,
      type: "key",
      role: "Front-End Developer",
      company: "Quora",
      back_img: require("./assets/Sarang_assets/KeyProjects/Quadraped/back.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Quadraped/front.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/Bosten/scr01.png"),
      scr02: require("./assets/Sarang_assets/KeyProjects/Bosten/scr02.png"),
      scr03: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      scr04: require("./assets/Sarang_assets/KeyProjects/Bosten/scr04.png"),
      video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      type: "key",
      role: "Software Engineer Intern",
      company: "Airbnb",
      back_img: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Bosten/front_test.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/Bosten/scr01.png"),
      scr02: require("./assets/Sarang_assets/KeyProjects/Bosten/scr02.png"),
      scr03: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      scr04: require("./assets/Sarang_assets/KeyProjects/Bosten/scr04.png"),
      video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      type: "key",
      role: "Software Engineer Intern",
      company: "Airbnb",
      back_img: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Bosten/front_test.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/Bosten/scr01.png"),
      scr02: require("./assets/Sarang_assets/KeyProjects/Bosten/scr02.png"),
      scr03: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      scr04: require("./assets/Sarang_assets/KeyProjects/Bosten/scr04.png"),
      video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/Sarang_assets/Biped/scr01.png"),
      scr01: require("./assets/Sarang_assets/Biped/scr01.png"),
      scr02: require("./assets/Sarang_assets/Biped/scr02.png"),
      scr03: require("./assets/Sarang_assets/Biped/scr03.png"),
      scr04: require("./assets/Sarang_assets/Biped/scr04.png"),
      vid01: require("./assets/Sarang_assets/Biped/Biped_vid.mp4"),

      projectName: "Design of a Support Frame for Walking Biped Robot ",
      projectDesc:
        "I designed and optimized a mechanical support frame for a biped robot, focusing on achieving smooth and stable planar motion. The structure provides three degrees of freedom and includes a custom built glass frame mechanism at the hip, allowing precise adjustment of tilt and spacing for perfect alignment. To synchronize the motion of the dual frames, I developed a unique ball screw design with opposing hand threads. Through multiple design iterations, I refined the frame to be lighter, stronger, and easier to assemble. The complete system was modeled and documented in SolidWorks, from concept sketches to fabrication ready technical drawings.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/Sarang_assets/Ankle/scr00.png"),
      scr01: require("./assets/Sarang_assets/Ankle/scr01.png"),
      // scr02: require("./assets/Sarang_assets/Ankle/scr02.png"),
      scr02: require("./assets/Sarang_assets/Ankle/scr03.png"),
      scr03: require("./assets/Sarang_assets/Ankle/scr04.png"),
      scr04: require("./assets/Sarang_assets/Ankle/scr05.png"),
      vid01: require("./assets/Sarang_assets/Ankle/Ankle_vid.mp4"),
      projectName: "Desing of an Ankle joint for Biped Robot",
      projectDesc:
        "I developed a mechanically optimized single-axis ankle joint for a biped robot, engineered to deliver strength, precision, and smooth motion. The joint is actuated by a double acting pneumatic actuator, providing ±60° symmetric movement after integrating physical motion constraints to mimic realistic ankle dynamics.To achieve a compact and efficient design, I offset mounted the actuator from the joint axis and refined the structure through iterative design and optimization, ensuring mechanical robustness and manufacturability. The entire assembly was modeled and detailed in SolidWorks, including precise 3D CAD models and fabrication ready drawings.An encoder system was also integrated to capture real time positional feedback of the joint, enabling accurate motion tracking and control during operation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      // image: require("./assets/BigProjects/test03.webp"),
      image: require("./assets/Sarang_assets/CNC_Enclosure/scr01.png"),
      scr01: require("./assets/Sarang_assets/CNC_Enclosure/scr02.png"),
      // scr02: require("./assets/Sarang_assets/Ankle/scr02.png"),
      scr02: require("./assets/Sarang_assets/CNC_Enclosure/scr03.png"),
      scr03: require("./assets/Sarang_assets/CNC_Enclosure/scr04.png"),
      scr04: require("./assets/Sarang_assets/CNC_Enclosure/scr05.png"),
      vid01: require("./assets/Sarang_assets/CNC_Enclosure/frame_vid.mp4"),
      projectName: "Design of an Enclosure for CNC Router 4540",
      projectDesc:
        "I designed and built a sturdy protective enclosure for the CNC Router 4540 using a solid iron extrusion frame to ensure structural rigidity and long-term durability. The enclosure was fitted with acrylic sheets on all sides, except the bottom, to allow natural air circulation while providing full visibility of the machining area.A front access door was integrated, equipped with a handle and magnetic latch for smooth operation and secure closure. To maintain optimal working conditions, I installed an exhaust fan with a duct pipe to efficiently remove dust and heat generated during machining. Since the router is equipped with a laser engraving module, the ventilation system also helps dissipate the additional heat from the laser, ensuring safe and stable performance during operation",
      footerLink: [
        {
          name: "View Project",
          url: "http://nextu.se/"
        }
      ]
    }
    // {
    //   image: require("./assets/BigProjects/test04.webp"),
    //   projectName:
    //     "40W Laser Engraving Module Air Assist and Pump System Modification ",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "View Project",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let’s engineer something awesome, Starting with your message!",
  // number: "+91 9175289138 ",
  email_address: "rahuldpatil17@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  researchInterests,
  educationInfo,
  techStack,
  workExperiences,
  workExperiencesSecond,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  experienceData
};
