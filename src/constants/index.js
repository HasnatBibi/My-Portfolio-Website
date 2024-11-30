import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import cybersecurity from "../assets/certifications/cybersecurity.png";
import erozgar from "../assets/certifications/erozgar.png";
import website from "../assets/certifications/website.png";
import project from "../assets/certifications/project.png";
import ecommerce from "../assets/certifications/Ecommerce.png";

export const HERO_CONTENT = `I thrive on transforming ideas into visually stunning and user-friendly digital experiences. I craft responsive, intuitive, and engaging interfaces that bring value to users. Let's collaborate to bring innovation and creativity to life!`;

export const ABOUT_TEXT = `🚀 Expert in: <br><br>

🌐 Full Stack Development <br>
🌟 Python - Django <br>
🌐 HTML, CSS, JS, React<br>
🔗 API Development and Integration <br>
🗄️ MySQL, SQLite <br>
🎨 Bootstrap, Tailwind CSS <br>
🖌️ PSD/Figma to HTML, CSS, Bootstrap <br>
📱 Responsive Web Design <br>
📱 Customized Websites <br>
🔄 Git/Github <br>
🖥️ Graphic Designing (Canva, Animaker) <br>
🎨 UI/UX Design Consulting <br>`;
export const EXPERIENCES = [
  {
    year: "Nov.2024 - Present",
    role: "Front End Developer",
    company: "Tech Vexa",
    description: `Responsible for creating interactive user interfaces and maintaining web applications using JavaScript, React.js, and Tailwind CSS. Collaborated with the team to implement Responsive and user-friendly websites, ensuring seamless communication between the front-end and back-end components..`,
    technologies: ["HTML", "CSS", "JS", "React"],
  },
  {
    year: "Nov.2024 - Present",
    role: "Lecturer (Computer Science)",
    company: "Government Associate Degree College",
    description: `Instruct and mentor students in various computer science subjects, including Operating Systems, Database Management, and Digital Logic Design. Prepare course materials and provide hands-on labs, ensuring students gain practical skills for future careers in technology.`,
    technologies: ["OS", "DB", "PF", "DLD"],
  },
  {
    year: "Dec.2023 - Present",
    role: "Full Stack Developer",
    company: "Upwork",
    description: `Developed and maintained dynamic web applications using JavaScript, React.js, and Tailwind CSS along with Python and Django for backend integration. Created and consumed RESTful APIs to enable data exchange and collaborated with cross-functional teams to deliver high-quality software products.`,
    technologies: ["HTML", "CSS", "JS","Django"],
  },
  {
    year: "Feb.2024 - April 2024",
    role: "Front End Web Developer",
    company: "DigiSphare Labs",
    description: `Contributed to the development of responsive and user-friendly web applications using JavaScript, React.js, and Bootstrap. Focused on creating efficient layouts, enhancing UI performance, and working closely with product managers to implement features based on user needs and feedback.`,
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "E-Rozgar Web Development Certificate",
    image: erozgar,
    link:"https://portal-erozgaar.pitb.gov.pk/Online_Certificate.aspx"
  },
  {
    title: "Cyber Security Tools and Cyber Attacks",
    image: cybersecurity,
    link:"https://coursera.org/verify/83E2U9VGUQSY "
  },
  {
    title: "Introduction to Project Managment",
    image: project,
    link:"https://coursera.org/verify/923JMR28ZB93 "
  },
  {
    title: "Foundations Of Digital Marketing and E-commerce",
    image: ecommerce,
    link:"https://coursera.org/verify/KS6FCKENM64G "
  },
  {
    title: "Building a website using WordPress",
    image: website,
    link:"https://coursera.org/verify/NQMSXTVC4CHG "
  },
];  



export const PROJECTS = [
  {
    title: "Campus Management System",
    image: project1,
    description:
      " Through HTML, CSS, JavaScript, Bootstrap, and Django, I ensured smooth navigation and functionality for all users. From administrative tasks to student queries, this system streamlines campus operations with ease and efficiency. The system is also user-friendly",
    technologies: ["HTML", "CSS", "JS", "Django"],
  },
  {
    title: "College Website",
    image: project2,
    description:
      "Designing a user-friendly college website was an exciting challenge I took on, crafting it with HTML, CSS, JS, and Bootstrap. Using a blend of these technologies, I ensured smooth navigation and visually appealing layouts for students, faculty, and visitors alike.",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
  },
  {
    title: "Calculator App",
    image: project3,
    description:
      "Calculator app, developed using HTML, CSS, and JavaScript, delivers both functionality and elegance. With its clean interface and responsive design, users can easily perform basic arithmetic operations. The app features a user-friendly layout, ensuring smooth interaction and quick results.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Tic Tac Toe Game",
    image: project4,
    description:
      "A classic Tic Tac Toe game developed with HTML, CSS, and JavaScript. This game allows players to enjoy a traditional grid-based challenge with a modern touch. The game features a clean, intuitive interface designed with responsive styling and logic, ensuring a smooth and enjoyable user experience.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "DigiSphare Labs Website",
    image: project4,
    description:
      "A clean and user-friendly website developed with HTML, CSS, and JavaScript. Using a blend of these technologies, I ensured smooth navigation and visually appealing layouts for students, faculty, and visitors alike.",
    technologies: ["HTML", "CSS", "Javascript" , "Bootstrap"],
  },
];




export const EDUCATIONS = [
  {
    year: "2019 - 2023",
    dep: "BS (Information Technology)",
    institute: "University of the Punjab",
    grade: `CGPA : 3.64/4.00`,
    subjects: `DLD , Web Engineering, Software Engineering, Operating System, Database Systems`
  },
  {
    year: "2017 - 2019",
    dep: "FCS - Faculty of Computer Science",
    institute: "FG PostGraduate College for Women , Wah Cantt",
    grade: `Marks : 851/1100`,
    subjects: `Computer,Maths,Physics`
  },
  {
    year: "2015 - 2017",
    dep: "Matriculation - Computer Science",
    institute: "FG Girls High School No.1, Wah Cantt",
    grade: `Marks : 957/1050`,
    subjects: `Computer,Maths,Physics`
  }
]