import Bar from "./Bar";
import { languages, tools } from "../../data";

const Resume = () => {
    return (
        <div className={"bg-gradient-to-l from-white to-teal-200 rounded-2xl px-6 py-2 dark:from-cyan-700 dark:to-cyan-900 dark:text-white"}>
            {/*Education & Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Education</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold ">
                            Bachelor of science in Computer Science
                        </h5>
                        <p className="font-bold">University of the people <small className={"text-sm"}>(2020-2023)</small></p>
                        <p className="my-3">
                            I am currently pursuing Bachelor's degree in Computer Science from University of the people with 120 credits
                        </p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold text-teal-600">Experience</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Software Developer & IT support</h5>
                        <p className="font-bold">OnTime for contracting and general supplies <small className={"text-sm"}>(Oct 2021 to Nov 2022)</small></p>
                        <p className="my-3">Working on projects in Alexandria university for creating, developing, and managing Smart Gate system that has a software and physical servers.</p>
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
                </div>
            </div>
        </div>
    );
};

export default Resume;