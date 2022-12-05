import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsNavbar from "./ProjectsNavbar";
import { projects as projectsData } from "../../data";
import { Category } from "../../types";

const ProjectsList = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");

    const handlerFilterCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsData);
            setActive(category);
            return;
        }

        const newArray = projectsData.filter((project) =>
            project.category.includes(category)
        );
        setProjects(newArray);
        setActive(category);
    };

    return (
        <div className="px-5 py-2 overflow-y-scroll max-h-screen" >
            <ProjectsNavbar
                handlerFilterCategory={handlerFilterCategory}
                active={active}
            />
            <h2 className="text-center text-2xl">Click the project for me details</h2>
            <div className="relative grid grid-cols-12 gap-4 my-3">
                {projects.map((project) => (
                    <div className="col-span-12 p-3 bg-gradient-to-bl from-cyan-300 to-teal-400 dark:from-cyan-700 dark:to-teal-400 dark:text-white rounded-2xl sm:col-span-6 lg:col-span-4">
                        <ProjectCard project={project} key={project.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;