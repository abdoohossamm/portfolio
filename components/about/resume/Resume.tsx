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
                            Master of science in Computer Science
                        </h5>
                        <p className="font-bold">University of East London</p>
                        <small className={"text-sm font-semibold"}>April 2025 - Now</small>
                    </div>
                    <div>
                        <h5 className="my-2 text-xl font-bold ">
                            Bachelor of science in Computer Science
                        </h5>
                        <p className="font-bold">University of the people (Online, USA)</p>
                        <small className={"text-sm font-semibold"}>September 2020 - May 2023</small>
                        <article className="my-2 ml-2 [&>p:not(:first-child)]:mt-1.5">
                            <p>Graduted with 3.85 CGPA with Highest Honors with focus major on the software engineering.</p>
                            <p>President's list all terms in university</p>
                        </article>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Experience</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Software Engineer & Team Leader</h5>
                        <p className="font-bold">Gigawrks (Florida, USA)</p>
                        <small className={"text-sm font-semibold"}>May 2023 - Now</small>
                        <article className="my-2 ml-2 [&>p:not(:first-child)]:mt-1.5">
                            <p>
                                I am a Software Engineer and Team Leader with a passion for crafting robust, scalable solutions that drive business success. At Gigawrks, I thrive on the dynamic intersection of software architecture, database design, Cloud infrastructure, and DevOps practices. With a keen eye for detail and a knack for optimizing performance, I lead by example in both design and execution, ensuring our systems are efficient, flexible, and maintainable.
                            </p>

                            <p>
                                I lead the design of scalable and efficient software architectures, ensuring they meet the evolving needs of our business. By enhancing existing microservices, I continuously optimize performance and reliability, driving our systems forward.
                            </p>

                            <p>
                                With a focus on database design, I ensure our schemas are finely tuned for efficiency and flexibility. By optimizing database performance, I empower our systems to handle increasing workloads with ease.
                            </p>

                            <p>
                                Leveraging my expertise in Cloud infrastructure, I architect and manage our Cloud environments with precision and foresight. Through the implementation of auto-scalability solutions, I ensure our infrastructure flexes and adapts to demand seamlessly.
                            </p>

                            <p>
                                As a proponent of automation, I build and maintain CI/CD pipelines that serve as the backbone of our software delivery process. By automating deployment and testing, I increase efficiency and reliability across our development lifecycle.
                            </p>

                            <p>
                                With Python (FastAPI) and Golang (FiberAPI) as my tools of choice, I develop RESTful APIs that are secure, efficient, and well-documented. By staying ahead of best practices, I ensure our APIs remain at the forefront of modern development standards.
                            </p>
                            <p className={"font-bold"}>Stack: Python, FastAPI, Golang, REST API, Software Development Life Cycle(SDLC), Software engineering, CI/CD pipeline, TDD.</p>
                        </article>
                    </div>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Back-end Software Engineer</h5>
                        <p className="font-bold">AAK TELE-SCIENCE, INC. (Remote/Part-time) </p>
                        <small className={"text-sm font-semibold"}>January 2023 - Now</small>
                        <article className="my-2 ml-2 [&>p:not(:first-child)]:mt-1.5">
                            <p>
                                I've led remote teams of over 10 developers, guiding them in the development of microservices architecture systems for the NEW AAK platform. By fostering collaboration and communication, I ensure that our teams deliver high-quality solutions efficiently.
                            </p>

                            <p>
                                Leveraging Python (Django, FastAPI) and Golang (FiberAPI), I develop RESTful APIs that serve as the backbone of our systems. I enhance both old and new API endpoints, focusing on improving security and performance to meet evolving needs.
                            </p>

                            <p>
                                With a focus on database design, I ensure our database tables and software are optimized for efficiency, flexibility, and maintainability. By carefully choosing the right tools for each microservice, I ensure they align perfectly with our business requirements.
                            </p>

                            <p>
                                I write and manage tasks for our development teams, ensuring clear goals and milestones are set and achieved. Through effective leadership, I inspire my team to excel and continuously improve, driving success across all projects.
                            </p>

                            <p>
                                I champion a strong DevOps culture within our teams, promoting collaboration and shared responsibility for managing software products and features. By embracing DevOps practices, we streamline our development processes and deliver value to our customers more efficiently.
                            </p>
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
