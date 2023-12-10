import Bar from "./Bar";
import { languages, tools, otherSkills } from "../../data";

const Resume = () => {
    return (
        <div className={"bg-gradient-to-l from-white to-teal-200 rounded-2xl px-6 py-2 dark:from-cyan-700 dark:to-cyan-900 dark:text-white"}>
            {/*Education & Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold ">
                            Bachelor of science in Computer Science
                        </h5>
                        <p className="font-bold">University of the people (Online, USA)</p>
                        <small className={"text-sm font-semibold"}>September 2020 - May 2023</small>
                        <article className="my-2 ml-2 [&>p:not(:first-child)]:mt-1.5">
                            <p>Graduted with 3.85 CGPA with High Honors with focus major on the software engineering.</p>
                            <p>President's list all terms in university</p>
                        </article>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Experience</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Co-founder & Software Engineer</h5>
                        <p className="font-bold">Gigawrks (Florida, USA)</p>
                        <small className={"text-sm font-semibold"}>May 2023 - Now</small>
                        <article className="my-2 ml-2 [&>p:not(:first-child)]:mt-1.5">
                            <p>Leading the software engineering projects.</p> 
                            <p>Design the software, starting from choosing the programming/scripting language that fits the requirements of the service to the deployment and DevOps management.</p>
                            <p>Testing old software for issues and develop it.</p>
                            <p className={"font-bold"}>Stack: Python, FastAPI, Golang, REST API, Software Development Life Cycle(SDLC), Software engineering, CI/CD pipeline, TDD.</p>
                        </article>
                    </div>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Back-end Software Engineer</h5>
                        <p className="font-bold">AAK TELE-SCIENCE, INC. (Remote/Part-time) </p>
                        <small className={"text-sm font-semibold"}>January 2023 - Now</small>
                        <article className="my-2 ml-2 [&>p:not(:first-child)]:mt-1.5">
                            <p className={"font-bold"}>Stack: Python, Django, DjangoRestFramework, REST API, FastAPI, Software Development Life Cycle(SDLC).</p>
                        </article>
                    </div>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Software Developer & IT support</h5>
                        <p className="font-bold">OnTime for general contracting (Alexandria, Egypt) </p>
                        <small className={"text-sm font-semibold"}>October 2021 - November 2022</small>
                        <article className="my-2 ml-2 [&>p:not(:first-child)]:mt-1.5">
                            <p>Developing a fullstack applications for company's projects.</p>
                            <p>Testing old software for bugs and develop it.</p>
                            <p>Manage the IT team for the company and company's projects.</p>
                            <p className={"font-bold"}>Stack: Python, Django, REST API, HTML, CSS, JavaScript.</p>
                        </article>
                    </div>
                </div>
            </div>

            {/*Languages & Tools */}
            <div className="grid gap-9 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Language & Framework</h5>
                    <div className="my-2">
                        {languages.map((language, i) => (
                            <Bar value={language} key={i} />
                        ))}
                    </div>
                </div>

                <div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Tools & Softwares</h5>
                    <div className="my-2">
                        {tools.map((tool, i) => (
                            <Bar value={tool} key={i} />
                        ))}
                    </div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Other skills</h5>
                    <div className="my-2">
                        {otherSkills.map((other, i) => (
                            <Bar value={other} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
