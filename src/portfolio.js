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
      video_ref: "/videos/bosten_vid.mp4",
      company: "Boston Dynamics Inspired Quadruped Robot Design",
      date: "June 2018 – Present",
      desc: "Modeled a quadruped robot in SolidWorks to explore legged locomotion mechanics, incorporating actuated joints and provisions for future sensor integration.",
      description:
        "This project focused on exploring the mechanical design principles of quadruped robots through 3D modeling in SolidWorks. Inspired by existing legged robot systems, I created a conceptual model to understand how such robots are structurally designed and mechanically balanced.The model was built using estimated proportions and dimensions, emphasizing realistic joint placement and leg motion. I integrated actuators at the hip and knee joints to visualize functional movement and study kinematic relationships between the limbs. The structure was also designed with space for sensors and electronic components, reflecting how practical implementations accommodate control systems.This project helped me gain insight into robotic leg mechanics, motion symmetry, and the design logic behind quadruped locomotion."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      id: 2,
      type: "key",
      role: "Quadruped Robot Design for Uneven Terrain ",
      company: "Quadruped Robot Design for Uneven Terrain ",
      back_img: require("./assets/Sarang_assets/KeyProjects/Quadraped/back.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Quadraped/front.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/Quadraped/scr01.png"),
      scr02: require("./assets/Sarang_assets/KeyProjects/Quadraped/scr02.png"),
      // scr06: require("./assets/Sarang_assets/KeyProjects/Quadraped/scr03.png"),
      // scr05: require("./assets/Sarang_assets/KeyProjects/Quadraped/scr04.png"),
      // scr03: require("./assets/Sarang_assets/KeyProjects/Quadraped/scr05.png"),
      scr04: require("./assets/Sarang_assets/KeyProjects/Quadraped/scr06.png"),
      video_ref: "/videos/quarduped_vid.mp4",
      date: "May 2017 – May 2018",
      desc: "Designed a quadruped robot with adaptive leg mechanisms capable of moving smoothly over uneven terrain, climbing stairs, and maintaining balance during motion.",
      description:
        "This project focused on the design and development of a quadruped robot capable of navigating uneven and rough terrains with smooth, stable motion. The goal was to create a mechanically efficient and balanced structure that could adapt to different environments while maintaining stability and payload capacity.The leg and actuator mechanisms were carefully engineered to enable the robot to climb stairs and carry small payloads, simulating real-world operational challenges. The design incorporated joint articulation and structural flexibility, allowing the robot to maintain balance, absorb shocks, and recover posture automatically after disturbances.The robot concept was developed with potential applications in disaster response, medical assistance, and rescue operations, where autonomous mobility and stability are crucial. The project emphasized mechanical design innovation, functional simulation, and groundwork for future integration of sensors and control systems."
    },
    {
      id: 3,
      type: "key",
      role: "3D Boat Modeling and Design",
      company: "3D Boat Modeling and Design ",
      back_img: require("./assets/Sarang_assets/KeyProjects/Boat/back.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Boat/front.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/Boat/scr01.png"),
      scr02: require("./assets/Sarang_assets/KeyProjects/Boat/scr02.png"),
      scr03: require("./assets/Sarang_assets/KeyProjects/Boat/scr03.png"),
      scr04: require("./assets/Sarang_assets/KeyProjects/Boat/scr04.png"),
      video_ref: "/videos/boat_vid.mp4",
      date: "Jan 2015 – Sep 2015",
      desc: "This project focused on designing a 3D boat model in SolidWorks to explore complex surface modeling techniques and achieve a realistic, hydrodynamic form.",
      description:
        "This project involved the conceptual design and 3D modeling of a boat in SolidWorks, focusing on achieving a hydrodynamic and visually realistic structure. The design process began by establishing multiple reference planes to accurately define the complex hull and deck geometry, ensuring proportional balance and smooth curvature.A combination of Loft and Sweep features was used to create fluid surface transitions and maintain surface continuity across the hull. Both surface and solid modeling techniques were employed to refine the boat’s contours and achieve an efficient, streamlined shape suitable for water dynamics.Additionally, I modeled interior components, including the seat and steering wheel, with attention to ergonomic placement and spatial arrangement. This project helped deepen my understanding of surface modeling, design aesthetics, and functional geometry in marine design applications."
    },
    {
      id: 4,
      type: "key",
      role: "Gearless Power Transmission Device  ",
      company: "Gearless Power Transmission Device  ",
      back_img: require("./assets/Sarang_assets/KeyProjects/GearlessPT/back.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/GearlessPT/front.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/GearlessPT/scr01.png"),
      scr02: require("./assets/Sarang_assets/KeyProjects/GearlessPT/scr02.jpeg"),
      scr03: require("./assets/Sarang_assets/KeyProjects/GearlessPT/scr03.png"),
      scr04: require("./assets/Sarang_assets/KeyProjects/GearlessPT/src04.jpeg"),
      // video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      date: "Jan 2015 – Sep 2015",
      desc: "A minor project focused on studying and designing a simple gearless power transmission setup to understand motion transfer without using conventional gears.",
      description:
        "This minor project involved the design and study of a gearless power transmission system, aimed at understanding how mechanical motion can be transmitted without traditional gear mechanisms. The system was designed to transfer motion smoothly and efficiently, reducing basic energy losses caused by friction.Through simulation and analysis, I evaluated the system’s performance and motion characteristics, gaining practical insights into how linkages and couplings can be used to achieve power transmission. The design was also refined for compactness and durability, emphasizing ease of assembly and operation.This project served as an effective introduction to mechanical motion transfer concepts and the fundamentals of mechanism design."
    }
  ]
};
const workExperiencesSecond = {
  display: true,
  experience: [
    {
      id: 5,
      type: "key",
      role: "Kinematic and Dynamic Analysis of a Robotic Joint",
      company: "Kinematic and Dynamic Analysis of a Robotic Joint",
      back_img: require("./assets/Sarang_assets/KeyProjects/Analysis/back.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Analysis/front.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/Analysis/scr01.png"),
      // scr02: require("./assets/Sarang_assets/KeyProjects/Bosten/scr02.png"),
      // scr03: require("./assets/Sarang_assets/KeyProjects/Bosten/scr03.png"),
      // scr04: require("./assets/Sarang_assets/KeyProjects/Bosten/scr04.png"),
      // video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      date: "June 2018 – Present",
      desc: "Analyzed the motion characteristics of a robotic joint by computing position, velocity, and acceleration profiles using kinematic equations and MATLAB visualization.",
      description:
        "This project focused on the kinematic and dynamic analysis of a single robotic joint, with the goal of studying its motion smoothness and trajectory performance over time. Using given motion parameters — θ₀ = 120°, θf = 90°, θ̇₀ = 5°/s, θ̇f = –3°/s, t₀ = 0 s, and tf = 3 s — I implemented kinematic equations to calculate the joint’s position, velocity, and acceleration trajectories throughout its motion.The results were plotted as θ(t), θ̇(t), and θ̈(t) versus time, allowing for detailed observation of joint behavior, motion transitions, and smoothness of operation. To better understand system response, I also created MATLAB visualization scripts to study how varying control inputs and boundary conditions affect the manipulator’s dynamic performance.This project strengthened my understanding of robot joint kinematics, motion profiling, and trajectory validation techniques commonly applied in robotic motion planning and control analysis."
    },
    {
      id: 6,
      type: "key",
      role: "Turtlesim Shape Drawing using ROS (Python)",
      company: "Turtlesim Shape Drawing using ROS (Python)",
      back_img: require("./assets/Sarang_assets/KeyProjects/Turtlesim/back.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Turtlesim/front.png"),
      scr01: require("./assets/Sarang_assets/KeyProjects/Turtlesim/scr01.png"),
      scr02: require("./assets/Sarang_assets/KeyProjects/Turtlesim/scr02.png"),
      scr03: require("./assets/Sarang_assets/KeyProjects/Turtlesim/scr03.png"),
      // scr04: require("./assets/Sarang_assets/KeyProjects/Bosten/scr04.png"),
      // video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      date: "May 2017 – May 2018",
      desc: "Programmed the ROS Turtlesim simulator to draw geometric patterns while learning motion control, node communication, and coordinate-based movement.",
      description:
        "This project involved programming and controlling the Turtlesim simulator in ROS to perform motion-based tasks such as drawing shapes including squares, triangle, and star. I developed ROS nodes using publishers and subscribers to control the turtle’s motion by sending velocity and position commands in real time.The project applied basic motion planning, coordinate control, and path-following concepts to generate smooth trajectories for each shape. It also helped strengthen my understanding of ROS communication architecture, including node interaction, topic publishing, and message exchange.Through this exercise, I gained hands-on experience in ROS-based motion control, trajectory generation, and the fundamentals of robot simulation environments."
    },
    {
      id: 7,
      type: "key",
      role: "Embedded Systems and Interfacing",
      company: "Embedded Systems and Interfacing",
      back_img: require("./assets/Sarang_assets/KeyProjects/Embedded/back.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/Embedded/front.png"),
      sections: [
        {
          title: "LCD Interfacing",
          images: [
            require("./assets/Sarang_assets/KeyProjects/Embedded/scr01.png"),
            require("./assets/Sarang_assets/KeyProjects/Embedded/scr02.png")
          ]
        },
        {
          title: "PWM Control",
          images: [
            require("./assets/Sarang_assets/KeyProjects/Embedded/scr03.png"),
            require("./assets/Sarang_assets/KeyProjects/Embedded/scr04.png")
          ]
        },
        {
          title: "Seven Segment Display Interfacing",
          images: [
            require("./assets/Sarang_assets/KeyProjects/Embedded/scr05.png"),
            require("./assets/Sarang_assets/KeyProjects/Embedded/scr06.png"),
            require("./assets/Sarang_assets/KeyProjects/Embedded/scr07.png"),
            require("./assets/Sarang_assets/KeyProjects/Embedded/scr08.png")
          ]
        }
      ],
      // video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      date: "Jan 2015 – Sep 2015",
      desc: "Designed and tested multiple microcontroller interfacing modules, including LCD, PWM, and Seven Segment Display systems, to control and display real-time data.",
      description:
        "This project focused on developing and testing fundamental microcontroller interfacing techniques for real-time control and data display applications. I implemented LCD interfacing to present sensor readings and system parameters, ensuring reliable communication between hardware components.Using Pulse Width Modulation (PWM), I developed control algorithms for motor speed regulation and LED brightness modulation, demonstrating the use of microcontroller-based analog control. Additionally, I designed and tested Seven Segment Display (SSD) interfacing to display numeric outputs and system status indications.Through this project, I gained hands-on experience in embedded system programming, signal control, and hardware interfacing, strengthening my foundation in microcontroller-based automation and instrumentation."
    },
    {
      id: 8,
      type: "key",
      role: "Virtual Smart Plant Monitor and Servo Control System ",
      company: "Virtual Smart Plant Monitor and Servo Control System ",
      back_img: require("./assets/Sarang_assets/KeyProjects/PlantMonitor/back.png"),
      companylogo: require("./assets/Sarang_assets/KeyProjects/PlantMonitor/front.png"),
      // video_ref: require("./assets/Sarang_assets/KeyProjects/Bosten/bosten_vid.mp4"),
      date: "Jan 2015 – Sep 2015",
      sections: [
        {
          title: "Plant Monitoring System",
          images: [
            require("./assets/Sarang_assets/KeyProjects/PlantMonitor/scr02.png"),
            require("./assets/Sarang_assets/KeyProjects/PlantMonitor/scr01.png")
          ]
        },
        {
          title: "Servo Control System",
          images: [
            require("./assets/Sarang_assets/KeyProjects/PlantMonitor/scr03.png"),
            require("./assets/Sarang_assets/KeyProjects/PlantMonitor/scr04.png"),
            require("./assets/Sarang_assets/KeyProjects/PlantMonitor/scr05.png")
          ]
        }
      ],
      desc: "Built a virtual smart plant monitoring system with Arduino, using sensor feedback and a potentiometer to simulate environmental input and control automated watering via a servo.",
      description:
        "This project involved developing a Virtual Smart Plant Monitoring System that simulates environmental sensing and automated watering through sensor feedback control logic. The system conceptually mimics real-world smart irrigation by monitoring input signals and actuating responses based on environmental conditions.A potentiometer was interfaced with an Arduino UNO to simulate sensor input, which was used to modulate a servo motor’s position through an analog signal. This setup represented how soil moisture data can control a watering mechanism in automated plant systems.The project provided hands-on experience with Arduino interfacing, analog-to-digital signal processing, and feedback-based actuation, offering practical insights into the design and logic of smart automation systems"
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
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/Sarang_assets/Biped/scr01.png"),
      scr01: require("./assets/Sarang_assets/Biped/scr01.png"),
      scr02: require("./assets/Sarang_assets/Biped/scr02.png"),
      scr03: require("./assets/Sarang_assets/Biped/scr03.png"),
      scr04: require("./assets/Sarang_assets/Biped/scr04.png"),
      vid01: "/videos/Biped_vid.mp4",

      projectName: "Design of a Support Frame for Walking Biped Robot ",
      projectDesc:
        "This project focuses on the design and optimization of a mechanical support frame for a biped robot, developed to enable stable and controlled walking motion on a treadmill in a single plane. The frame provides three degrees of freedom, allowing the robot to move naturally while maintaining its balance during locomotion experiments. A dual glass frame mechanism is integrated at the hip level, serving two key purposes: it provides lateral support to prevent the robot from falling sideways and also allows clear side-view observation of the robot’s gait and joint movement during treadmill walking.This transparent setup helps in motion analysis, calibration, and visual study of bipedal locomotion.To coordinate the glass frame movement, I designed a custom ball screw system with opposing hand threads, connected via coupling. Rotating the handle causes the two glass frames to move symmetrically closer or farther apart, ensuring precise alignment and adjustable spacing for different robot configurations. The structure was fully modelled and optimized in SolidWorks, with constraints applied to simulate real motion behaviour. Multiple design iterations focused on simplifying the assembly, achieving symmetry, and improving load distribution. Material selection was made based on stress and load analysis to ensure structural rigidity without excessive weight. The system is currently under fabrication, transitioning from digital design to a working prototype. Working on this project has allowed me to apply core mechanical design principles to a real robotic system, combining theory, CAD modeling, and practical prototyping.",
      // projectDesc:
      //   "I designed and optimized a mechanical support frame for a biped robot, focusing on achieving smooth and stable planar motion. The structure provides three degrees of freedom and includes a custom built glass frame mechanism at the hip, allowing precise adjustment of tilt and spacing for perfect alignment. To synchronize the motion of the dual frames, I developed a unique ball screw design with opposing hand threads. Through multiple design iterations, I refined the frame to be lighter, stronger, and easier to assemble. The complete system was modeled and documented in SolidWorks, from concept sketches to fabrication ready technical drawings.",
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
      vid01: "/videos/Ankle_vid.mp4",
      projectName:
        "Design of Pneumatically Actuated Foot and Ankle Joint Assembly for a Biped Robot",
      projectDesc:
        "I developed and fabricated a mechanically optimized single-axis ankle joint for a biped robot, designed to provide smooth, symmetric, and human-like motion. The joint delivers ±60° up–down articulation using a double-acting pneumatic actuator, which allows controlled torque output while maintaining precision and responsiveness during operation. The initial version of the design features an offset-mounted actuator, which was chosen to maintain compactness and avoid interference with other lower limb components. This configuration enabled efficient force transmission and easy integration with the robot’s existing structure. To ensure durability and functional symmetry, I applied motion constraints that mimic realistic ankle behaviour, offering smooth transition through both dorsiflexion and plantarflexion phases. Through several design iterations and simulations, the structure was refined for lightweight performance, load-bearing capacity, and manufacturability. The entire system was modelled and assembled in SolidWorks, complete with fabrication-ready 3D CAD models and engineering drawings. The design was later successfully fabricated and tested, validating its mechanical performance and motion range. An encoder system was incorporated to provide real-time positional feedback, enabling accurate joint angle monitoring and facilitating future control integration. The feedback mechanism also supports data collection for gait analysis and motion control optimization during robotic walking experiments. Building on this foundation, I am now developing an improved second version of the ankle joint where the pneumatic actuator is mounted in line with the ankle axis. This configuration more closely replicates natural human ankle movement, allowing the actuator to function in the same vertical plane as the foot motion. The new design aims to further enhance biomechanical accuracy, efficiency, and aesthetic alignment with human gait patterns. This project demonstrates the complete cycle of conceptual design, simulation, fabrication, and iterative improvement, merging mechanical engineering and robotics to achieve functional and realistic robotic locomotion.",
      // projectDesc:
      //   "I developed a mechanically optimized single-axis ankle joint for a biped robot, engineered to deliver strength, precision, and smooth motion. The joint is actuated by a double acting pneumatic actuator, providing ±60° symmetric movement after integrating physical motion constraints to mimic realistic ankle dynamics.To achieve a compact and efficient design, I offset mounted the actuator from the joint axis and refined the structure through iterative design and optimization, ensuring mechanical robustness and manufacturability. The entire assembly was modeled and detailed in SolidWorks, including precise 3D CAD models and fabrication ready drawings.An encoder system was also integrated to capture real time positional feedback of the joint, enabling accurate motion tracking and control during operation.",
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
      vid01: "/videos/frame_vid.mp4",
      projectName: "Design of an Enclosure for CNC Router 4540",
      projectDesc:
        "I designed a protective enclosure for the CNC Router 4540 to ensure operator safety, thermal control, and dust containment during machining and laser engraving operations. The enclosure was developed entirely in SolidWorks, with careful attention to space utilization, structural rigidity, and ease of assembly. The design features a solid iron extrusion frame, selected for its superior strength and vibration resistance, ensuring long-term durability and stability during continuous machine operation. To achieve a balance between protection and visibility, I incorporated acrylic sheets on all sides of the frame, except the bottom, which was left open to allow natural air circulation and reduce heat buildup. The transparent panels offer full visibility of the machining process, enabling real-time monitoring without compromising safety. I also designed mounting interfaces and allowances around the router body to accommodate its actuation range, tool movement, and wiring paths while maintaining compactness and symmetry. A front access door was integrated into the design, fitted with a handle and magnetic latch system to ensure both smooth operation and a secure seal when closed. This feature allows quick access for tool changes, cleaning, and maintenance while minimizing external exposure to dust and laser light. To maintain a clean and temperature-stable environment inside the enclosure, I included an exhaust fan with a duct pipe, effectively removing dust particles, machining debris, and heat generated during extended use. Since the CNC router is equipped with a laser engraving module, the ventilation system was strategically positioned to enhance heat dissipation from the laser’s active area, improving both safety and engraving precision. The final design strikes a balance between robust construction and functional aesthetics, providing both protective coverage and a professional appearance suitable for laboratory or workshop use. Through this project, I strengthened my understanding of mechanical enclosure design, ergonomic access planning, and heat management principles in precision machining systems. The enclosure is currently under fabrication based on the finalized CAD models and engineering drawings, marking a step toward a practically implementable and safe CNC operating setup.",
      // projectDesc:
      //   "I designed and built a sturdy protective enclosure for the CNC Router 4540 using a solid iron extrusion frame to ensure structural rigidity and long-term durability. The enclosure was fitted with acrylic sheets on all sides, except the bottom, to allow natural air circulation while providing full visibility of the machining area.A front access door was integrated, equipped with a handle and magnetic latch for smooth operation and secure closure. To maintain optimal working conditions, I installed an exhaust fan with a duct pipe to efficiently remove dust and heat generated during machining. Since the router is equipped with a laser engraving module, the ventilation system also helps dissipate the additional heat from the laser, ensuring safe and stable performance during operation.",
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
  title: emoji("Contact Me "),
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
