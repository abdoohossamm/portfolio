import {Card, IProject, Service, Skill} from "./types";

import { BsCircleFill } from "react-icons/bs";
import {FiAward, FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import {RiComputerLine} from "react-icons/ri";
import {FaServer} from "react-icons/fa";
import {AiOutlineApi} from "react-icons/ai";
import {MdOutlineDesignServices} from "react-icons/md";

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
export const services: Service[] = [
    {
        Icon: FaServer,
        title: "Backend  Development",
        about:
            "Design and handle SQL and NoSQL databases, servers, APIs using <b>Django</b>, <b>Laravel</b>, and <b>Express</b> frameworks",
    },
    {
        Icon: MdOutlineDesignServices,
        title: "Frontend Development",
        about:
            "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>,<b>JS</b> and can use any of the following frameworks <b>React.js</b>, <b>Next.js</b>, and <b>Vue.js</b> ",
    },
    {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
            "I can develop robust REST API using <b>django-rest-framework</b> & <b>Node API</b>",
    },
    {
        Icon: RiComputerLine,
        title: "Microservices Development",
        about:
            "I can develop a microservices application using any <b>frameworks</b> and <b>programming languages</b> for <b>frontend</b> & <b>backend</b> and <b>docker</b> until it's deployed and running on the server.",
    },

];

export const projects: IProject[] = [
    {
        name: "My Portfolio",
        description:
            "This app shows my portfolio for projects I did, my experience, everything up to date about me.",
        image_path: [
            "/images/projects/portfolio/portfolio1.png",
            "/images/projects/portfolio/portfolio2.png",
            "/images/projects/portfolio/portfolio3.png",

        ],
        deployed_url: "https://abdoo.live/",
        github_url: "https://github.com/abdoohossamm/portfolio",
        category: ["react"],
        key_techs: ["React.js", "Next.js", "Tailwind CSS"],
    },

    {
        name: "Dar Al-ahisan",
        image_path: ["/images/projects/dar_al-ahisan.png"],
        deployed_url: "",
        github_url: "https://github.com/abdoohossamm/dar_alahisan",
        category: ["django", "SQL"],
        description:
            "Dar Al-ahisan project is a web application to manage the learning center of Dar Al-ahisan. Managing the students, teachers, and employees",
        key_techs: ["Django","Django templates", "Vanilla JS", "Bootstrap", "Postgres"],
    },

    {
        name: "ChatYou",
        image_path: ["/images/projects/chatYou.png"],
        deployed_url: "",
        github_url: "https://github.com/abdoohossamm/ChatYou",
        category: ["django", "SQL", "NoSQL", "microservices"],
        description:
            "Basic Realtime Chat App where one user with high permission can create a room and talk to other joined the room. or can have 1 to 1 chat with their friends",
        key_techs: ["django", "django rest framework", "REST API", "Web Sockets", "Bootstrap", "Redis"],
    },

    {
        name: "Ecommerce",
        image_path: ["/images/projects/ecommerce.png"],
        deployed_url: "",
        github_url: "https://github.com/abdoohossamm/eCommerce",
        category: ["django", "vue", "microservices", "SQL", "NoSQL",],
        description:
            "Ecommerce website made using django and vueJS running on docker containers and each application run as a microservice.",
        key_techs: ["Vue", "Django", "Django REST API", "PostgreSQL", "Redis", "Docker", "Paypal API"],
    },

    {
        name: "Tri Force UAE",
        image_path: ["/images/projects/triforce.png"],
        deployed_url: "https://tri-force-uae.com/",
        github_url: "",
        category: ["PHP"],
        description:
            "This application is an example for 1 day application as the client wanted it in 1 day so I used WordPress template.",
        key_techs: ["WordPress","PHP" ,"Hostinger"],
    },
    {
        name: "Blango",
        image_path: ["/images/projects/Blango.png"],
        deployed_url: "",
        github_url: "https://github.com/abdoohossamm/blango",
        category: ["react", "django", "SQL"],
        description: "Blango is a blog application made using Django, DRF, React.js. The first introduction for me to the django-rest-framework with Codio courses.",
        key_techs: ["React", "Django", "Django REST API", "SQLite3", "Google Oauth"],
    },

];