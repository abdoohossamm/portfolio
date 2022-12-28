import React from 'react';
import ProjectsList from "./projectList/ProjectsList";

function Projects() {
    return (
        <section id="projects" className="min-h-screen">
            <div className={"text-center p-6"}>
                <h5 className="text-2xl pt-2 dark:text-white">What I Do</h5>
                <h2 className="p-10 text-4xl lg:text-5xl py-2 text-teal-600 font-medium">My Projects</h2>
            </div>
            <div className={"bg-gradient-to-l from-white to-teal-200 rounded-2xl px-6 py-2 dark:from-cyan-700 dark:to-cyan-900 dark:text-white"}>
                <ProjectsList/>
            </div>
        </section>
    );
}

export default Projects;