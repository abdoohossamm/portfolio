import {Card, IProject, Skill} from "./types";

import { BsCircleFill } from "react-icons/bs";
import {FiAward, FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

export const languages: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Python",
        level: "90",
    },
    {
        Icon: BsCircleFill,
        name: "Django",
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "DjangoRestFramework",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "JavaScript",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "ReactJS",
        level: "50",
    },
    {
        Icon: BsCircleFill,
        name: "PHP",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "Laravel",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "TailwindCSS",
        level: "80",
    },
];

export const tools: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Docker",
        level: "75",
    },
    {
        Icon: BsCircleFill,
        name: "MS Azure",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "REST APIs",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "Framer",
        level: "45",
    },
];

export const cards: Card[] = [
    {
        Icon: FiAward,
        name: "Experience",
        description: "2+ Years Working",
    },
    {
        Icon: FiUsers,
        name: "Clients",
        description: "10+ Worldwide",
    },
    {
        Icon: VscFolderLibrary,
        name: "Projects",
        description: "50+ Completed",
    },
];

export const projects: IProject[] = [
    {
        name: "My Portfolio",
        description:
            "This app shows my portfolio for projects I did, my experience, everything up to date about me.",
        image_path: "/images/portfolio.png",
        deployed_url: "https://abdoo.live/",
        github_url: "https://github.com/abdoohossamm/portfolio",
        category: ["react"],
        key_techs: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
        name: "Smart Gates AlexUniv",
        image_path: "/images/sartgate.jpg",
        deployed_url: "",
        github_url: "",
        category: ["django", "SQL"],
        description:
            "This project was a multiply applications with 7 servers the applications connected to them. The core of the project was to make a smart gates for the students inside the campus.",
        key_techs: ["IT support", "system administration", "django", "microservices", "PostgreSQL"],
    },

    {
        name: "Dar Al-ahisan",
        image_path: "/images/dar_al-ahisan.jpg",
        deployed_url: "",
        github_url: "https://github.com/abdoohossamm/dar_alahisan",
        category: ["django", "SQL"],
        description:
            "Dar Al-ahisan project is a web application to manage the learning center of Dar Al-ahisan. Managing the students, teachers, and employees",
        key_techs: ["Django","Django templates", "Vanilla JS", "Bootstrap", "Postgres"],
    },

    {
        name: "ChatYou",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://sumit-chat.netlify.app/",
        github_url: "https://github.com/abdoohossamm/ChatYou",
        category: ["react", "django", "SQL", "NoSQL"],
        description:
            "Basic Realtime Chat App where one can create a room can talk to each other",
        key_techs: ["django", "django rest framework", "REST API", "Web Sockets", "Bootstrap", "Redis"],
    },

    {
        name: "Ecommerce",
        image_path: "/images/ecommerce.jpg",
        deployed_url: "",
        github_url: "https://github.com/abdoohossamm/eCommerce",
        category: ["django", "vue", "microservices", "SQL", "NoSQL",],
        description:
            "Ecommerce website made using django and vueJS running on docker containers and each application run as a microservice application.",
        key_techs: ["Vue", "Django", "Django REST API", "PostgreSQL", "Redis", "Docker"],
    },

];