import {Card, Skill} from "./types";

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