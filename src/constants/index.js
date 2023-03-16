import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  java,
  express,
  portfolio,
  age_calculator,
  dragon,
  foodie,
  sign_in,
  to_do_list,
  zomato,
  threejs,
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
    title: "Web Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Tech Blogger",
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
    name: "Express JS",
    icon: express,
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
    name: "Java",
    icon: java,
  },
];


const projects = [
  {
    name: "3D Portfolio",
    description:
      "This is an interactive 3d portfolio website developed using ReactJS, ThreeJS and Framer Motion with great 3D effects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/deshmukh-ankit/3D_portfolio",
  },
  {
    name: "To-do list",
    description:
      "Web application that enables users to maintain their order of the day.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: to_do_list,
    source_code_link: "https://github.com/deshmukh-ankit/todolist-react",
  },
  {
    name: "Dragon dino game",
    description:
      "A simple and attractive game made using javascript.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dragon,
    source_code_link: "https://github.com/deshmukh-ankit/dino-game-javascript",
  },
  {
    name: "Zomato landing-page clone",
    description:
      "A landing page clone of popular food ordering application Zomato.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: zomato,
    source_code_link: "https://github.com/deshmukh-ankit/zomato-clone",
  },
  {
    name: "Foodie Restaurant Website",
    description:
      "A simple and user friendly website for a restaurant.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: foodie,
    source_code_link: "https://github.com/deshmukh-ankit/foodie-restaurant-website",
  },
  {
    name: "Sign in page",
    description:
      "A web sign in page made using frontend web technologies with user and password authentication.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: sign_in,
    source_code_link: "https://github.com/deshmukh-ankit/login-form",
  },
  {
    name: "Age Calculator",
    description:
      "A web application that enables user to count their age from an entered date to present day.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: age_calculator,
    source_code_link: "https://github.com/deshmukh-ankit/age-calculator",
  },
];

export { services, technologies, projects };
