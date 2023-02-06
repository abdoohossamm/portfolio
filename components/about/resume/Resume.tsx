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
                        <small className={"text-sm font-semibold"}>September 2020 - April 2023</small>
                        <article className="my-2 ml-2 [&>p:not(:first-child)]:mt-1.5">
                            <p>Done 105 credit over 120 credit with 3.8+ CGPA</p>
                            <p>Done all major courses and now finishing the electives courses</p>
                            <p>President's list all terms in university</p>
                            <p>Expected to graduate in April 2023</p>
                        </article>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Experience</h5>
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