import {Card, IProject, Service, Skill} from "./types";
import {FiAward, FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import {RiComputerLine} from "react-icons/ri";
import {FaDocker, FaLaravel, FaNodeJs, FaPhp, FaPython, FaReact, FaServer, FaVuejs} from "react-icons/fa";
import {AiFillGithub, AiOutlineApi, AiOutlineConsoleSql} from "react-icons/ai";
import {MdDeveloperMode, MdEngineering, MdOutlineDesignServices} from "react-icons/md";
import {
    SiCplusplus, SiDatabricks,
    SiDjango,
    SiExpress,
    SiJavascript,
    SiMicrosoftazure, SiMongodb, SiNextdotjs, SiPostgresql, SiRedis,
    SiTailwindcss, SiTextpattern,
    SiTypescript
} from "react-icons/si"
import {BiGitCompare, BiNetworkChart} from "react-icons/bi";
import {TbApi} from "react-icons/tb";
import {ImGit} from "react-icons/im";
import {DiGoogleAnalytics, DiLinux} from "react-icons/di";
import {GiTestTubes} from "react-icons/gi";
import { FaGolang, FaJava } from "react-icons/fa6";
import { SiScylladb, SiRabbitmq } from "react-icons/si";

export const languages: Skill[] = [
    {
        Icon: FaPython,
        name: "Python",
        level: "90",
    },
    {
        Icon: SiDjango,
        name: "Django",
        level: "85",
    },
    {
        Icon: TbApi,
        name: "Django REST API",
        level: "80",
    },
    {
        Icon: FaGolang,
        name: "Golang",
        level: "85",
    },
    {
        Icon: SiJavascript,
        name: "JavaScript",
        level: "80",
    },
    {
        Icon: SiTypescript,
        name: "TypeScript",
        level: "70",
    },
    {
        Icon: FaNodeJs,
        name: "NodeJS",
        level: "80",
    },
    {
        Icon: SiExpress,
        name: "ExpressJS",
        level: "70",
    },
    {
        Icon: FaReact,
        name: "ReactJS",
        level: "70",
    },
    {
        Icon: SiNextdotjs,
        name: "NextJS",
        level: "70",
    },
    {
        Icon: FaJava,
        name: "Java",
        level: "70",
    },
    {
        Icon: SiTailwindcss,
        name: "TailwindCSS",
        level: "80",
    },
    {
        Icon: AiOutlineConsoleSql,
        name: "SQL",
        level: "80",
    },
];

export const tools: Skill[] = [
    {
        Icon: FaDocker,
        name: "Docker",
        level: "75",
    },
    {
        Icon: SiMicrosoftazure,
        name: "Azure",
        level: "60",
    },
    {
        Icon: AiOutlineApi,
        name: "REST APIs",
        level: "70",
    },
    {
        Icon: ImGit,
        name: "GIT",
        level: "80",
    },
    {
        Icon: AiFillGithub,
        name: "GitHub",
        level: "80",
    },
    {
        Icon: BiGitCompare,
        name: "CI/CD",
        level: "60",
    },
    {
        Icon: DiLinux,
        name: "Unix/Linux",
        level: "85",
    },
    {
        Icon: SiPostgresql,
        name: "PostgreSQL",
        level: "70",
    },
    {
        Icon: SiRedis,
        name: "Redis",
        level: "60",
    },
    {
        Icon: SiMongodb,
        name: "MongoDB",
        level: "60",
    },
    {
        Icon: SiScylladb,
        name: "Scylladb",
        level: "70",
    },
    {
        Icon: SiRabbitmq,
        name: "Rabbitmq",
        level: "60",
    },
];

export const otherSkills: Skill[] = [
    {
        Icon: DiGoogleAnalytics,
        name: "Algorithm Analysis",
        level: "70",
    },
    {
        Icon: SiDatabricks,
        name: "Data Structure",
        level: "65",
    },
    {
        Icon: MdEngineering,
        name: "Software Engineering",
        level: "80",
    },
    {
        Icon: SiTextpattern,
        name: "MVC pattern",
        level: "75",
    },
    {
        Icon: BiNetworkChart,
        name: "Agile (Scrum)",
        level: "70",
    },
    {
        Icon: GiTestTubes,
        name: "Test Driven Development",
        level: "80",
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
        description: "30+ Completed",
    },
];
export const services: Service[] = [
    {
        Icon: MdOutlineDesignServices,
        title: "Software engineering",
        about:
            "With more than 3 years in tech companies as software engineer, and more than 1 year managing teams in 2 companies, I also has experience <b>designing software</b>, <b>choose the proper tools to build that software</b>, <b>choose and design its database</b>, <b>design the software architecture</b> to make it easy to maintain, scalable.",
    },
    {
        Icon: MdOutlineDesignServices,
        title: "DevOps Engineering",
        about:
            "I have experience designing a DevOps architecture for companies, creating CI/CD pipeline with <b>GitHub actions</b>, <b>Jenkins</b>, I also have experience working with the following cloud providers <b>DigitalOcean</b>, <b>AWS</b>, <b>Azure</b>, also I can build an <b>Infrastructure as code</b> using many tools.",
    },
    {
        Icon: FaServer,
        title: "Backend Development",
        about:
            "Design and handle SQL and NoSQL databases, servers, APIs using <b>Django</b>, <b>Laravel</b>, and <b>Express</b> frameworks",
    },
    {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
            "I can develop robust REST API using <b>django</b>, <b>FastAPI</b>, <b>Golang(fiberAPI, Gin)</b>, <b>NodeJs(ExpressJS)</b>",
    },
    {
        Icon: RiComputerLine,
        title: "Microservices Development",
        about:
            "I can develop a microservices application using any <b>frameworks</b> and <b>programming languages</b> for <b>frontend</b> & <b>backend</b> and <b>docker</b> until it's deployed and running on the server.",
    },
    {
        Icon: MdDeveloperMode,
        title: "Competitive Engineer",
        about: "A problem solver in <a class='text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-600' href='https://leetcode.com/abdoohossamm/' target='_blank'><b>LeetCode</b></a> & <a class='text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-600' href='https://www.hackerrank.com/abdoohossamm?hr_r=1' target='_blank'><b>HackerRank</b></a> with good ranks in leetcode contest",
    },
    // {
    //     Icon: AiFillYoutube,
    //     title: "Youtuber",
    //     about: "Nothing yet",
    // },
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
        image_path: [
            "/images/projects/ecommerce/ecommerce1.png",
            "/images/projects/ecommerce/ecommerce2.png",
            "/images/projects/ecommerce/ecommerce3.png",
            "/images/projects/ecommerce/ecommerce4.png",
            "/images/projects/ecommerce/ecommerce5.png"
        ],
        deployed_url: "",
        github_url: "https://github.com/abdoohossamm/eCommerce",
        category: ["django", "vue", "microservices", "SQL", "NoSQL",],
        description:
            "Ecommerce website made using django and vueJS running on docker containers and each application run as a microservice.",
        key_techs: ["Vue", "Django", "Django REST API", "PostgreSQL", "Redis", "Docker", "Paypal API"],
    },

    {
        name: "Tri Force UAE",
        image_path: [
            "/images/projects/triforce/triforce1.png",
            "/images/projects/triforce/triforce2.png",
        ],
        deployed_url: "https://tri-force-uae.com/",
        github_url: "",
        category: ["PHP"],
        description:
            "This application is an example for 1 day application as the client wanted it in 1 day so I used WordPress template.",
        key_techs: ["WordPress","PHP" ,"Hostinger"],
    },
    {
        name: "Smart Gates AlexUniv",
        image_path: [
            "/images/projects/smartGate/smartGate1.png",
            "/images/projects/smartGate/smartGate2.png",
        ],
        deployed_url: "",
        github_url: "",
        category: ["django", "microservices", "SQL"],
        description:
            "This project is made for Alexandria university to control the gate and count the students inside the campus for later analysis.\n Create and manage the students cards and print it and contact with other services to get and send data between them.",
        key_techs: ["Django","Django Rest API" , "Microservices", "Selenium", "System Administration", "IT support"],
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
