import { IconType } from "react-icons";
export interface Service {
    Icon: IconType;
    title: string;
    about: string;
}

export interface Skill {
    Icon: IconType;
    name: string;
    level: string;
}

export interface Card {
    Icon: IconType;
    name: string;
    description: string;

}

export type Category = "react" | "node" | "express" | "django" | "mongo" | "postgres" | "docker";