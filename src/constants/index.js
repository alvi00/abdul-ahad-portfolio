import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  IEEE,
  Cpc,
  nsu,
  khasro,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Program Associate",
    company_name: "CPC, North South University",
    icon: Cpc,
    iconBg: "#00004d",
    date: "June 2024 - Continuing",
    points: [
      "Developing and improving the CPC portal with better UI, features, and security, integrating job portal and mobile apps.",
      "Supporting B-JET & B-MEET programs and coordinating with Japanese delegates for smooth operations.",
      "Managing CPC’s website, handling IT issues, system maintenance, and updates for continuous operation.",
      "Building corporate relationships, organizing programs, and promoting job vacancies via the CPC website and social media.",
    ],
  },
  {
    title: "Secretary",
    company_name: "IEEE",
    icon: IEEE,
    iconBg: "#00001a",
    date: "July 2023 – Present",
    points: [
      "Led the graphics design team, ensuring high-quality visuals for IEEE NSU events and initiatives.",
      "Coordinated with other teams to create compelling graphics for social media, publications, and promotional materials.",
      "Managed design projects, overseeing timelines and delivering final designs within deadlines.",
      "Mentored and provided guidance to junior designers, fostering a collaborative creative environment.",
    ],
  },
  {
    title: "Student Worker",
    company_name: "Administration Department of North South University",
    icon: nsu,
    iconBg: "#E6DEDD",
    date: "December 2022 - June 2024",
    points: [
      "Providing technical support, including software/hardware assistance.",
      "Managing websites, portal updates, data, and user support.",
      "Handling graphics design and publication compilation.",
      "Overseeing administrative social media, content, metrics, and campaigns.",
      "Analyzing data and managing databases to optimize services.",
      "Corporate communications management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ahad has demonstrated exceptional leadership in improving the CPC portal, ensuring its functionality, and creating impactful designs that truly represent our mission.",
    name: "Prof. Mahammad Khasro Miah, Ph.D",
    designation: "Director",
    company: "Career and Placement Center (CPC)  ",
    mail: "khasro.miah@northsouth.edu",
  },
  {
    testimonial:
      "Working with Ahad has been a pleasure. Their attention to detail and dedication to delivering high-quality results have been invaluable.",
    name: "Saif Ahmed",
    designation: "Lecturer",
    company: "North South University   ",
    mail: "saif.ahmed02@northsouth.edu",
  },
  {
    testimonial:
      "Ahad's innovative approach to managing CPC’s technical needs and their commitment to excellence have significantly enhanced our services.",
    name: "Syed Mahmud Husain",
    designation: "Adjunct Faculty Member",
    company: "North South University ",
    mail: "syed.husain@northsouth.edu",
  },
  {
    testimonial:
      "Ahad's ability to lead design initiatives and manage technical challenges has been instrumental in elevating our projects' success.",
    name: "Riasat Khan",
    designation: "Associate Professor",
    company: "North South University   ",
    mail: "riasat.khan@northsouth.edu",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
